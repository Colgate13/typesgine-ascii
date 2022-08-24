// Copyright (c) 2022 Gabriel Barros - https://github.com/Colgate13

import { EngineFactory as EngineIo } from './modules/EngineFactory';
import { RenderTerminal } from './modules/Render/Platforms/terminal';
import { FrameHandler } from './modules/Render/FrameRender';
import { InputHandler } from './modules/Input/InputHandler';
import { Key, IKeyMap } from './modules/Input/keyMap';
import { Render } from './modules/Render/domain/Render';

export { EngineFactory as EngineIo } from './modules/EngineFactory';

export { RenderTerminal } from './modules/Render/Platforms/terminal';
export { BrowserFactory } from './modules/Render/Platforms/browser';
export { FrameHandler } from './modules/Render/FrameRender';
export { Render } from './modules/Render/domain/Render';

export { InputHandler } from './modules/Input/InputHandler';
export { Key, IKeyMap } from './modules/Input/keyMap';

export { EngineIo as IEngineIo } from './shared/interfaces/IEngine'
export { IRender } from './shared/interfaces/IRender';

export default {
    EngineIo,
    RenderTerminal,
    FrameHandler,
    InputHandler,
    Render,
    Key
};