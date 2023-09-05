import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  configService: ConfigService = inject(ConfigService);
}
