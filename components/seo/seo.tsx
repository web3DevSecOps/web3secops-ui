import { NextSeo, NextSeoProps } from 'next-seo'

import React from 'react'

import siteConfig from '#data/config'

export interface SEOProps extends NextSeoProps {
  title: string
  description: string
}

// TODO: seo setup

export const SEO = ({ title, description, ...props }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    // openGraph={{ ...siteConfig.seo.openGraph, title, description }}
    // titleTemplate={siteConfig.seo.titleTemplate}
    // twitter={siteConfig.seo.twitter}
    {...props}
  />
)
