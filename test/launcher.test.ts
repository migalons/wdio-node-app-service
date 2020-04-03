import Launcher from "../src/launcher";

describe('launcher', () => {

    const options: NodeAppService = {
        module: './test/server.js',
        options: {
            "env":{
                "PORT": "5000"
            }
        }
    };

    test('to be created with right options', () => {
        const launcher = new Launcher(options);
        expect(launcher).toBeTruthy();
        expect(launcher.options).toEqual(options);
    });

    test('should start provided app on prepare method', () => {
        const launcher = new Launcher(options);
        launcher.onPrepare();
        expect(launcher.running).toBe(true);
        launcher.onComplete();
    });

    test('should stop provided app on stop method', async () => {
        const launcher = new Launcher(options);
        launcher.onPrepare();
        expect(launcher.running).toBe(true);
        launcher.onComplete();
        expect(launcher.running).toBe(false);
    });

    test('should stop provided app on stop method', async () => {
        const launcher = new Launcher(options);
        launcher.onPrepare();
        expect(launcher.running).toBe(true);
        launcher.onComplete();
        expect(launcher.running).toBe(false);
    });

})

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
