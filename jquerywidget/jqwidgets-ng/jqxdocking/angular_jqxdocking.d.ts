/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxDockingComponent implements OnChanges {
    attrCookies: boolean;
    attrCookieOptions: jqwidgets.DockingCookieOptions;
    attrDisabled: boolean;
    attrFloatingWindowOpacity: number;
    attrKeyboardNavigation: boolean;
    attrMode: string;
    attrOrientation: string;
    attrRtl: boolean;
    attrTheme: string;
    attrWindowsMode: object;
    attrWindowsOffset: number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxDocking;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    cookies(arg?: boolean): boolean;
    cookieOptions(arg?: jqwidgets.DockingCookieOptions): jqwidgets.DockingCookieOptions;
    disabled(arg?: boolean): boolean;
    floatingWindowOpacity(arg?: number): number;
    height(arg?: number | string): number | string;
    keyboardNavigation(arg?: boolean): boolean;
    mode(arg?: string): string;
    orientation(arg?: string): string;
    rtl(arg?: boolean): boolean;
    theme(arg?: string): string;
    width(arg?: number | string): number | string;
    windowsMode(arg?: object): object;
    windowsOffset(arg?: number): number;
    addWindow(windowId: string, mode: any, panel: number, position: any): void;
    closeWindow(windowId: string): void;
    collapseWindow(windowId: string): void;
    destroy(): void;
    disableWindowResize(windowId: string): void;
    disable(): void;
    exportLayout(): string;
    enable(): void;
    expandWindow(windowId: string): void;
    enableWindowResize(windowId: string): void;
    focus(): void;
    hideAllCloseButtons(): void;
    hideAllCollapseButtons(): void;
    hideCollapseButton(windowId: string): void;
    hideCloseButton(windowId: string): void;
    importLayout(Json: string): void;
    move(windowId: string, panel: number, position: number): void;
    pinWindow(windowId: string): void;
    setWindowMode(windowId: string, mode: any): void;
    showCloseButton(windowId: string): void;
    showCollapseButton(windowId: string): void;
    setWindowPosition(windowId: string, top: any, left: number): void;
    showAllCloseButtons(): void;
    showAllCollapseButtons(): void;
    unpinWindow(windowId: string): void;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    __wireEvents__(): void;
}
