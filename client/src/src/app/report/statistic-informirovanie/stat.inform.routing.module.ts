import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* ���������� �������� */
import { StatisticsInformirovanieComponent } from './stat.inform.component';
/* �������� ���������� */
import { ReportStatisticsInformirovanieComponent } from './reports/report.stat.inform.component';



const routes: Routes = [
  { path: '', component: StatisticsInformirovanieComponent,
	children: [
      { path: 'reports', component: ReportStatisticsInformirovanieComponent }
	 // { path: 'content/report/informing', component: BrowserComponent}*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsInformirovanieRoutingModule {}