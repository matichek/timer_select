# Circular Time Wheel Selector

A modern, elegant time selection interface with circular wheels for hours and minutes.

![image](https://github.com/user-attachments/assets/525cfa80-81ca-48bf-9b3d-2670291c8ff8)


## Features

- Intuitive circular wheel interface for selecting hours (0-6) and minutes (in 15-minute increments)
- Clean, flat design with minimal aesthetics
- Touch and mouse gesture support for rotating the wheels
- Responsive layout that works on both desktop and mobile devices
- Real-time display of the selected time in a readable format

## Usage

1. Rotate or click on the hour wheel (left) to select hours from 0 to 6
2. Rotate or click on the minute wheel (right) to select minutes in 15-minute increments (00, 15, 30, 45)
3. The selected time appears in the input field below the wheels
4. Click "Submit" to confirm your selection

## Implementation Details

The time selector is built using vanilla JavaScript and CSS, with no external dependencies. Key technical features include:

- CSS variables for easy theming
- Circular positioning calculations for wheel items
- Touch and mouse event handling for intuitive rotation
- Smooth transitions and subtle animations for better user experience

## Customization

You can easily customize the appearance by modifying the CSS variables in the `:root` selector:


```
:root {
--primary-color: #2563eb;
--primary-light: #60a5fa;
--primary-dark: #1d4ed8;
--background: #f8fafc;
--surface: #ffffff;
--on-primary: #ffffff;
--on-surface: #0f172a;
--border: #e2e8f0;
--shadow: rgba(0, 0, 0, 0.04);
}
```

## Browser Support

The time selector works in all modern browsers that support ES6 JavaScript and modern CSS features:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

# Calendar Application

A lightweight, browser-based calendar application with a time-grid view that allows users to create, edit, move, and resize events with 15-minute precision.

## Features

- **Working Hours View**: Calendar grid displays time slots from 8:00 AM to 8:00 PM
- **15-Minute Time Increments**: Precise scheduling with visual indicators for each quarter hour
- **Event Management**:
  - Create events with title, date, start/end times, description, and color
  - Edit existing events
  - Delete events
  - Move events between days via drag-and-drop
  - Resize events by dragging handles (change start or end time)
- **Data Persistence**: All events are saved to localStorage
- **Intuitive Navigation**: Easily navigate between weeks
- **Visual Cues**:
  - Highlights for today's date and current time
  - Color-coding for events
  - Visual distinction between different 15-minute increments

## How to Use

### Getting Started

1. Open the `calendar.html` file in any modern web browser
2. The calendar will display the current week by default
3. Events are automatically loaded from localStorage if previously saved

### Navigation

- **Previous Week**: Click the "Previous Week" button
- **Next Week**: Click the "Next Week" button
- **This Week**: Click the "This Week" button to return to the current week
- **Reload Events**: Click the "Reload Events" button to manually refresh events from localStorage

### Managing Events

#### Creating an Event

1. Click on any time slot in the calendar grid
2. Fill in the event details in the modal:
   - Title (required)
   - Date (pre-filled)
   - Start Time (pre-filled based on clicked time slot)
   - End Time (defaults to 30 minutes after start time)
   - Description (optional)
   - Color (choose from available options)
3. Click "Save" to create the event

#### Moving an Event

1. Hover over an event to see the move cursor
2. Click and drag the event:
   - Drag vertically to change the time while keeping it on the same day
   - Drag horizontally to move it to a different day
   - Drag diagonally to change both day and time
3. Release the mouse button to confirm the new position

#### Resizing an Event

1. Hover over the top or bottom edge of an event to see the resize cursor
2. Click and drag:
   - Drag the top handle to change the start time
   - Drag the bottom handle to change the end time
3. Events will snap to 15-minute increments
4. Release the mouse button to confirm the new size

#### Editing an Event

1. Click on an event to open its details
2. Click the "Edit" button to modify the event
3. Update the details in the modal
4. Click "Save" to apply changes

#### Deleting an Event

1. Click on an event to open its details
2. Click the "Edit" button
3. Click the "Delete" button in the edit modal
4. Confirm the deletion when prompted

## Technical Details

- **Pure JavaScript**: No external libraries or frameworks required
- **LocalStorage**: All events are saved to the browser's localStorage
- **Responsive Design**: Works on various screen sizes
- **Working Hours**: Calendar displays from 8:00 AM to 8:00 PM by default (configurable)
- **15-Minute Precision**: All time calculations snap to 15-minute increments

## Notes

- Events outside working hours (8 AM - 8 PM) will not be displayed on the grid but remain in storage
- The calendar automatically adjusts for events crossing hour boundaries
- Minimum event duration is 15 minutes
- All events snap to 15-minute increments when being created, moved, or resized
