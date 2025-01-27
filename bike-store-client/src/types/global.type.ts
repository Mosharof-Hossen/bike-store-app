export type ErrorSource = {
    path: string;
    message: string;
};

export type TError = {
    data: {
        success: boolean;
        message: string;
        errorSources: ErrorSource[];
        stack: string
    }
};

export type TMeta = {
    limit: string;
    page: string;
    total: string;
    totalPage: string;
}

export type TResponse<T> = {
    data?: T;
    message?: string;
    success?: boolean;
    error?: TError;
    meta?: TMeta;
}


export type TQueryParams = {
    name: string,
    value: boolean | React.Key;
}