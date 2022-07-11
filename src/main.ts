// Copyright (c) 2022 Gabriel Barros - https://github.com/Colgate13

import { EngineIo } from './modules/Engine/domain/EngineIo';
import { RenderTerminal } from './modules/Render/RenderTerminal';
import { FrameHandler } from './modules/Render/FrameRender';
import { InputHandler } from './modules/Input/InputHandler';
import { Key, IKeyMap } from './modules/Input/keyMap';
import { Render } from './modules/Render/domain/Render';

export { EngineIo } from './modules/Engine/domain/EngineIo';
export { RenderTerminal } from './modules/Render/RenderTerminal';
export { FrameHandler } from './modules/Render/FrameRender';
export { InputHandler } from './modules/Input/InputHandler';
export { Key, IKeyMap } from './modules/Input/keyMap';
export { Render } from './modules/Render/domain/Render';

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