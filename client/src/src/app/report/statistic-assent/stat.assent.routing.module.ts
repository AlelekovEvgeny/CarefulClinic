import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* ���������� �������� */
import { StatisticsAssentComponent } from './stat.assent.component';
/* �������� ���������� */
import { ReportStatisticsAssentComponent } from './reports/report.stat.assent.component';



const routes: Routes = [
  { path: '', component: StatisticsAssentComponent,
	children: [
      { path: 'reports', component: ReportStatisticsAssentComponent }
	 // { path: 'content/report/informing', component: BrowserComponent}*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsAssentRoutingModule {}