// @ts-ignore
import logger from '@wdio/logger'

const log = logger('wdio-node-app-service')
export default class Launcher {

    protected options: WebdriverIO.NodeAppServiceOptions;

    constructor(options: WebdriverIO.NodeAppServiceOptions) {
        this.options = options;
    }

    public async onPrepare():Promise<void> {
        return;
    }

    public async onComplete():Promise<void> {
        return;
    }
}
