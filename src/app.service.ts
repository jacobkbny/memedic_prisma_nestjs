import { Injectable } from '@nestjs/common';

import {insertDefinition, getWordData, insertUserData} from 'src/app.test.prisma'
import { CreateUserRequest } from './dtos/create_user_dto';
import { InsertUserResponse } from './dtos/Insert_user_dto';
@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }
  async insertUser(createUserRequest : CreateUserRequest){
    const response : InsertUserResponse =  await insertUserData(createUserRequest)
    console.log("response: " + JSON.stringify(response))
      return JSON.stringify(response)
  }
  registerWord() : void{
    insertDefinition();
  }

  // getWord() : void {
  //   getWordData()
  // }

  

}
