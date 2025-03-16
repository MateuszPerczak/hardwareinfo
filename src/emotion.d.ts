import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    // global
    background: string;
    color: string;
    focusOutline: string;
    // selection
    selectionBackground: string;
    selectionColor: string;
    // scrollbar
    scrollBarThumbBackground: string;
    scrollBarThumbHoverBackground: string;
    // badge
    badgeBackground: string;
    badgeColor: string;
    badgeBorder: string;
    // button
    buttonBackground: string;
    buttonColor: string;
    buttonBorder: string;
    buttonDisabledBackground: string;
    buttonDisabledColor: string;
    buttonDisabledBorder: string;
    buttonHoverBackground: string;
    buttonHoverBorder: string;
    buttonActiveBackground: string;
    buttonActiveBorder: string;
    buttonFocusOutline: string;
    // comboBox
    comboBoxBackground: string;
    comboBoxColor: string;
    comboBoxBorder: string;
    comboBoxDisabledBackground: string;
    comboBoxDisabledColor: string;
    comboBoxDisabledBorder: string;
    comboBoxHoverBackground: string;
    comboBoxHoverBorder: string;
    comboBoxActiveBackground: string;
    comboBoxActiveBorder: string;
    comboBoxFocusOutline: string;
    comboBoxMenuBackground: string;
    comboBoxMenuBorder: string;
    comboBoxMenuItemBackground: string;
    comboBoxMenuItemColor: string;
    comboBoxMenuItemHoverBackground: string;
    comboBoxMenuItemActiveBackground: string;
    // dataPanel
    dataPanelKeyColor: string;
    dataPanelValueColor: string;
    // infoBar
    infoBarErrorColor: string;
    infoBarWarningColor: string;
    infoBarInfoColor: string;
    infoBarErrorBackground: string;
    infoBarWarningBackground: string;
    infoBarInfoBackground: string;
    infoBarColor: string;
    infoBarBorder: string;
    infoBarDescriptionColor: string;
    // label
    labelColor: string;
    // nav
    navBorder: string;
    navButtonBackground: string;
    navButtonColor: string;
    navButtonSelectedBackground: string;
    navButtonHoverBackground: string;
    navButtonActiveBackground: string;
    // page
    pageBorder: string;
    // panel
    panelBackground: string;
    panelBorder: string;
    panelHeaderColor: string;
    panelHeaderDescriptionColor: string;
    panelChildrenBorder: string;
  }
}
