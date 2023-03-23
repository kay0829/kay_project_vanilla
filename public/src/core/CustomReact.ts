/*
* 리액트 hooks 간단히 구현
*/
function CustomReact () {
    const options = {
        currentStateIdx: 0,
        renderCount: 0,
    }

    let root: Element | any = null;
    let rootComponent: Element | any = null;

    let events: Array<Function> = [];

    const states: any[] = [];

    /*
    * CustomReact hooks 1. useEvents
    * useEvents: 컴포넌트를 모두 렌더링한 후 이벤트를 등록할 수 있도록 도와주는 메서드
    */
    const useEvents = (eventFns: Array<Function>) => {
        events = [...events, ...eventFns];
    };

    const registerEvents = () => {
        if (events.length > 0) {
            events.forEach((eventFn) => eventFn())
        }
    }

    /* 
    * CustomReact hooks 2. useState
    * useState: state 관리하도록 도와주는 메서드
    */
    const useState = (initState: any) => {
        const { currentStateIdx } = options;

        if (states.length === currentStateIdx) {
            states.push(initState);
        }
    
        const state = states[currentStateIdx];

        const setState = (newState: any) => {
            states[currentStateIdx] = newState;
            _render();
        }

        options.currentStateIdx += 1;

        return [ state, setState ];
    }

    /*
    * CustomReact hooks 3. render
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
        options.currentStateIdx = 0;
        console.log('_render currentStateIdx', options.currentStateIdx);

        events = [];

        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });

    return { useEvents, useState, render };
}


const { useEvents, useState, render } = CustomReact();
export { useEvents, useState, render };

export default CustomReact;