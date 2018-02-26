import { Injectable, OnDestroy } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import {environment} from '../../environments/environment';
import { ListExcelFiles } from '../model/list.files.excel';


@Injectable()
export class ListInformirovanieHeaderService{

  serverUrl : string = environment.BACKEND_URL + "/rest/inform";
  

  constructor(private http: Http) { console.log('ContactService instance created.'); }
  
  /*
	  ��� �������� �����. ����� ��������� � ������� ������� ������� � ������ ���������� �������� �� ��������� �������� �����.
	  �������� ����� ������������ �� ������� �� ����� ���������� ���� (���� �������� �� �������) � ���� ����� � ������������
	  ����������.
  */
    downloadFile(data2: number,place: string): Promise<any>{
		const headers = new Headers({'Content-Type': 'application/json', 'Accept': '*'});
		const options = new RequestOptions({headers: headers});
		options.responseType = ResponseContentType.Blob;
		return this.http.get(`${this.serverUrl}/download/${place}/${data2}`, options)
		  /*.subscribe((response) => {
					var blob = new Blob([response.blob()], {type: 'application/x-dbase'});
					var filename = 'report.dbf';
					FileSaver.saveAs(blob, filename);
			})*/
					  .toPromise()
		.then(response =>response);
	}
	
  /* �������� �������������� ������. �������������� � ������ �����*/
  
  listFiles(data : number): Promise<ListExcelFiles[]> {
  let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(`${this.serverUrl}/listFilesSecondStageInform/${data}`,{headers: headers})
               .toPromise()
               .then(response => response.json() as ListExcelFiles[]);
  }
  
  /* �������� �������������� ������. �������������� ������������� */
  
  listFilesKvartals(data : number): Promise<ListExcelFiles[]> {
  let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(`${this.serverUrl}/listFilesInformKvartals/${data}`,{headers: headers})
               .toPromise()
               .then(response => response.json() as ListExcelFiles[]);
  }
  
  

	/*
		����� ������������ ��� �������� ����� �� ������� ����.
	*/  
	downloadFile_2(data: string,data2: number,place: string):Promise<any>{
	 const headers = new Headers({'Content-Type': 'application/json', 'Accept': '*'});
		const options = new RequestOptions({headers: headers});
		options.responseType = ResponseContentType.Blob;
		 return this.http.get(`${this.serverUrl}/listFilesSecondStageInform/${place}/${data2}/${data}`, options)
		  .toPromise()
			.then(response =>response);
	}
	
	/*
		����� ������������ ��� �������� ����� �� ������� ����.
		����������� ��������������
	*/  
	downloadFile_kvartals(data: string,data2: number,place: string):Promise<any>{
	 const headers = new Headers({'Content-Type': 'application/json', 'Accept': '*'});
		const options = new RequestOptions({headers: headers});
		options.responseType = ResponseContentType.Blob;
		 return this.http.get(`${this.serverUrl}/listFilesInformKvartals/${place}/${data2}/${data}`, options)
		  .toPromise()
			.then(response =>response);
	}
	
  
  
  
}
