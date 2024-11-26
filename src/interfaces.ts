export interface PostT{
    id: number;
    title: string;
    description: string;
    date:string;
    author: {
        id: number;
        name: string;
        profilePic: string;
    }
    isValide:boolean;
}

export interface UserT{
    id:number,
    name:string,
    email:string,
    status:boolean,
    picUrl:string
}
