export type TTable = {
    isEditing: boolean;
    data: TData;
    onChange: (e: any) => void;
}

export type TData = Array<{
    name: string;
    surname: string;
    address: string;
    age: number;
    mark: number;
}>

export type TBody = TTable;