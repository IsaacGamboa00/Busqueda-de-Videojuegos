import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Game } from "src/app/model/game/game";
import { Observable } from "rxjs";
import { GameDetail } from '../../model/gameDetail/gameDetail';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private url: string = environment.apiUrl;
    constructor(private http: HttpClient){}

    getAllByGameName(gameName:string):Observable<Array<Game>>{
        return this.http.get<Array<Game>>(this.url+"title="+gameName)
    }

    getById(id:number):Observable<GameDetail>{
        return this.http.get<GameDetail>(this.url+"id="+id)
    }
}