export class GetterSetter {

  private PLATFORM_BROWSER: boolean;
  private WEB_APP_CONFIG: any = {};
  
  private AUTHENTICATION: any = {};
  private USER: any = {};
  private RESULT: any = {};
  private AUTHORIZED = false;
  private CART: any = {};
 

  get platformBrowser(): boolean {
    return this.PLATFORM_BROWSER;
  }

  set platformBrowser(value: boolean) {
    this.PLATFORM_BROWSER = value;
  }

  get webAppConfig(): any {
    return this.WEB_APP_CONFIG;
  }
  set webAppConfig(value: any) {
    this.WEB_APP_CONFIG = value;
  }

  get cart(): any {
    return this.CART;
  }
  set cart(value: any) {
    this.CART = value;
  }

  get authResponse(): any {
    return this.AUTHENTICATION;
  }
  set authResponse(value: any) {
    this.AUTHENTICATION = value;
  }

  get userResponse(): any {
    return this.USER;
  }
  set userResponse(value: any) {
    this.USER = value;
  }

  get result(): any {
    return this.RESULT;
  }
  set result(value: any) {
    this.RESULT = value;
  }
  
  get authorized(): boolean {
    return this.AUTHORIZED;
  }
  set authorized(value: boolean) {
    this.AUTHORIZED = value;
  }

  

}
