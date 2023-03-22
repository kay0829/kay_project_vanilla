function CustomReact () {
    const options = {
        currentStateIdx: 0,
        renderCount: 0,
    }

    let root: Element | any = null;
    let rootComponent: Element | any = null;

    let events: Array<Function> = [];

    const states: any[] = [];

    const useEvents = (eventFns: Array<Function>) => {
        events = [...events, ...eventFns];
    };

    const registerEvents = () => {
        if (events.length > 0) {
            events.forEach((eventFn) => eventFn())
        }
    }

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

    const render = (rootEl: Element | any, rootComponentEl: Element | any) => {
        if (rootEl) {
            root = rootEl;
        }

        if (rootComponentEl) {
            rootComponent = rootComponentEl;
        }
        
        _render();
    }

    const debounceFrame = (callback: FrameRequestCallback) => {
        let nextFrameCallback = -1;
        return () => {
          cancelAnimationFrame(nextFrameCallback);
          nextFrameCallback = requestAnimationFrame(callback);
        }
    };
    
    const _render = debounceFrame(() => {
        if (!root || !rootComponent) {
            return;
        }

        root.innerHTML = rootComponent();
        
        options.currentStateIdx = 0;
        options.renderCount += 1;

        registerEvents();

        console.log('_render currentStateIdx', options.currentStateIdx);
        console.log('_render renderCount', options.renderCount);
    });

    return { useEvents, useState, render };
}


const { useEvents, useState, render } = CustomReact();
export { useEvents, useState, render };

export default CustomReact;