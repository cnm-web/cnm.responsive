Introduction
============

Responsive Plone theme for CNM based on Twitter Bootstrap 2.0

Installation
============

Install the ``cnm.responsive`` product using the Add-on Control Panel.
This will activate the theme.

Dependencies
============

This theme depends on the following packages:
plonetheme.sunburst => 1.4.3
plone.app.theming => 1.1.1
diazo => 1.0.3
webcouturier.dropdownmenu => 2.3.1

Initial Install at CNM
======================

The following steps are necessary only for the first install at CNM.

1. Add cnm.responsive to mr developer
2. Run buildout to upgrade plonetheme.sunburst, plone.app.theming, and diazo
3. In ZMI portal_setup import all steps for Sunburst Theme. This will fix display issues.
4. Reinstall “CNM Website” in portal_quickinstaller
5. Reinstall “Diazo theme support” in portal_quickinstaller
6. Reinstall webcouturier.dropdownmenu in portal_quickinstaller
7. Re-enable theme in Site Setup
8. Make sure “Automatically Generate Tabs” is unchecked in Site Setup > Navigation.

