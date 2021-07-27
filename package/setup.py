#!/usr/bin/env python

import setuptools
from distutils.core import setup

LONG_DESCRIPTION = \
    '''
    pout2prot converts Percolator output files to protein group and subgroup files (Occam or anti-Occam) as input for
    Prophane. In pout2prot, the user can choose between two protein grouping strategies: Occam’s razor and anti-Occam’s 
    razor. Occam’s razor is based on the principle of maximum parsimony, and provides the smallest set of proteins that 
    explains all observed peptides. Here, proteins and their associated taxonomy and functions are expected to be 
    present in the sample, but proteins that by chance could not be matched to a unique peptide are falsely discarded. 
    This algorithm is for example used in the X!TandemPipeline. On the other hand, anti-Occam’s razor is based on the 
    maximal explanatory set of proteins. Here, any protein that contains at least one identified peptide, will be 
    provided in the protein list. This algorithm is used in for example the MetaProteomeAnalyzer (MPA). Importantly, 
    while it is important to mention which grouping algorithm was used, there is no way to determine which algorithm is 
    more correct.
    
    pout2prot is also available as an online web application (see https://pout2prot.ugent.be) that's run entirely in 
    your browser (you don't need to install anything to get started).
    
    See our release page on GitHub for a detailed description of all changes between different versions: 
    https://github.com/tivdnbos/pout2prot/releases.
    '''

setup(
    name='pout2prot',
    version='1.0.2',
    description='A script to perform protein grouping on pout-files (generated by Percolator).',
    long_description=LONG_DESCRIPTION,
    author='Pieter Verschaffelt',
    author_email='pieter.verschaffelt@ugent.be',
    packages=['pout2prot'],
    package_dir={'pout2prot': 'pout2prot'},
    entry_points={
        'console_scripts': ['pout2prot = pout2prot:main.main']
    }
)
