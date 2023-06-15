import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly DARK_MODE_KEY = 'darkMode';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeDarkMode();
  }

  public initializeDarkMode() {
    const storedMode = localStorage.getItem(this.DARK_MODE_KEY);
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (storedMode !== null) {
      this.setDarkMode(storedMode === 'true');
    } else {
      this.setDarkMode(prefersDarkMode);
    }
  }

  toggleDarkMode() {
    const currentMode = this.isDarkMode();
    this.setDarkMode(!currentMode);
  }

  enableDarkMode() {
    this.setDarkMode(true);
  }

  enableLightMode() {
    this.setDarkMode(false);
  }

  private setDarkMode(enable: boolean) {
    const themeAttribute = 'data-bs-theme';
    if (enable) {
      document.documentElement.setAttribute(themeAttribute, 'dark');
      this.renderer.setAttribute(document.body, themeAttribute, 'dark');
    } else {
      document.documentElement.removeAttribute(themeAttribute);
      this.renderer.removeAttribute(document.body, themeAttribute);
    }

    localStorage.setItem(this.DARK_MODE_KEY, enable.toString());
  }

  isDarkMode(): boolean {
    return document.documentElement.hasAttribute('data-bs-theme');
  }
}
