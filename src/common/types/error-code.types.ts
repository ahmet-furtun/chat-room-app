export interface IErrorMessage{
    message: string;
    code: number;
    status: boolean;
}

export interface IPopUpProps {
    message:string;
    format: "success" | "info" | "warning" | "error" | undefined;
    popUpShow: boolean;
    setOpen(openPopUp:boolean) : void;
}