export class API {
    public static baseURL = 'http://localhost:3000/api/';

    public static getAllPost = this.baseURL +'posts';
    public static getPost = this.baseURL +'posts/id/';
    public static editPost = this.baseURL +'posts/edit';
    public static addPost = this.baseURL +'posts';
    public static deletePost = this.baseURL +'posts/';


}