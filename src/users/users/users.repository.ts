import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    findOne(userFilterQuery: FilterQuery<UserDocument>): Promise<User> {
        return this.userModel.findOne(userFilterQuery);
    }

    find(): Promise<User[]> {
        return this.userModel.find();
    }

    create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    findOneAndUpdate(userFilterQuery: FilterQuery<UserDocument>, user: Partial<User>): Promise<User> {
        return this.userModel.findByIdAndUpdate(userFilterQuery, user, { new: true });
    }
}
