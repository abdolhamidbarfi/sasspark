// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutuspageDocumentDataSlicesSlice = never;

/**
 * Content for AboutUsPage documents
 */
interface AboutuspageDocumentData {
  /**
   * Slice Zone field in *AboutUsPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutuspage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutuspageDocumentDataSlicesSlice> /**
   * Meta Description field in *AboutUsPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: aboutuspage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *AboutUsPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutuspage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *AboutUsPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: aboutuspage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * AboutUsPage document from Prismic
 *
 * - **API ID**: `aboutuspage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutuspageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AboutuspageDocumentData>,
    "aboutuspage",
    Lang
  >;

type BlogPageDocumentDataSlicesSlice = never;

/**
 * Content for BlogPage documents
 */
interface BlogPageDocumentData {
  /**
   * Title field in *BlogPage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *BlogPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPageDocumentDataSlicesSlice> /**
   * Meta Description field in *BlogPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *BlogPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *BlogPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * BlogPage document from Prismic
 *
 * - **API ID**: `blog_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BlogPageDocumentData>,
    "blog_page",
    Lang
  >;

type ContactusDocumentDataSlicesSlice = never;

/**
 * Content for ContactUs documents
 */
interface ContactusDocumentData {
  /**
   * Slice Zone field in *ContactUs*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contactus.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactusDocumentDataSlicesSlice> /**
   * Meta Description field in *ContactUs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contactus.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *ContactUs*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contactus.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *ContactUs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contactus.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * ContactUs document from Prismic
 *
 * - **API ID**: `contactus`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactusDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactusDocumentData>,
    "contactus",
    Lang
  >;

type FooterDocumentDataSlicesSlice = FooterSectionSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Business
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HamepageDocumentDataSlicesSlice =
  | BrandsListSlice
  | SearchBoxSlice
  | DisClouserSlice
  | OptionSectionSlice
  | BannerSlice;

/**
 * Content for HamePage documents
 */
interface HamepageDocumentData {
  /**
   * Title field in *HamePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hamepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *HamePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: hamepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HamepageDocumentDataSlicesSlice> /**
   * Meta Description field in *HamePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: hamepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HamePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hamepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *HamePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: hamepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * HamePage document from Prismic
 *
 * - **API ID**: `hamepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HamepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HamepageDocumentData>,
    "hamepage",
    Lang
  >;

/**
 * Item in *Nav Items → Items*
 */
export interface NavItemsDocumentDataItemItem {
  /**
   * Item field in *Nav Items → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_items.item[].item
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  item: prismic.KeyTextField;

  /**
   * Link field in *Nav Items → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_items.item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Nav Items documents
 */
interface NavItemsDocumentData {
  /**
   * Items field in *Nav Items*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_items.item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  item: prismic.GroupField<Simplify<NavItemsDocumentDataItemItem>>;
}

/**
 * Nav Items document from Prismic
 *
 * - **API ID**: `nav_items`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavItemsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavItemsDocumentData>,
    "nav_items",
    Lang
  >;

/**
 * Item in *Popular Brands → Brand*
 */
export interface PopularBrandsDocumentDataBrandItem {
  /**
   * Title field in *Popular Brands → Brand*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popular_brands.brand[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Logo field in *Popular Brands → Brand*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: popular_brands.brand[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Content for Popular Brands documents
 */
interface PopularBrandsDocumentData {
  /**
   * Brand field in *Popular Brands*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: popular_brands.brand[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  brand: prismic.GroupField<Simplify<PopularBrandsDocumentDataBrandItem>>;
}

/**
 * Popular Brands document from Prismic
 *
 * - **API ID**: `popular_brands`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PopularBrandsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PopularBrandsDocumentData>,
    "popular_brands",
    Lang
  >;

/**
 * Content for Single Data documents
 */
interface SingleDataDocumentData {
  /**
   * Logo field in *Single Data*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: single_data.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  logo: prismic.EmbedField;
}

/**
 * Single Data document from Prismic
 *
 * - **API ID**: `single_data`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SingleDataDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SingleDataDocumentData>,
    "single_data",
    Lang
  >;

type TeampageDocumentDataSlicesSlice = never;

/**
 * Content for TeamPage documents
 */
interface TeampageDocumentData {
  /**
   * Slice Zone field in *TeamPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: teampage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TeampageDocumentDataSlicesSlice> /**
   * Meta Description field in *TeamPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: teampage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *TeamPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: teampage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *TeamPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: teampage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * TeamPage document from Prismic
 *
 * - **API ID**: `teampage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TeampageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<TeampageDocumentData>,
    "teampage",
    Lang
  >;

export type AllDocumentTypes =
  | AboutuspageDocument
  | BlogPageDocument
  | ContactusDocument
  | FooterDocument
  | HamepageDocument
  | NavItemsDocument
  | PopularBrandsDocument
  | SingleDataDocument
  | TeampageDocument;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceDefaultPrimary {
  /**
   * Image field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Talk About field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.talk_about
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  talk_about: prismic.KeyTextField;

  /**
   * Title field in *Banner → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * link field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;

  /**
   * Button field in *Banner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;
}

/**
 * Default variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BannerSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceReversePrimary {
  /**
   * Image field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Banner → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;

  /**
   * Button field in *Banner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;
}

/**
 * Reverse variation for Banner Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceReverse = prismic.SharedSliceVariation<
  "reverse",
  Simplify<BannerSliceReversePrimary>,
  never
>;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceOptionListPrimary {
  /**
   * Image field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Banner → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Banner → Items*
 */
export interface BannerSliceOptionListItem {
  /**
   * Option field in *Banner → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.items[].option
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  option: prismic.KeyTextField;
}

/**
 * Option List variation for Banner Slice
 *
 * - **API ID**: `optionList`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceOptionList = prismic.SharedSliceVariation<
  "optionList",
  Simplify<BannerSliceOptionListPrimary>,
  Simplify<BannerSliceOptionListItem>
>;

/**
 * Slice variation for *Banner*
 */
type BannerSliceVariation =
  | BannerSliceDefault
  | BannerSliceReverse
  | BannerSliceOptionList;

/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Banner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSlice = prismic.SharedSlice<"banner", BannerSliceVariation>;

/**
 * Primary content in *BrandsList → Primary*
 */
export interface BrandsListSliceDefaultPrimary {
  /**
   * Title field in *BrandsList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: brands_list.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *BrandsList → Items*
 */
export interface BrandsListSliceDefaultItem {
  /**
   * Title field in *BrandsList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: brands_list.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Logo field in *BrandsList → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: brands_list.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for BrandsList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrandsListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BrandsListSliceDefaultPrimary>,
  Simplify<BrandsListSliceDefaultItem>
>;

/**
 * Slice variation for *BrandsList*
 */
type BrandsListSliceVariation = BrandsListSliceDefault;

/**
 * BrandsList Shared Slice
 *
 * - **API ID**: `brands_list`
 * - **Description**: BrandsList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrandsListSlice = prismic.SharedSlice<
  "brands_list",
  BrandsListSliceVariation
>;

/**
 * Primary content in *DisClouser → Primary*
 */
export interface DisClouserSliceDefaultPrimary {
  /**
   * Title field in *DisClouser → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: dis_clouser.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * description field in *DisClouser → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dis_clouser.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *DisClouser → Items*
 */
export interface DisClouserSliceDefaultItem {
  /**
   * title field in *DisClouser → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dis_clouser.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *DisClouser → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dis_clouser.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for DisClouser Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DisClouserSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DisClouserSliceDefaultPrimary>,
  Simplify<DisClouserSliceDefaultItem>
>;

/**
 * Slice variation for *DisClouser*
 */
type DisClouserSliceVariation = DisClouserSliceDefault;

/**
 * DisClouser Shared Slice
 *
 * - **API ID**: `dis_clouser`
 * - **Description**: DisClouser
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DisClouserSlice = prismic.SharedSlice<
  "dis_clouser",
  DisClouserSliceVariation
>;

/**
 * Primary content in *FooterSection → Primary*
 */
export interface FooterSectionSliceDefaultPrimary {
  /**
   * Title field in *FooterSection → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *FooterSection → Items*
 */
export interface FooterSectionSliceDefaultItem {
  /**
   * Link field in *FooterSection → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * item field in *FooterSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.items[].item
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  item: prismic.KeyTextField;
}

/**
 * Default variation for FooterSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSectionSliceDefaultPrimary>,
  Simplify<FooterSectionSliceDefaultItem>
>;

/**
 * Slice variation for *FooterSection*
 */
type FooterSectionSliceVariation = FooterSectionSliceDefault;

/**
 * FooterSection Shared Slice
 *
 * - **API ID**: `footer_section`
 * - **Description**: FooterSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSectionSlice = prismic.SharedSlice<
  "footer_section",
  FooterSectionSliceVariation
>;

/**
 * Primary content in *OptionSection → Primary*
 */
export interface OptionSectionSliceDefaultPrimary {
  /**
   * Title field in *OptionSection → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: option_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *OptionSection → Items*
 */
export interface OptionSectionSliceDefaultItem {
  /**
   * Title field in *OptionSection → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: option_section.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * description field in *OptionSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: option_section.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for OptionSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OptionSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OptionSectionSliceDefaultPrimary>,
  Simplify<OptionSectionSliceDefaultItem>
>;

/**
 * Slice variation for *OptionSection*
 */
type OptionSectionSliceVariation = OptionSectionSliceDefault;

/**
 * OptionSection Shared Slice
 *
 * - **API ID**: `option_section`
 * - **Description**: OptionSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OptionSectionSlice = prismic.SharedSlice<
  "option_section",
  OptionSectionSliceVariation
>;

/**
 * Primary content in *SearchBox → Primary*
 */
export interface SearchBoxSliceDefaultPrimary {
  /**
   * Title field in *SearchBox → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: search_box.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * description field in *SearchBox → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search_box.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for SearchBox Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SearchBoxSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SearchBoxSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SearchBox*
 */
type SearchBoxSliceVariation = SearchBoxSliceDefault;

/**
 * SearchBox Shared Slice
 *
 * - **API ID**: `search_box`
 * - **Description**: SearchBox
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SearchBoxSlice = prismic.SharedSlice<
  "search_box",
  SearchBoxSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutuspageDocument,
      AboutuspageDocumentData,
      AboutuspageDocumentDataSlicesSlice,
      BlogPageDocument,
      BlogPageDocumentData,
      BlogPageDocumentDataSlicesSlice,
      ContactusDocument,
      ContactusDocumentData,
      ContactusDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HamepageDocument,
      HamepageDocumentData,
      HamepageDocumentDataSlicesSlice,
      NavItemsDocument,
      NavItemsDocumentData,
      NavItemsDocumentDataItemItem,
      PopularBrandsDocument,
      PopularBrandsDocumentData,
      PopularBrandsDocumentDataBrandItem,
      SingleDataDocument,
      SingleDataDocumentData,
      TeampageDocument,
      TeampageDocumentData,
      TeampageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BannerSlice,
      BannerSliceDefaultPrimary,
      BannerSliceReversePrimary,
      BannerSliceOptionListPrimary,
      BannerSliceOptionListItem,
      BannerSliceVariation,
      BannerSliceDefault,
      BannerSliceReverse,
      BannerSliceOptionList,
      BrandsListSlice,
      BrandsListSliceDefaultPrimary,
      BrandsListSliceDefaultItem,
      BrandsListSliceVariation,
      BrandsListSliceDefault,
      DisClouserSlice,
      DisClouserSliceDefaultPrimary,
      DisClouserSliceDefaultItem,
      DisClouserSliceVariation,
      DisClouserSliceDefault,
      FooterSectionSlice,
      FooterSectionSliceDefaultPrimary,
      FooterSectionSliceDefaultItem,
      FooterSectionSliceVariation,
      FooterSectionSliceDefault,
      OptionSectionSlice,
      OptionSectionSliceDefaultPrimary,
      OptionSectionSliceDefaultItem,
      OptionSectionSliceVariation,
      OptionSectionSliceDefault,
      SearchBoxSlice,
      SearchBoxSliceDefaultPrimary,
      SearchBoxSliceVariation,
      SearchBoxSliceDefault,
    };
  }
}
