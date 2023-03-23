/*
* 리액트 hooks 간단히 구현
*/
function CustomReact () {
    const options = {
        curStateIdx: 0,
        curEffectIdx: 0,
        renderCount: 0,
    }

    let root: Element | any = null;
    let rootComponent: Element | any = null;

    let events: Array<Function> = [];

    const states: any[] = [];
    const effectDependencies: any[] = [];

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
        events = [...events, ...eventFns];
    };

    /* 
    * CustomReact hooks 3. useState
    * useState: state 관리하도록 도와주는 메서드
    */
    const useState = (initState: any) => {
        const { curStateIdx } = options;

        if (states.length === curStateIdx) {
            states.push(initState);
        }
    
        const state = states[curStateIdx];

        const setState = (newState: any) => {
            states[curStateIdx] = newState;
            _render();
        }

        options.curStateIdx += 1;

        return [ state, setState ];
    }

    /* 
    * CustomReact hooks 3. useEffect
    * useEffect: dependency 배열의 값들에 변경이 생겼을 경우 callback을 실행하는 메서드
    */
    const useEffect = (callback: Function, dependencies: Array<any>) => {
        const { curEffectIdx } = options;

        if (effectDependencies.length === curEffectIdx) {
            effectDependencies.push(dependencies);
        }

        const dependency = effectDependencies[curEffectIdx];

        // dependency가 없을 경우 callback 바로 실행 (mount 되었을 때 실행)
        // ex. useEffect(() => {}, [])
        let hasChanged = true;

        if (dependency && dependencies.length !== 0) {
            // Array.prototype.some: 판별 함수 적어도 하나라도 통과하는지 체크
            // Object.is: 두 개의 파라미터가 동일한지 체크
            // 즉, 기존 dependency와 새로 받은 dependency 사이에 차이가 하나라도 있는 경우 true를 반환
            hasChanged = dependencies.some((v, i) => {
                return !Object.is(v, dependency[i]);
            })
        }

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
    * registerEvents: 이벤트 함수 등록을 위해 실행하는 메서드
    */
    const registerEvents = () => {
        if (events.length > 0) {
            events.forEach((eventFn) => eventFn())
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

        // 이벤트 등록
        registerEvents();
        
        // 변수 초기화
        options.curStateIdx = 0;
        console.log('_render curStateIdx', options.curStateIdx);

        options.curEffectIdx = 0;
        console.log('_render curEffectIdx', options.curEffectIdx);

        events = [];

        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });

    return { render, useEvents, useState, useEffect };
}


const { render, useEvents, useState, useEffect } = CustomReact();
export { render, useEvents, useState, useEffect };

export default CustomReact;