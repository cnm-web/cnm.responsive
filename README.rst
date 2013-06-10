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
- plonetheme.sunburst => 1.4.3
- plone.app.theming => 1.1.1
- diazo => 1.0.3
- webcouturier.dropdownmenu => 2.3.1

Initial Install at CNM
======================

The following steps are necessary only for the first install at CNM.

#. Go into ZMI and reinstall “Diazo theme support” in portal_quickinstaller
#. In ZMI go to portal_setup, select the “Import” tab, select “Sunburst Theme” from the dropdown, and click “Import all steps” at the bottom of the long list. This will fix display issues since we updated Sunburst but it doesn’t have an entry in portal_quickinstaller. This only needs to be done once and does things with skin layers that I did not want to automate.
#. Reinstall “CNM website” in portal_quickinstaller
#. Install “cnm.responsive” in portal_quickinstaller
#. If you don’t see the theme take hold on the site, you’ll need to active it in Site Setup > Theming.
#. Make sure “Automatically Generate Tabs” is checked in Site Setup > Navigation. This seems to get set to off by cnm.website. Easy to change, but didn’t want to without checking first.


