import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TimerSelectorComponent } from './timer-selector.component';

@Component({
  selector: 'app-timer-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputTextModule,
    TimerSelectorComponent
  ],
  template: `
    <div class="card">
      <h2>Timer Selector Demo</h2>
      
      <h3>Basic Usage with p-inputGroup</h3>
      <div class="demo-section">
        <p-inputGroup>
          <input 
            type="text" 
            pInputText 
            [(ngModel)]="inputValue" 
            placeholder="Enter text..." 
          />
          <p-inputGroupAddon>
            <app-timer-selector 
              [(ngModel)]="selectedTime" 
              (timeSelected)="onTimeSelected($event)"
            ></app-timer-selector>
          </p-inputGroupAddon>
        </p-inputGroup>
        
        <div class="result-display" *ngIf="selectedTime">
          <p>Selected text: {{ inputValue }}</p>
          <p>Selected time: {{ selectedTime }}</p>
        </div>
      </div>
      
      <h3>Custom Appearance</h3>
      <div class="demo-section">
        <p-inputGroup>
          <input 
            type="text" 
            pInputText 
            placeholder="Task description..." 
          />
          <p-inputGroupAddon>
            <app-timer-selector 
              buttonIcon="pi pi-stopwatch"
              buttonClass="p-button-warning"
              dialogHeader="Select Task Duration"
              placeholder="Set duration"
            ></app-timer-selector>
          </p-inputGroupAddon>
          <button 
            type="button" 
            pButton 
            icon="pi pi-check" 
            class="p-button-success"
          ></button>
        </p-inputGroup>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: var(--surface-card);
      padding: 2rem;
      border-radius: 10px;
      margin-bottom: 1rem;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 
                  0 1px 1px 0 rgba(0,0,0,.14), 
                  0 1px 3px 0 rgba(0,0,0,.12);
    }
    
    h2 {
      margin-top: 0;
      margin-bottom: 2rem;
      color: var(--text-color);
    }
    
    h3 {
      margin-top: 1.5rem;
      color: var(--text-color-secondary);
    }
    
    .demo-section {
      margin-bottom: 2rem;
    }
    
    .result-display {
      margin-top: 1rem;
      padding: 1rem;
      background: var(--surface-hover);
      border-radius: 6px;
    }
    
    .result-display p {
      margin: 0.5rem 0;
    }
  `]
})
export class TimerDemoComponent {
  inputValue: string = '';
  selectedTime: string = '';
  
  onTimeSelected(time: string) {
    console.log('Time selected:', time);
  }
} 