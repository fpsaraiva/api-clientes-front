import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  logout() {
    this.authService.deslogarDaSessao();
    this.router.navigate(['/login']);
  }
}
