import {
    AccompanistDocument, AccompanistModel,
    ChildrenDocument,
    ChildrenModel,
    ChildrenProps,
    ParentDocument,
    ParentModel,
    ParentProps, UserDocument
} from "../models";
import {AuthService} from "./auth.service";


export class ParentService {

    private static instance?: ParentService;

    public static getInstance(): ParentService {
        if(ParentService.instance === undefined) {
            ParentService.instance = new ParentService();
        }
        return ParentService.instance;
    }

    private constructor() { }

    public async createParent(props: ParentProps): Promise<ParentDocument> {
        const model = new ParentModel(props);
        const parent = await model.save();
        return parent;
    }

    async getAll(): Promise<ParentDocument[]> {
        return ParentModel.find().exec();
    }

    async getById(parentId: string): Promise<ParentDocument | null> {
        return ParentModel.findById(parentId).exec();
    }

    async deleteById(parentId: string): Promise<boolean> {
        const res = await ParentModel.deleteOne({_id: parentId}).exec();
        return res.deletedCount === 1;
    }

    async updateById(parentId: string, props: ParentProps): Promise<ParentDocument | null> {
        const parent = await this.getById(parentId);
        if(!parent) {
            return null;
        }
        if(props.username !== undefined) {
            parent.username = props.username;
        }
        if(props.firstName !== undefined) {
            parent.firstName = props.firstName;
        }
        if(props.lastName !== undefined) {
            parent.lastName = props.lastName;
        }
        if(props.children !== undefined) {
            parent.children = props.children;
        }
        const res = await parent.save();
        return res;
    }

    async getChildren(parentId: string): Promise<ChildrenProps[] | null> {
        const parent = await ParentService.getInstance().getById(parentId);
        if(!parent){
            return null;
        }
        return parent.children;
    }

    async getByUsername(username: string): Promise<ParentDocument | null> {
        return ParentModel.findOne({username: username}).exec();
    }

    // get the user associated to the parent given in params
    async getUserParent(parentId: string ): Promise<UserDocument | null>{
        const parent = await ParentService.getInstance().getById(parentId);
        if (!parent) {
            return null;
        }
        const parentUser = await AuthService.getInstance().getByName(parent?.username);
        if (!parentUser){
            return null;
        }
        return parentUser;
    }

    // get the parent associated to the user given in params
    async getParentByUserId(userId: string ): Promise<ParentDocument | null>{
        const user = await AuthService.getInstance().getById(userId);
        if (!user) {
            return null;
        }
        const parent = await ParentService.getInstance().getByUsername(user.login);
        if (!parent){
            return null;
        }
        return parent;
    }
}