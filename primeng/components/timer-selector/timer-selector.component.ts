import { Component, forwardRef, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-timer-selector',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  templateUrl: './timer-selector.component.html',
  styleUrls: ['./timer-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimerSelectorComponent),
      multi: true
    }
  ]
})
export class TimerSelectorComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Select time';
  @Input() buttonIcon: string = 'pi pi-clock';
  @Input() buttonClass: string = 'p-button-primary';
  @Input() dialogHeader: string = 'Select Time';
  @Output() timeSelected = new EventEmitter<string>();
  
  // Hour/minute values using signals
  hours = signal<number>(0);
  minutes = signal<number>(0);
  
  // Derived state
  selectedTime = computed(() => {
    const hour = this.hours();
    const minute = this.minutes();
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  });
  
  // Dialog visibility
  visible = signal<boolean>(false);
  
  // For control value accessor
  disabled = signal<boolean>(false);
  touched = false;
  onChange: any = () => {};
  onTouched: any = () => {};
  
  // Wheel configuration
  hourOptions = Array.from({ length: 7 }, (_, i) => i); // 0-6
  minuteOptions = [0, 15, 30, 45]; // 15-minute intervals
  
  // Current displayed value
  displayValue = signal<string>('');
  
  // Methods for wheel interaction
  selectHour(hour: number): void {
    this.hours.set(hour);
    this.markAsTouched();
  }
  
  selectMinute(minute: number): void {
    this.minutes.set(minute);
    this.markAsTouched();
  }
  
  // Open the timer dialog
  openTimerDialog(): void {
    this.visible.set(true);
  }
  
  // Close the dialog without saving
  cancelSelection(): void {
    this.visible.set(false);
  }
  
  // Apply the selected time
  applySelection(): void {
    const time = this.selectedTime();
    this.displayValue.set(time);
    this.onChange(time);
    this.timeSelected.emit(time);
    this.visible.set(false);
  }
  
  // ControlValueAccessor interface
  writeValue(value: string): void {
    if (value) {
      this.displayValue.set(value);
      const [hoursStr, minutesStr] = value.split(':');
      this.hours.set(parseInt(hoursStr, 10));
      this.minutes.set(parseInt(minutesStr, 10));
    }
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
  
  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
} 