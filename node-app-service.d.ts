declare interface NodeAppService {
    module: string;
    args?: string[];
    options?: import("child_process").ForkOptions;
}
