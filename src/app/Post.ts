export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(title: string, content: string, love: number) {
        this.createdAt = new Date();
        this.content = content;
        this.loveIts = love;
        this.title = title;
    }
}
