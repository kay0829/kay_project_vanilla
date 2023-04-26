/*
* 리액트 hooks 간단히 구현
*/
function CustomReact () {
    let root: Element | any = null;
    let rootComponent: Element | any = null;

    const states = new Map();
    const curStatesIdx = new Map();

    let mountEffects: Array<Function> = [];

    const effectDependencies: any[] = [];

    const options = {
        curEffectIdx: 0,
        renderCount: 0,
    }

    /*
    * CustomReact hooks
    * =========================================================================
    * CustomReact hooks 1. render
    * render: root가 되는 엘리먼트를 렌더링하는 메서드
    */
    const render = (rootEl: Element | any, rootComponentEl: Element | any) => {
        if (rootEl) {
            root = rootEl;
        }

        if (rootComponentEl) {
            rootComponent = rootComponentEl;
        }
        
        _render();
    }

    /*
    * CustomReact hooks 2. useEvents
    * useEvents: 컴포넌트를 모두 렌더링한 후 이벤트를 등록할 수 있도록 도와주는 메서드
    */
    const useEvents = (eventFns: Array<Function>) => {
        useEffect(() => {
            console.log("eventFns", eventFns);
            eventFns.forEach((fn) => {
                console.log("yahoo1", fn);
                /* 
                * el: 이벤트 함수를 붙이고 싶은 엘리먼트의 배열 혹은 단일 엘리먼트
                * event: 이벤트 함수의 이벤트 종류
                * callback: 이벤트 함수의 콜백 함수
                * neededState: 이벤트 함수를 실행하면서 필요한 state
                * setNeededState: 이벤트 함수를 실행하면서 바꾸고 싶은 state를 변화시키는 함수
                */
                const [el, event, callback, neededState, setNeededState] = fn();
                console.log("yahoo2", el, event, callback, neededState, setNeededState);

                if (Array.isArray(el)) {
                    el.forEach((targetEl) => {
                        targetEl.addEventListener(event, (e: Event) => callback(e, targetEl, neededState, setNeededState));
                    })
                    return;
                }
                el.addEventListener(event, (e: Event) => callback(e, el, neededState, setNeededState));
            });

            return () => {
                eventFns.forEach((fn) => {
                    const [el, event, callback, neededState, setNeededState] = fn();

                    if (Array.isArray(el)) {
                        el.forEach((targetEl) => {
                            targetEl.removeEventListener(event, (e: Event) => callback(e, targetEl, neededState, setNeededState));
                        })
                        return;
                    }
                    el.removeEventListener(event, (e: Event) => callback(e, el, neededState, setNeededState));
                });
              };
        }, []);
    };
    
    /**
    * CustomReact hooks 3. useState
    * useState: state 관리하도록 도와주는 메서드
    * 클로저(함수 선언시의 스코프를 기억하는 자바스크립트의 특징)를 활용
    * @param {string} caller useState를 호출한 컴포넌트(함수)명
    * @param {any} initState 초기화할 state
    */
    const useState = (caller: string, initState: any) => {
        if (!states.get(caller)) {
            states.set(caller, []);
            curStatesIdx.set(caller, 0);
        }
        const curStateIdx = curStatesIdx.get(caller);

        if (!states.get(caller)[curStateIdx]) {
            states.get(caller)[curStateIdx] = initState;
        }
    
        const state = states.get(caller)[curStateIdx];

        const setState = (newState: any) => {
            states.get(caller)[curStateIdx] = newState;
            console.log('setState', caller, curStateIdx, newState);

            _render();
        }

        curStatesIdx.set(caller, curStateIdx + 1);
        return [ state, setState ];
    }

    /* 
    * CustomReact hooks 4. useEffect
    * useEffect: dependency 배열의 값들에 변경이 생겼을 경우 callback을 실행하는 메서드
    */
    const useEffect = (callback: Function, dependencies: Array<any>) => {
        // 1. dependency가 없을 경우 callback 바로 실행 (mount 되었을 때 실행)
        // ex. useEffect(() => {}, [])
        if (dependencies.length === 0) {
            mountEffects.push(callback);

            return;
        }

        // 2. dependency가 있을 경우 dependency 변경 시에만 callback 실행
        // ex. useEffect(() => {}, [a, b, ..., z])
        const { curEffectIdx } = options;

        if (effectDependencies.length === curEffectIdx) {
            effectDependencies.push(dependencies);
        }
        console.log("effectDependencies", effectDependencies);

        const dependency = effectDependencies[curEffectIdx];

        let hasChanged = true;

        if (dependency) {
            // Array.prototype.some: 판별 함수 적어도 하나라도 통과하는지 체크
            // Object.is: 두 개의 파라미터가 동일한지 체크
            // 즉, 기존 dependency와 새로 받은 dependency 사이에 차이가 하나라도 있는 경우 true를 반환
            hasChanged = dependencies.some((v, i) => {
                return !Object.is(v, dependency[i]);
            })
        }
        console.log("hasChanged", hasChanged);

        if (hasChanged) {
            effectDependencies[curEffectIdx] = dependencies;
            callback();
        }

        options.curEffectIdx += 1;
    }

    /*
    * CustomReact 내부 함수
    * =========================================================================
    * debounceFrame: 1초당 디스플레이 주사율만큼 실행하게 하여 지나친 렌더링을 방지하기 위한 메서드
    */
    const debounceFrame = (callback: FrameRequestCallback) => {
        let nextFrameCallback = -1;
        return () => {
          cancelAnimationFrame(nextFrameCallback);
          nextFrameCallback = requestAnimationFrame(callback);
        }
    };

    /*
    * executeMountEffects: mount 시 실행할 메서드들을 실행하는 메서드
    */
    const executeMountEffects = () => {
        if (mountEffects.length > 0) {
            console.log('executeMountEffects', mountEffects);
            mountEffects.forEach((mountEfFn) => mountEfFn());
        }
    }

    /*
    * _render: 실질적으로 리액트 내부에서 렌더링을 담당하는 메서드
    */
    const _render = debounceFrame(() => {
        if (!root || !rootComponent) {
            return;
        }

        // 화면 렌더링
        root.innerHTML = rootComponent();

        // 마운트 시 실행시킬 콜백 함수 실행
        executeMountEffects();
        
        // 변수 초기화
        const callersName = [];
        for (const [key, _] of states) {
            callersName.push(key);
        }
        callersName.forEach((caller) => {
            curStatesIdx.set(caller, 0);
        })
        console.log(states.entries());
        console.log(curStatesIdx.entries());

        options.curEffectIdx = 0;
        console.log('_render curEffectIdx', options.curEffectIdx);

        mountEffects = [];

        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });

    return { _render, render, useEvents, useState, useEffect };
}


const { _render, render, useEvents, useState, useEffect } = CustomReact();

export { _render, render, useEvents, useState, useEffect };

export default CustomReact;