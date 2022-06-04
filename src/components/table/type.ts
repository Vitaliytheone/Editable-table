export type TTable = {
    isEditing: boolean;
    data: TData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TData = Array<{
    name: string;
    surname: string;
    address: string;
    age: number;
    mark: number;
}>

export type TBody = TTable;

export type TBodyCol = {
    label: string;
    idx: number;
    disabled: boolean;
    type: 'number' | 'text';
    defaultValue: number | string;
    field: number | string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
