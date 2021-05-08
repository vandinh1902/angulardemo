import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { DayOneComponent } from './day-one/day-one.component';
import { DataBindingComponent } from './day-one/data-binding/data-binding.component';
import { OneWayComponent } from './day-one/data-binding/one-way/one-way.component';
import { TowayComponent } from './day-one/data-binding/toway/toway.component';
import { FormsModule } from '@angular/forms';
import { DaytwoComponent } from './daytwo/daytwo.component';
import { DirectivesComponent } from './daytwo/directives/directives.component';
import { StructuralDirectiveComponent } from './daytwo/directives/structural-directive/structural-directive.component';
import { NgIfComponent } from './daytwo/directives/structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './daytwo/directives/structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './daytwo/directives/structural-directive/ng-switch/ng-switch.component';
import { AttributeDirectiveComponent } from './daytwo/directives/attribute-directive/attribute-directive.component';
import { NgClassComponent } from './daytwo/directives/attribute-directive/ng-class/ng-class.component';
import { NgStyleComponent } from './daytwo/directives/attribute-directive/ng-style/ng-style.component';
import { HighLightDirective } from './daytwo/directives/custom-directive/high-light.directive';
import { DayThreeComponent } from './day-three/day-three.component';
import { ListMovieComponent } from './day-three/list-movie/list-movie.component';
import { ItemMovieComponent } from './day-three/item-movie/item-movie.component';



@NgModule({
  declarations: [
    LessonComponent,
    DayOneComponent,
    DataBindingComponent,
    OneWayComponent,
    TowayComponent,
    DaytwoComponent,
    DirectivesComponent,
    StructuralDirectiveComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    AttributeDirectiveComponent,
    NgClassComponent,
    NgStyleComponent,
    HighLightDirective,
    DayThreeComponent,
    ListMovieComponent,
    ItemMovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LessonComponent,DayOneComponent]
})
export class LessonModule { }
