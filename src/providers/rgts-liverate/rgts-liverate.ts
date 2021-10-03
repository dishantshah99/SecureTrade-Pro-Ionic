import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HTTP} from "@ionic-native/http";

/*
  Generated class for the RgtsLiverateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RgtsLiverateProvider {

    constructor(public http: HttpClient, public https: HTTP) {
        console.log('Hello RgtsLiverateProvider Provider');
    }

    Liverateapi(URL) {

        let data = {};

        return new Promise((resolve, reject) => {
            this.https.setDataSerializer("json");
            this.https.get(URL, data, {})
                .then(data => {
                    console.log("api Liverateapi data", data);
                    let success_data = data;
                    resolve(success_data.data);
                }, (err) => {
                    console.log("api Liverateapi err", err);
                    reject(err);
                });
        });

    }
}
