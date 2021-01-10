// src/app/auth/auth-guard.service.ts
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRoute } from "@angular/router";

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    const hash = document.location.hash;
    if (hash.includes("access_token=")) {
      const a = hash.split("access_token=")[1];
      const token = a.split("&")[0];
      console.log(token);
      this.router.navigateByUrl("/spin");
    }

    return true;
  }
}
