from setuptools import setup, find_packages
import os

version = '0.1'

setup(name='cnm.responsive',
      version=version,
      description="Plone theme for CNM based on Twitter's Bootstrap CSS",
      long_description=open("README.rst").read() + "\n" +
                       open("HISTORY.txt").read(),
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Programming Language :: Python",
        ],
      keywords='plone cnm diazo theme',
      author='Alex Sielicki',
      author_email='alex@techmilo.com',
      url='https://github.com/alexsielicki/cnm.responsive',
      license='Apache License 2.0',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['cnm'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'Plone',
          # -*- Extra requirements: -*-
          'plonetheme.sunburst>=1.4.3',
          'plone.app.theming>=1.1.1',
          'diazo>=1.0.3',
          'webcouturier.dropdownmenu>=2.3.1',
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
