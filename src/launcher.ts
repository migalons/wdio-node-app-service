// @ts-ignore
import logger from '@wdio/logger'
import childProcess from 'child_process';

const log = logger('wdio-node-app-service')
export default class Launcher {

    protected _service: NodeAppService;
    protected _childprocess: any;
    protected _running: boolean = false;

    constructor(options: NodeAppService) {
        this._service = options;
    }

    public async onPrepare(): Promise<void> {
        log.debug(`Starting app ${this._service.module}`);
        this._childprocess = childProcess.fork(this._service.module, this._service.args, {...this._service.options} );
    }

    public async onComplete(): Promise<void> {
        log.debug(`Stopping app ${this._service.module}`);
        this._childprocess.kill('SIGINT');
    }

    public get options(): NodeAppService {
        return this._service;
    }

    public get running(): boolean {
        log.debug(`Is running? ${!this._childprocess.exitCode && !this._childprocess.killed}`);
        return !this._childprocess.exitCode && !this._childprocess.killed;
    }

    private onExit(): void {
        this._running = false;
    }
}
