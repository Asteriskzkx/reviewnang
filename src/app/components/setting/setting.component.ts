import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-setting',
  standalone: false,
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent implements OnInit {
  currentUser: User | null = null;
  activeTab: string = 'profile';
  isLoggedIn: boolean = false;

  username: string = '';
  email: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  privacyOption: string = 'public';
  loginLocationSecurity: boolean = true;
  restrictMessages: boolean = false;
  enableDataCache: boolean = true;

  profileColors: string[] = [
    '#3498db',
    '#9b59b6',
    '#2ecc71',
    '#e67e22',
    '#e74c3c',
    '#ff93c7',
    '#607d8b',
  ];
  selectedColor: string = '#3498db';

  siteThemes: string[] = ['light', 'dark'];
  selectedTheme: string = 'dark';

  timezones: string[] = [
    '(GMT-11:00) Pago Pago',
    '(GMT-10:00) Hawaii Time',
    '(GMT-09:00) Alaska Time',
    '(GMT-08:00) Pacific Time',
    '(GMT-07:00) Mountain Time',
    '(GMT-06:00) Central Time',
    '(GMT-05:00) Eastern Time',
    '(GMT-04:00) Atlantic Time - Halifax',
    '(GMT-03:00) Sao Paulo',
    '(GMT-02:00) Mid-Atlantic',
    '(GMT-01:00) Azores',
    '(GMT+00:00) London',
    '(GMT+01:00) Berlin',
    '(GMT+02:00) Helsinki',
    '(GMT+03:00) Istanbul',
    '(GMT+04:00) Dubai',
    '(GMT+04:30) Kabul',
    '(GMT+05:00) Maldives',
    '(GMT+05:30) India Standard Time',
    '(GMT+05:45) Kathmandu',
    '(GMT+06:00) Dhaka',
    '(GMT+06:30) Cocos Islands',
    '(GMT+07:00) Bangkok',
    '(GMT+08:00) Hong Kong',
    '(GMT+08:30) Pyongyang',
    '(GMT+09:00) Tokyo',
    '(GMT+09:30) Central Time - Darwin',
    '(GMT+10:00) Eastern Time - Brisbane',
    '(GMT+10:30) Central Time - Adelaide',
    '(GMT+11:00) Eastern Time - Melbourne, Sydney',
    '(GMT+12:00) Nauru',
    '(GMT+13:00) Auckland',
    '(GMT+14:00) Kiritimati',
  ];

  selectedTimezone: string = '(GMT+00:00) London';
  showTimezoneDropdown: boolean = false;

  notificationSettings = {
    social: {
      followsMe: true,
      receiveMessage: true,
      mentioned: true,
      likesReview: true,
      likesReviewReply: true,
      repliesToReviewComment: true,
    },
    reviewChanges: {
      receivesNewContent: true,
      changesSignificantly: true,
      watchlistRemoved: true,
      similarMovieAdded: true,
    },
  };

  constructor(private authService: AuthService) {
    this.selectedColor = this.profileColors[0];
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
      this.currentUser = user;

      if (user) {
        this.username = user.username;
        this.email = 'test_LLSS3@gmail.com';
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.showTimezoneDropdown &&
      !(event.target as HTMLElement).closest('.timezone-dropdown')
    ) {
      this.showTimezoneDropdown = false;
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectTheme(theme: string): void {
    this.selectedTheme = theme;
  }

  toggleTimezoneDropdown(): void {
    this.showTimezoneDropdown = !this.showTimezoneDropdown;
  }

  selectTimezone(timezone: string): void {
    this.selectedTimezone = timezone;
    this.showTimezoneDropdown = false;
  }

  saveProfile(): void {
    console.log('Profile saved');
    alert('Profile changes saved successfully!');
  }

  saveAccount(): void {
    console.log('Account settings saved');
    alert('Account settings saved successfully!');
  }

  saveNotifications(): void {
    console.log('Notification settings saved');
    alert('Notification settings saved successfully!');
  }

  saveLanguage(): void {
    console.log('Language settings saved');
    alert('Language settings saved successfully!');
  }

  saveWatchlistPreferences(): void {
    console.log('Watchlist preferences saved');
    alert('Watchlist preferences saved successfully!');
  }

  downloadGDPRData(): void {
    console.log('Downloading GDPR data');
    alert('Your data is being prepared for download.');
  }

  deleteAccount(): void {
    if (
      confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
      )
    ) {
      console.log('Account deletion requested');
      alert(
        'Account deletion request submitted. Please check your email for confirmation.'
      );
    }
  }
}
