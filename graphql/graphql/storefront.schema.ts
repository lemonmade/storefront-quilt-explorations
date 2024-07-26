export interface ApiVersion {
  __typename: "ApiVersion";
  displayName(variables: Record<string, never>): string;
  handle(variables: Record<string, never>): string;
  supported(variables: Record<string, never>): boolean;
}
export interface ApplePayWalletContentInput {
  billingAddress: MailingAddressInput;
  data: string;
  header: ApplePayWalletHeaderInput;
  lastDigits?: string | null;
  signature: string;
  version: string;
}
export interface ApplePayWalletHeaderInput {
  applicationData?: string | null;
  ephemeralPublicKey: string;
  publicKeyHash: string;
  transactionId: string;
}
export interface AppliedGiftCard {
  __typename: "AppliedGiftCard";
  amountUsed(variables: Record<string, never>): MoneyV2;
  amountUsedV2(variables: Record<string, never>): MoneyV2;
  balance(variables: Record<string, never>): MoneyV2;
  balanceV2(variables: Record<string, never>): MoneyV2;
  id(variables: Record<string, never>): string;
  lastCharacters(variables: Record<string, never>): string;
  presentmentAmountUsed(variables: Record<string, never>): MoneyV2;
}
export interface Article {
  __typename: "Article";
  author(variables: Record<string, never>): ArticleAuthor;
  authorV2(variables: Record<string, never>): ArticleAuthor | null;
  blog(variables: Record<string, never>): Blog;
  comments(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): CommentConnection;
  content(variables: {
    readonly truncateAt?: number | null;
  }): string;
  contentHtml(variables: Record<string, never>): HTML;
  excerpt(variables: {
    readonly truncateAt?: number | null;
  }): string | null;
  excerptHtml(variables: Record<string, never>): HTML | null;
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  image(variables: Record<string, never>): Image | null;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  onlineStoreUrl(variables: Record<string, never>): URL | null;
  publishedAt(variables: Record<string, never>): DateTime;
  seo(variables: Record<string, never>): SEO | null;
  tags(variables: Record<string, never>): string[];
  title(variables: Record<string, never>): string;
  trackingParameters(variables: Record<string, never>): string | null;
}
export interface ArticleAuthor {
  __typename: "ArticleAuthor";
  bio(variables: Record<string, never>): string | null;
  email(variables: Record<string, never>): string;
  firstName(variables: Record<string, never>): string;
  lastName(variables: Record<string, never>): string;
  name(variables: Record<string, never>): string;
}
export interface ArticleConnection {
  __typename: "ArticleConnection";
  edges(variables: Record<string, never>): ArticleEdge[];
  nodes(variables: Record<string, never>): Article[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface ArticleEdge {
  __typename: "ArticleEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Article;
}
export type ArticleSortKeys = "TITLE" | "BLOG_TITLE" | "AUTHOR" | "UPDATED_AT" | "PUBLISHED_AT" | "ID" | "RELEVANCE";
export interface Attribute {
  __typename: "Attribute";
  key(variables: Record<string, never>): string;
  value(variables: Record<string, never>): string | null;
}
export interface AttributeInput {
  key: string;
  value: string;
}
export interface AutomaticDiscountApplication {
  __typename: "AutomaticDiscountApplication";
  allocationMethod(variables: Record<string, never>): DiscountApplicationAllocationMethod;
  targetSelection(variables: Record<string, never>): DiscountApplicationTargetSelection;
  targetType(variables: Record<string, never>): DiscountApplicationTargetType;
  title(variables: Record<string, never>): string;
  value(variables: Record<string, never>): PricingValue;
}
export interface AvailableShippingRates {
  __typename: "AvailableShippingRates";
  ready(variables: Record<string, never>): boolean;
  shippingRates(variables: Record<string, never>): ShippingRate[] | null;
}
export interface BaseCartLine {
  __possibleTypes: CartLine | ComponentizableCartLine;
  attribute(variables: {
    readonly key: string;
  }): Attribute | null;
  attributes(variables: Record<string, never>): Attribute[];
  cost(variables: Record<string, never>): CartLineCost;
  discountAllocations(variables: Record<string, never>): CartDiscountAllocation[];
  estimatedCost(variables: Record<string, never>): CartLineEstimatedCost;
  id(variables: Record<string, never>): string;
  merchandise(variables: Record<string, never>): Merchandise;
  quantity(variables: Record<string, never>): number;
  sellingPlanAllocation(variables: Record<string, never>): SellingPlanAllocation | null;
}
export interface BaseCartLineConnection {
  __typename: "BaseCartLineConnection";
  edges(variables: Record<string, never>): BaseCartLineEdge[];
  nodes(variables: Record<string, never>): BaseCartLine[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface BaseCartLineEdge {
  __typename: "BaseCartLineEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): BaseCartLine;
}
export interface Blog {
  __typename: "Blog";
  articleByHandle(variables: {
    readonly handle: string;
  }): Article | null;
  articles(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ArticleSortKeys | null;
    readonly query?: string | null;
  }): ArticleConnection;
  authors(variables: Record<string, never>): ArticleAuthor[];
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  onlineStoreUrl(variables: Record<string, never>): URL | null;
  seo(variables: Record<string, never>): SEO | null;
  title(variables: Record<string, never>): string;
}
export interface BlogConnection {
  __typename: "BlogConnection";
  edges(variables: Record<string, never>): BlogEdge[];
  nodes(variables: Record<string, never>): Blog[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface BlogEdge {
  __typename: "BlogEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Blog;
}
export type BlogSortKeys = "HANDLE" | "TITLE" | "ID" | "RELEVANCE";
export interface Brand {
  __typename: "Brand";
  colors(variables: Record<string, never>): BrandColors;
  coverImage(variables: Record<string, never>): MediaImage | null;
  logo(variables: Record<string, never>): MediaImage | null;
  shortDescription(variables: Record<string, never>): string | null;
  slogan(variables: Record<string, never>): string | null;
  squareLogo(variables: Record<string, never>): MediaImage | null;
}
export interface BrandColorGroup {
  __typename: "BrandColorGroup";
  background(variables: Record<string, never>): Color | null;
  foreground(variables: Record<string, never>): Color | null;
}
export interface BrandColors {
  __typename: "BrandColors";
  primary(variables: Record<string, never>): BrandColorGroup[];
  secondary(variables: Record<string, never>): BrandColorGroup[];
}
export interface BuyerInput {
  customerAccessToken: string;
  companyLocationId?: string | null;
}
export type CardBrand = "VISA" | "MASTERCARD" | "DISCOVER" | "AMERICAN_EXPRESS" | "DINERS_CLUB" | "JCB";
export interface Cart {
  __typename: "Cart";
  attribute(variables: {
    readonly key: string;
  }): Attribute | null;
  attributes(variables: Record<string, never>): Attribute[];
  buyerIdentity(variables: Record<string, never>): CartBuyerIdentity;
  checkoutUrl(variables: Record<string, never>): URL;
  cost(variables: Record<string, never>): CartCost;
  createdAt(variables: Record<string, never>): DateTime;
  deliveryGroups(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): CartDeliveryGroupConnection;
  discountAllocations(variables: Record<string, never>): CartDiscountAllocation[];
  discountCodes(variables: Record<string, never>): CartDiscountCode[];
  estimatedCost(variables: Record<string, never>): CartEstimatedCost;
  id(variables: Record<string, never>): string;
  lines(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): BaseCartLineConnection;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  note(variables: Record<string, never>): string | null;
  totalQuantity(variables: Record<string, never>): number;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface CartAttributesUpdatePayload {
  __typename: "CartAttributesUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartAutomaticDiscountAllocation {
  __typename: "CartAutomaticDiscountAllocation";
  discountedAmount(variables: Record<string, never>): MoneyV2;
  title(variables: Record<string, never>): string;
}
export interface CartBuyerIdentity {
  __typename: "CartBuyerIdentity";
  countryCode(variables: Record<string, never>): CountryCode | null;
  customer(variables: Record<string, never>): Customer | null;
  deliveryAddressPreferences(variables: Record<string, never>): DeliveryAddress[];
  email(variables: Record<string, never>): string | null;
  phone(variables: Record<string, never>): string | null;
  preferences(variables: Record<string, never>): CartPreferences | null;
  purchasingCompany(variables: Record<string, never>): PurchasingCompany | null;
  walletPreferences(variables: Record<string, never>): string[];
}
export interface CartBuyerIdentityInput {
  email?: string | null;
  phone?: string | null;
  companyLocationId?: string | null;
  countryCode?: CountryCode | null;
  customerAccessToken?: string | null;
  deliveryAddressPreferences?: DeliveryAddressInput[] | null;
  preferences?: CartPreferencesInput | null;
}
export interface CartBuyerIdentityUpdatePayload {
  __typename: "CartBuyerIdentityUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export type CartCardSource = "SAVED_CREDIT_CARD";
export interface CartCodeDiscountAllocation {
  __typename: "CartCodeDiscountAllocation";
  code(variables: Record<string, never>): string;
  discountedAmount(variables: Record<string, never>): MoneyV2;
}
export type CartCompletionAction = CompletePaymentChallenge;
export interface CartCompletionActionRequired {
  __typename: "CartCompletionActionRequired";
  action(variables: Record<string, never>): CartCompletionAction | null;
  id(variables: Record<string, never>): string;
}
export type CartCompletionAttemptResult = CartCompletionActionRequired | CartCompletionFailed | CartCompletionProcessing | CartCompletionSuccess;
export interface CartCompletionFailed {
  __typename: "CartCompletionFailed";
  errors(variables: Record<string, never>): CompletionError[];
  id(variables: Record<string, never>): string;
}
export interface CartCompletionProcessing {
  __typename: "CartCompletionProcessing";
  id(variables: Record<string, never>): string;
  pollDelay(variables: Record<string, never>): number;
}
export interface CartCompletionSuccess {
  __typename: "CartCompletionSuccess";
  completedAt(variables: Record<string, never>): DateTime | null;
  id(variables: Record<string, never>): string;
  orderId(variables: Record<string, never>): string;
  orderUrl(variables: Record<string, never>): URL;
}
export interface CartCost {
  __typename: "CartCost";
  checkoutChargeAmount(variables: Record<string, never>): MoneyV2;
  subtotalAmount(variables: Record<string, never>): MoneyV2;
  subtotalAmountEstimated(variables: Record<string, never>): boolean;
  totalAmount(variables: Record<string, never>): MoneyV2;
  totalAmountEstimated(variables: Record<string, never>): boolean;
  totalDutyAmount(variables: Record<string, never>): MoneyV2 | null;
  totalDutyAmountEstimated(variables: Record<string, never>): boolean;
  totalTaxAmount(variables: Record<string, never>): MoneyV2 | null;
  totalTaxAmountEstimated(variables: Record<string, never>): boolean;
}
export interface CartCreatePayload {
  __typename: "CartCreatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartCustomDiscountAllocation {
  __typename: "CartCustomDiscountAllocation";
  discountedAmount(variables: Record<string, never>): MoneyV2;
  title(variables: Record<string, never>): string;
}
export interface CartDeliveryCoordinatesPreference {
  __typename: "CartDeliveryCoordinatesPreference";
  countryCode(variables: Record<string, never>): CountryCode;
  latitude(variables: Record<string, never>): number;
  longitude(variables: Record<string, never>): number;
}
export interface CartDeliveryCoordinatesPreferenceInput {
  latitude: number;
  longitude: number;
  countryCode: CountryCode;
}
export interface CartDeliveryGroup {
  __typename: "CartDeliveryGroup";
  cartLines(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): BaseCartLineConnection;
  deliveryAddress(variables: Record<string, never>): MailingAddress;
  deliveryOptions(variables: Record<string, never>): CartDeliveryOption[];
  groupType(variables: Record<string, never>): CartDeliveryGroupType;
  id(variables: Record<string, never>): string;
  selectedDeliveryOption(variables: Record<string, never>): CartDeliveryOption | null;
}
export interface CartDeliveryGroupConnection {
  __typename: "CartDeliveryGroupConnection";
  edges(variables: Record<string, never>): CartDeliveryGroupEdge[];
  nodes(variables: Record<string, never>): CartDeliveryGroup[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface CartDeliveryGroupEdge {
  __typename: "CartDeliveryGroupEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): CartDeliveryGroup;
}
export type CartDeliveryGroupType = "SUBSCRIPTION" | "ONE_TIME_PURCHASE";
export interface CartDeliveryOption {
  __typename: "CartDeliveryOption";
  code(variables: Record<string, never>): string | null;
  deliveryMethodType(variables: Record<string, never>): DeliveryMethodType;
  description(variables: Record<string, never>): string | null;
  estimatedCost(variables: Record<string, never>): MoneyV2;
  handle(variables: Record<string, never>): string;
  title(variables: Record<string, never>): string | null;
}
export interface CartDeliveryPreference {
  __typename: "CartDeliveryPreference";
  coordinates(variables: Record<string, never>): CartDeliveryCoordinatesPreference | null;
  deliveryMethod(variables: Record<string, never>): PreferenceDeliveryMethodType[];
  pickupHandle(variables: Record<string, never>): string[];
}
export interface CartDeliveryPreferenceInput {
  deliveryMethod?: PreferenceDeliveryMethodType[] | null;
  pickupHandle?: string[] | null;
  coordinates?: CartDeliveryCoordinatesPreferenceInput[] | null;
}
export interface CartDirectPaymentMethodInput {
  billingAddress: MailingAddressInput;
  sessionId: string;
  cardSource?: CartCardSource | null;
}
export interface CartDiscountAllocation {
  __possibleTypes: CartAutomaticDiscountAllocation | CartCodeDiscountAllocation | CartCustomDiscountAllocation;
  discountedAmount(variables: Record<string, never>): MoneyV2;
}
export interface CartDiscountCode {
  __typename: "CartDiscountCode";
  applicable(variables: Record<string, never>): boolean;
  code(variables: Record<string, never>): string;
}
export interface CartDiscountCodesUpdatePayload {
  __typename: "CartDiscountCodesUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export type CartErrorCode = "INVALID" | "LESS_THAN" | "INVALID_MERCHANDISE_LINE" | "MISSING_DISCOUNT_CODE" | "MISSING_NOTE" | "INVALID_DELIVERY_GROUP" | "INVALID_DELIVERY_OPTION" | "INVALID_PAYMENT" | "PAYMENT_METHOD_NOT_SUPPORTED" | "INVALID_PAYMENT_EMPTY_CART" | "VALIDATION_CUSTOM" | "INVALID_METAFIELDS" | "MISSING_CUSTOMER_ACCESS_TOKEN" | "INVALID_COMPANY_LOCATION" | "INVALID_INCREMENT" | "MINIMUM_NOT_MET" | "MAXIMUM_EXCEEDED" | "ADDRESS_FIELD_IS_REQUIRED" | "ADDRESS_FIELD_IS_TOO_LONG" | "ADDRESS_FIELD_CONTAINS_EMOJIS" | "ADDRESS_FIELD_CONTAINS_HTML_TAGS" | "ADDRESS_FIELD_CONTAINS_URL" | "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN" | "INVALID_ZIP_CODE_FOR_PROVINCE" | "INVALID_ZIP_CODE_FOR_COUNTRY" | "ZIP_CODE_NOT_SUPPORTED" | "PROVINCE_NOT_FOUND" | "UNSPECIFIED_ADDRESS_ERROR";
export interface CartEstimatedCost {
  __typename: "CartEstimatedCost";
  checkoutChargeAmount(variables: Record<string, never>): MoneyV2;
  subtotalAmount(variables: Record<string, never>): MoneyV2;
  totalAmount(variables: Record<string, never>): MoneyV2;
  totalDutyAmount(variables: Record<string, never>): MoneyV2 | null;
  totalTaxAmount(variables: Record<string, never>): MoneyV2 | null;
}
export interface CartFreePaymentMethodInput {
  billingAddress: MailingAddressInput;
}
export interface CartInput {
  attributes?: AttributeInput[] | null;
  lines?: CartLineInput[] | null;
  discountCodes?: string[] | null;
  note?: string | null;
  buyerIdentity?: CartBuyerIdentityInput | null;
  metafields?: CartInputMetafieldInput[] | null;
}
export interface CartInputMetafieldInput {
  key: string;
  value: string;
  type: string;
}
export interface CartLine {
  __typename: "CartLine";
  attribute(variables: {
    readonly key: string;
  }): Attribute | null;
  attributes(variables: Record<string, never>): Attribute[];
  cost(variables: Record<string, never>): CartLineCost;
  discountAllocations(variables: Record<string, never>): CartDiscountAllocation[];
  estimatedCost(variables: Record<string, never>): CartLineEstimatedCost;
  id(variables: Record<string, never>): string;
  merchandise(variables: Record<string, never>): Merchandise;
  quantity(variables: Record<string, never>): number;
  sellingPlanAllocation(variables: Record<string, never>): SellingPlanAllocation | null;
}
export interface CartLineCost {
  __typename: "CartLineCost";
  amountPerQuantity(variables: Record<string, never>): MoneyV2;
  compareAtAmountPerQuantity(variables: Record<string, never>): MoneyV2 | null;
  subtotalAmount(variables: Record<string, never>): MoneyV2;
  totalAmount(variables: Record<string, never>): MoneyV2;
}
export interface CartLineEstimatedCost {
  __typename: "CartLineEstimatedCost";
  amount(variables: Record<string, never>): MoneyV2;
  compareAtAmount(variables: Record<string, never>): MoneyV2 | null;
  subtotalAmount(variables: Record<string, never>): MoneyV2;
  totalAmount(variables: Record<string, never>): MoneyV2;
}
export interface CartLineInput {
  attributes?: AttributeInput[] | null;
  quantity?: number | null;
  merchandiseId: string;
  sellingPlanId?: string | null;
}
export interface CartLineUpdateInput {
  id: string;
  quantity?: number | null;
  merchandiseId?: string | null;
  attributes?: AttributeInput[] | null;
  sellingPlanId?: string | null;
}
export interface CartLinesAddPayload {
  __typename: "CartLinesAddPayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartLinesRemovePayload {
  __typename: "CartLinesRemovePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartLinesUpdatePayload {
  __typename: "CartLinesUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartMetafieldDeleteInput {
  ownerId: string;
  key: string;
}
export interface CartMetafieldDeletePayload {
  __typename: "CartMetafieldDeletePayload";
  deletedId(variables: Record<string, never>): string | null;
  userErrors(variables: Record<string, never>): MetafieldDeleteUserError[];
}
export interface CartMetafieldsSetInput {
  ownerId: string;
  key: string;
  value: string;
  type: string;
}
export interface CartMetafieldsSetPayload {
  __typename: "CartMetafieldsSetPayload";
  metafields(variables: Record<string, never>): Metafield[] | null;
  userErrors(variables: Record<string, never>): MetafieldsSetUserError[];
}
export interface CartNoteUpdatePayload {
  __typename: "CartNoteUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartPaymentInput {
  amount: MoneyInput;
  sourceIdentifier?: string | null;
  freePaymentMethod?: CartFreePaymentMethodInput | null;
  directPaymentMethod?: CartDirectPaymentMethodInput | null;
  walletPaymentMethod?: CartWalletPaymentMethodInput | null;
}
export interface CartPaymentUpdatePayload {
  __typename: "CartPaymentUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartPreferences {
  __typename: "CartPreferences";
  delivery(variables: Record<string, never>): CartDeliveryPreference | null;
  wallet(variables: Record<string, never>): string[] | null;
}
export interface CartPreferencesInput {
  delivery?: CartDeliveryPreferenceInput[] | null;
  wallet?: string[] | null;
}
export interface CartSelectedDeliveryOptionInput {
  deliveryGroupId: string;
  deliveryOptionHandle: string;
}
export interface CartSelectedDeliveryOptionsUpdatePayload {
  __typename: "CartSelectedDeliveryOptionsUpdatePayload";
  cart(variables: Record<string, never>): Cart | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export interface CartSubmitForCompletionPayload {
  __typename: "CartSubmitForCompletionPayload";
  result(variables: Record<string, never>): CartSubmitForCompletionResult | null;
  userErrors(variables: Record<string, never>): CartUserError[];
}
export type CartSubmitForCompletionResult = SubmitAlreadyAccepted | SubmitFailed | SubmitSuccess | SubmitThrottled;
export interface CartUserError {
  __typename: "CartUserError";
  code(variables: Record<string, never>): CartErrorCode | null;
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export interface CartWalletPaymentMethodInput {
  applePayWalletContent?: ApplePayWalletContentInput | null;
  shopPayWalletContent?: ShopPayWalletContentInput | null;
}
export interface Checkout {
  __typename: "Checkout";
  appliedGiftCards(variables: Record<string, never>): AppliedGiftCard[];
  availableShippingRates(variables: Record<string, never>): AvailableShippingRates | null;
  buyerIdentity(variables: Record<string, never>): CheckoutBuyerIdentity;
  completedAt(variables: Record<string, never>): DateTime | null;
  createdAt(variables: Record<string, never>): DateTime;
  currencyCode(variables: Record<string, never>): CurrencyCode;
  customAttributes(variables: Record<string, never>): Attribute[];
  discountApplications(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): DiscountApplicationConnection;
  email(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  lineItems(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): CheckoutLineItemConnection;
  lineItemsSubtotalPrice(variables: Record<string, never>): MoneyV2;
  note(variables: Record<string, never>): string | null;
  order(variables: Record<string, never>): Order | null;
  orderStatusUrl(variables: Record<string, never>): URL | null;
  paymentDue(variables: Record<string, never>): MoneyV2;
  paymentDueV2(variables: Record<string, never>): MoneyV2;
  ready(variables: Record<string, never>): boolean;
  requiresShipping(variables: Record<string, never>): boolean;
  shippingAddress(variables: Record<string, never>): MailingAddress | null;
  shippingDiscountAllocations(variables: Record<string, never>): DiscountAllocation[];
  shippingLine(variables: Record<string, never>): ShippingRate | null;
  subtotalPrice(variables: Record<string, never>): MoneyV2;
  subtotalPriceV2(variables: Record<string, never>): MoneyV2;
  taxExempt(variables: Record<string, never>): boolean;
  taxesIncluded(variables: Record<string, never>): boolean;
  totalDuties(variables: Record<string, never>): MoneyV2 | null;
  totalPrice(variables: Record<string, never>): MoneyV2;
  totalPriceV2(variables: Record<string, never>): MoneyV2;
  totalTax(variables: Record<string, never>): MoneyV2;
  totalTaxV2(variables: Record<string, never>): MoneyV2;
  updatedAt(variables: Record<string, never>): DateTime;
  webUrl(variables: Record<string, never>): URL;
}
export interface CheckoutAttributesUpdateV2Input {
  note?: string | null;
  customAttributes?: AttributeInput[] | null;
  allowPartialAddresses?: boolean | null;
}
export interface CheckoutAttributesUpdateV2Payload {
  __typename: "CheckoutAttributesUpdateV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutBuyerIdentity {
  __typename: "CheckoutBuyerIdentity";
  countryCode(variables: Record<string, never>): CountryCode | null;
}
export interface CheckoutBuyerIdentityInput {
  countryCode: CountryCode;
}
export interface CheckoutCompleteFreePayload {
  __typename: "CheckoutCompleteFreePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutCompleteWithCreditCardV2Payload {
  __typename: "CheckoutCompleteWithCreditCardV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  payment(variables: Record<string, never>): Payment | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutCompleteWithTokenizedPaymentV3Payload {
  __typename: "CheckoutCompleteWithTokenizedPaymentV3Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  payment(variables: Record<string, never>): Payment | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutCreateInput {
  email?: string | null;
  lineItems?: CheckoutLineItemInput[] | null;
  shippingAddress?: MailingAddressInput | null;
  note?: string | null;
  customAttributes?: AttributeInput[] | null;
  allowPartialAddresses?: boolean | null;
  buyerIdentity?: CheckoutBuyerIdentityInput | null;
}
export interface CheckoutCreatePayload {
  __typename: "CheckoutCreatePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  queueToken(variables: Record<string, never>): string | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutCustomerAssociateV2Payload {
  __typename: "CheckoutCustomerAssociateV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  customer(variables: Record<string, never>): Customer | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutCustomerDisassociateV2Payload {
  __typename: "CheckoutCustomerDisassociateV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutDiscountCodeApplyV2Payload {
  __typename: "CheckoutDiscountCodeApplyV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutDiscountCodeRemovePayload {
  __typename: "CheckoutDiscountCodeRemovePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutEmailUpdateV2Payload {
  __typename: "CheckoutEmailUpdateV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export type CheckoutErrorCode = "BLANK" | "INVALID" | "TOO_LONG" | "PRESENT" | "LESS_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN_OR_EQUAL_TO" | "ALREADY_COMPLETED" | "LOCKED" | "NOT_SUPPORTED" | "BAD_DOMAIN" | "INVALID_FOR_COUNTRY" | "INVALID_FOR_COUNTRY_AND_PROVINCE" | "INVALID_STATE_IN_COUNTRY" | "INVALID_PROVINCE_IN_COUNTRY" | "INVALID_REGION_IN_COUNTRY" | "SHIPPING_RATE_EXPIRED" | "GIFT_CARD_UNUSABLE" | "GIFT_CARD_DISABLED" | "GIFT_CARD_CODE_INVALID" | "GIFT_CARD_ALREADY_APPLIED" | "GIFT_CARD_CURRENCY_MISMATCH" | "GIFT_CARD_EXPIRED" | "GIFT_CARD_DEPLETED" | "GIFT_CARD_NOT_FOUND" | "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE" | "DISCOUNT_EXPIRED" | "DISCOUNT_DISABLED" | "DISCOUNT_LIMIT_REACHED" | "HIGHER_VALUE_DISCOUNT_APPLIED" | "MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED" | "DISCOUNT_NOT_FOUND" | "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE" | "DISCOUNT_CODE_APPLICATION_FAILED" | "EMPTY" | "NOT_ENOUGH_IN_STOCK" | "MISSING_PAYMENT_INPUT" | "TOTAL_PRICE_MISMATCH" | "LINE_ITEM_NOT_FOUND" | "UNABLE_TO_APPLY" | "DISCOUNT_ALREADY_APPLIED" | "THROTTLED_DURING_CHECKOUT" | "EXPIRED_QUEUE_TOKEN" | "INVALID_QUEUE_TOKEN" | "INVALID_COUNTRY_AND_CURRENCY" | "PRODUCT_NOT_AVAILABLE";
export interface CheckoutGiftCardRemoveV2Payload {
  __typename: "CheckoutGiftCardRemoveV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutGiftCardsAppendPayload {
  __typename: "CheckoutGiftCardsAppendPayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutLineItem {
  __typename: "CheckoutLineItem";
  customAttributes(variables: Record<string, never>): Attribute[];
  discountAllocations(variables: Record<string, never>): DiscountAllocation[];
  id(variables: Record<string, never>): string;
  quantity(variables: Record<string, never>): number;
  title(variables: Record<string, never>): string;
  unitPrice(variables: Record<string, never>): MoneyV2 | null;
  variant(variables: Record<string, never>): ProductVariant | null;
}
export interface CheckoutLineItemConnection {
  __typename: "CheckoutLineItemConnection";
  edges(variables: Record<string, never>): CheckoutLineItemEdge[];
  nodes(variables: Record<string, never>): CheckoutLineItem[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface CheckoutLineItemEdge {
  __typename: "CheckoutLineItemEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): CheckoutLineItem;
}
export interface CheckoutLineItemInput {
  customAttributes?: AttributeInput[] | null;
  quantity: number;
  variantId: string;
}
export interface CheckoutLineItemUpdateInput {
  id?: string | null;
  variantId?: string | null;
  quantity?: number | null;
  customAttributes?: AttributeInput[] | null;
}
export interface CheckoutLineItemsAddPayload {
  __typename: "CheckoutLineItemsAddPayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutLineItemsRemovePayload {
  __typename: "CheckoutLineItemsRemovePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutLineItemsReplacePayload {
  __typename: "CheckoutLineItemsReplacePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  userErrors(variables: Record<string, never>): CheckoutUserError[];
}
export interface CheckoutLineItemsUpdatePayload {
  __typename: "CheckoutLineItemsUpdatePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutShippingAddressUpdateV2Payload {
  __typename: "CheckoutShippingAddressUpdateV2Payload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutShippingLineUpdatePayload {
  __typename: "CheckoutShippingLineUpdatePayload";
  checkout(variables: Record<string, never>): Checkout | null;
  checkoutUserErrors(variables: Record<string, never>): CheckoutUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CheckoutUserError {
  __typename: "CheckoutUserError";
  code(variables: Record<string, never>): CheckoutErrorCode | null;
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export interface Collection {
  __typename: "Collection";
  description(variables: {
    readonly truncateAt?: number | null;
  }): string;
  descriptionHtml(variables: Record<string, never>): HTML;
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  image(variables: Record<string, never>): Image | null;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  onlineStoreUrl(variables: Record<string, never>): URL | null;
  products(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ProductCollectionSortKeys | null;
    readonly filters?: ProductFilter[] | null;
  }): ProductConnection;
  seo(variables: Record<string, never>): SEO;
  title(variables: Record<string, never>): string;
  trackingParameters(variables: Record<string, never>): string | null;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface CollectionConnection {
  __typename: "CollectionConnection";
  edges(variables: Record<string, never>): CollectionEdge[];
  nodes(variables: Record<string, never>): Collection[];
  pageInfo(variables: Record<string, never>): PageInfo;
  totalCount(variables: Record<string, never>): UnsignedInt64;
}
export interface CollectionEdge {
  __typename: "CollectionEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Collection;
}
export type CollectionSortKeys = "TITLE" | "UPDATED_AT" | "ID" | "RELEVANCE";
export type Color = string;
export interface Comment {
  __typename: "Comment";
  author(variables: Record<string, never>): CommentAuthor;
  content(variables: {
    readonly truncateAt?: number | null;
  }): string;
  contentHtml(variables: Record<string, never>): HTML;
  id(variables: Record<string, never>): string;
}
export interface CommentAuthor {
  __typename: "CommentAuthor";
  email(variables: Record<string, never>): string;
  name(variables: Record<string, never>): string;
}
export interface CommentConnection {
  __typename: "CommentConnection";
  edges(variables: Record<string, never>): CommentEdge[];
  nodes(variables: Record<string, never>): Comment[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface CommentEdge {
  __typename: "CommentEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Comment;
}
export interface Company {
  __typename: "Company";
  createdAt(variables: Record<string, never>): DateTime;
  externalId(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  name(variables: Record<string, never>): string;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface CompanyContact {
  __typename: "CompanyContact";
  createdAt(variables: Record<string, never>): DateTime;
  id(variables: Record<string, never>): string;
  locale(variables: Record<string, never>): string | null;
  title(variables: Record<string, never>): string | null;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface CompanyLocation {
  __typename: "CompanyLocation";
  createdAt(variables: Record<string, never>): DateTime;
  externalId(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  locale(variables: Record<string, never>): string | null;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  name(variables: Record<string, never>): string;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface CompletePaymentChallenge {
  __typename: "CompletePaymentChallenge";
  redirectUrl(variables: Record<string, never>): URL | null;
}
export interface CompletionError {
  __typename: "CompletionError";
  code(variables: Record<string, never>): CompletionErrorCode;
  message(variables: Record<string, never>): string | null;
}
export type CompletionErrorCode = "ERROR" | "INVENTORY_RESERVATION_ERROR" | "PAYMENT_ERROR" | "PAYMENT_TRANSIENT_ERROR" | "PAYMENT_AMOUNT_TOO_SMALL" | "PAYMENT_GATEWAY_NOT_ENABLED_ERROR" | "PAYMENT_INSUFFICIENT_FUNDS" | "PAYMENT_INVALID_PAYMENT_METHOD" | "PAYMENT_INVALID_CURRENCY" | "PAYMENT_INVALID_CREDIT_CARD" | "PAYMENT_INVALID_BILLING_ADDRESS" | "PAYMENT_CARD_DECLINED" | "PAYMENT_CALL_ISSUER";
export interface ComponentizableCartLine {
  __typename: "ComponentizableCartLine";
  attribute(variables: {
    readonly key: string;
  }): Attribute | null;
  attributes(variables: Record<string, never>): Attribute[];
  cost(variables: Record<string, never>): CartLineCost;
  discountAllocations(variables: Record<string, never>): CartDiscountAllocation[];
  estimatedCost(variables: Record<string, never>): CartLineEstimatedCost;
  id(variables: Record<string, never>): string;
  lineComponents(variables: Record<string, never>): CartLine[];
  merchandise(variables: Record<string, never>): Merchandise;
  quantity(variables: Record<string, never>): number;
  sellingPlanAllocation(variables: Record<string, never>): SellingPlanAllocation | null;
}
export interface Country {
  __typename: "Country";
  availableLanguages(variables: Record<string, never>): Language[];
  currency(variables: Record<string, never>): Currency;
  isoCode(variables: Record<string, never>): CountryCode;
  market(variables: Record<string, never>): Market | null;
  name(variables: Record<string, never>): string;
  unitSystem(variables: Record<string, never>): UnitSystem;
}
export type CountryCode = "AF" | "AX" | "AL" | "DZ" | "AD" | "AO" | "AI" | "AG" | "AR" | "AM" | "AW" | "AC" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CI" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MQ" | "MR" | "MU" | "YT" | "MX" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "AN" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MK" | "NO" | "OM" | "PK" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "QA" | "CM" | "RE" | "RO" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "VC" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TA" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "ZZ";
export interface CreditCard {
  __typename: "CreditCard";
  brand(variables: Record<string, never>): string | null;
  expiryMonth(variables: Record<string, never>): number | null;
  expiryYear(variables: Record<string, never>): number | null;
  firstDigits(variables: Record<string, never>): string | null;
  firstName(variables: Record<string, never>): string | null;
  lastDigits(variables: Record<string, never>): string | null;
  lastName(variables: Record<string, never>): string | null;
  maskedNumber(variables: Record<string, never>): string | null;
}
export interface CreditCardPaymentInputV2 {
  paymentAmount: MoneyInput;
  idempotencyKey: string;
  billingAddress: MailingAddressInput;
  vaultId: string;
  test?: boolean | null;
}
export type CropRegion = "CENTER" | "TOP" | "BOTTOM" | "LEFT" | "RIGHT";
export interface Currency {
  __typename: "Currency";
  isoCode(variables: Record<string, never>): CurrencyCode;
  name(variables: Record<string, never>): string;
  symbol(variables: Record<string, never>): string;
}
export type CurrencyCode = "USD" | "EUR" | "GBP" | "CAD" | "AFN" | "ALL" | "DZD" | "AOA" | "ARS" | "AMD" | "AWG" | "AUD" | "BBD" | "AZN" | "BDT" | "BSD" | "BHD" | "BIF" | "BZD" | "BMD" | "BTN" | "BAM" | "BRL" | "BOB" | "BWP" | "BND" | "BGN" | "MMK" | "KHR" | "CVE" | "KYD" | "XAF" | "CLP" | "CNY" | "COP" | "KMF" | "CDF" | "CRC" | "HRK" | "CZK" | "DKK" | "DOP" | "XCD" | "EGP" | "ERN" | "ETB" | "FKP" | "XPF" | "FJD" | "GIP" | "GMD" | "GHS" | "GTQ" | "GYD" | "GEL" | "HTG" | "HNL" | "HKD" | "HUF" | "ISK" | "INR" | "IDR" | "ILS" | "IQD" | "JMD" | "JPY" | "JEP" | "JOD" | "KZT" | "KES" | "KID" | "KWD" | "KGS" | "LAK" | "LVL" | "LBP" | "LSL" | "LRD" | "LTL" | "MGA" | "MKD" | "MOP" | "MWK" | "MVR" | "MRU" | "MXN" | "MYR" | "MUR" | "MDL" | "MAD" | "MNT" | "MZN" | "NAD" | "NPR" | "ANG" | "NZD" | "NIO" | "NGN" | "NOK" | "OMR" | "PAB" | "PKR" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "WST" | "SHP" | "SAR" | "RSD" | "SCR" | "SGD" | "SDG" | "SOS" | "SYP" | "ZAR" | "KRW" | "SSP" | "SBD" | "LKR" | "SRD" | "SZL" | "SEK" | "CHF" | "TWD" | "THB" | "TZS" | "TTD" | "TND" | "TRY" | "TMT" | "UGX" | "UAH" | "AED" | "UYU" | "UZS" | "VUV" | "VES" | "VND" | "XOF" | "YER" | "ZMW" | "BYN" | "BYR" | "DJF" | "GNF" | "IRR" | "LYD" | "SLL" | "STD" | "STN" | "TJS" | "TOP" | "VED" | "VEF" | "XXX";
export interface Customer {
  __typename: "Customer";
  acceptsMarketing(variables: Record<string, never>): boolean;
  addresses(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): MailingAddressConnection;
  createdAt(variables: Record<string, never>): DateTime;
  defaultAddress(variables: Record<string, never>): MailingAddress | null;
  displayName(variables: Record<string, never>): string;
  email(variables: Record<string, never>): string | null;
  firstName(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  lastIncompleteCheckout(variables: Record<string, never>): Checkout | null;
  lastName(variables: Record<string, never>): string | null;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  numberOfOrders(variables: Record<string, never>): UnsignedInt64;
  orders(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: OrderSortKeys | null;
    readonly query?: string | null;
  }): OrderConnection;
  phone(variables: Record<string, never>): string | null;
  tags(variables: Record<string, never>): string[];
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface CustomerAccessToken {
  __typename: "CustomerAccessToken";
  accessToken(variables: Record<string, never>): string;
  expiresAt(variables: Record<string, never>): DateTime;
}
export interface CustomerAccessTokenCreateInput {
  email: string;
  password: string;
}
export interface CustomerAccessTokenCreatePayload {
  __typename: "CustomerAccessTokenCreatePayload";
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerAccessTokenCreateWithMultipassPayload {
  __typename: "CustomerAccessTokenCreateWithMultipassPayload";
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
}
export interface CustomerAccessTokenDeletePayload {
  __typename: "CustomerAccessTokenDeletePayload";
  deletedAccessToken(variables: Record<string, never>): string | null;
  deletedCustomerAccessTokenId(variables: Record<string, never>): string | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerAccessTokenRenewPayload {
  __typename: "CustomerAccessTokenRenewPayload";
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerActivateByUrlPayload {
  __typename: "CustomerActivateByUrlPayload";
  customer(variables: Record<string, never>): Customer | null;
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
}
export interface CustomerActivateInput {
  activationToken: string;
  password: string;
}
export interface CustomerActivatePayload {
  __typename: "CustomerActivatePayload";
  customer(variables: Record<string, never>): Customer | null;
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerAddressCreatePayload {
  __typename: "CustomerAddressCreatePayload";
  customerAddress(variables: Record<string, never>): MailingAddress | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerAddressDeletePayload {
  __typename: "CustomerAddressDeletePayload";
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  deletedCustomerAddressId(variables: Record<string, never>): string | null;
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerAddressUpdatePayload {
  __typename: "CustomerAddressUpdatePayload";
  customerAddress(variables: Record<string, never>): MailingAddress | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerCreateInput {
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  password: string;
  acceptsMarketing?: boolean | null;
}
export interface CustomerCreatePayload {
  __typename: "CustomerCreatePayload";
  customer(variables: Record<string, never>): Customer | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerDefaultAddressUpdatePayload {
  __typename: "CustomerDefaultAddressUpdatePayload";
  customer(variables: Record<string, never>): Customer | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export type CustomerErrorCode = "BLANK" | "INVALID" | "TAKEN" | "TOO_LONG" | "TOO_SHORT" | "UNIDENTIFIED_CUSTOMER" | "CUSTOMER_DISABLED" | "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE" | "CONTAINS_HTML_TAGS" | "CONTAINS_URL" | "TOKEN_INVALID" | "ALREADY_ENABLED" | "NOT_FOUND" | "BAD_DOMAIN" | "INVALID_MULTIPASS_REQUEST";
export interface CustomerRecoverPayload {
  __typename: "CustomerRecoverPayload";
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerResetByUrlPayload {
  __typename: "CustomerResetByUrlPayload";
  customer(variables: Record<string, never>): Customer | null;
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerResetInput {
  resetToken: string;
  password: string;
}
export interface CustomerResetPayload {
  __typename: "CustomerResetPayload";
  customer(variables: Record<string, never>): Customer | null;
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerUpdateInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  password?: string | null;
  acceptsMarketing?: boolean | null;
}
export interface CustomerUpdatePayload {
  __typename: "CustomerUpdatePayload";
  customer(variables: Record<string, never>): Customer | null;
  customerAccessToken(variables: Record<string, never>): CustomerAccessToken | null;
  customerUserErrors(variables: Record<string, never>): CustomerUserError[];
  userErrors(variables: Record<string, never>): UserError[];
}
export interface CustomerUserError {
  __typename: "CustomerUserError";
  code(variables: Record<string, never>): CustomerErrorCode | null;
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export type DateTime = string;
export type Decimal = string;
export type DeliveryAddress = MailingAddress;
export interface DeliveryAddressInput {
  deliveryAddress?: MailingAddressInput | null;
  deliveryAddressValidationStrategy?: DeliveryAddressValidationStrategy | null;
  customerAddressId?: string | null;
}
export type DeliveryAddressValidationStrategy = "COUNTRY_CODE_ONLY" | "STRICT";
export type DeliveryMethodType = "SHIPPING" | "PICK_UP" | "RETAIL" | "LOCAL" | "PICKUP_POINT" | "NONE";
export type DigitalWallet = "APPLE_PAY" | "ANDROID_PAY" | "GOOGLE_PAY" | "SHOPIFY_PAY";
export interface DiscountAllocation {
  __typename: "DiscountAllocation";
  allocatedAmount(variables: Record<string, never>): MoneyV2;
  discountApplication(variables: Record<string, never>): DiscountApplication;
}
export interface DiscountApplication {
  __possibleTypes: AutomaticDiscountApplication | DiscountCodeApplication | ManualDiscountApplication | ScriptDiscountApplication;
  allocationMethod(variables: Record<string, never>): DiscountApplicationAllocationMethod;
  targetSelection(variables: Record<string, never>): DiscountApplicationTargetSelection;
  targetType(variables: Record<string, never>): DiscountApplicationTargetType;
  value(variables: Record<string, never>): PricingValue;
}
export type DiscountApplicationAllocationMethod = "ACROSS" | "EACH" | "ONE";
export interface DiscountApplicationConnection {
  __typename: "DiscountApplicationConnection";
  edges(variables: Record<string, never>): DiscountApplicationEdge[];
  nodes(variables: Record<string, never>): DiscountApplication[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface DiscountApplicationEdge {
  __typename: "DiscountApplicationEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): DiscountApplication;
}
export type DiscountApplicationTargetSelection = "ALL" | "ENTITLED" | "EXPLICIT";
export type DiscountApplicationTargetType = "LINE_ITEM" | "SHIPPING_LINE";
export interface DiscountCodeApplication {
  __typename: "DiscountCodeApplication";
  allocationMethod(variables: Record<string, never>): DiscountApplicationAllocationMethod;
  applicable(variables: Record<string, never>): boolean;
  code(variables: Record<string, never>): string;
  targetSelection(variables: Record<string, never>): DiscountApplicationTargetSelection;
  targetType(variables: Record<string, never>): DiscountApplicationTargetType;
  value(variables: Record<string, never>): PricingValue;
}
export interface DisplayableError {
  __possibleTypes: CartUserError | CheckoutUserError | CustomerUserError | MetafieldDeleteUserError | MetafieldsSetUserError | UserError;
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export interface Domain {
  __typename: "Domain";
  host(variables: Record<string, never>): string;
  sslEnabled(variables: Record<string, never>): boolean;
  url(variables: Record<string, never>): URL;
}
export interface ExternalVideo {
  __typename: "ExternalVideo";
  alt(variables: Record<string, never>): string | null;
  embedUrl(variables: Record<string, never>): URL;
  embeddedUrl(variables: Record<string, never>): URL;
  host(variables: Record<string, never>): MediaHost;
  id(variables: Record<string, never>): string;
  mediaContentType(variables: Record<string, never>): MediaContentType;
  originUrl(variables: Record<string, never>): URL;
  presentation(variables: Record<string, never>): MediaPresentation | null;
  previewImage(variables: Record<string, never>): Image | null;
}
export interface Filter {
  __typename: "Filter";
  id(variables: Record<string, never>): string;
  label(variables: Record<string, never>): string;
  presentation(variables: Record<string, never>): FilterPresentation | null;
  type(variables: Record<string, never>): FilterType;
  values(variables: Record<string, never>): FilterValue[];
}
export type FilterPresentation = "IMAGE" | "SWATCH" | "TEXT";
export type FilterType = "LIST" | "PRICE_RANGE" | "BOOLEAN";
export interface FilterValue {
  __typename: "FilterValue";
  count(variables: Record<string, never>): number;
  id(variables: Record<string, never>): string;
  image(variables: Record<string, never>): MediaImage | null;
  input(variables: Record<string, never>): JSON;
  label(variables: Record<string, never>): string;
  swatch(variables: Record<string, never>): Swatch | null;
}
export interface Fulfillment {
  __typename: "Fulfillment";
  fulfillmentLineItems(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): FulfillmentLineItemConnection;
  trackingCompany(variables: Record<string, never>): string | null;
  trackingInfo(variables: {
    readonly first?: number | null;
  }): FulfillmentTrackingInfo[];
}
export interface FulfillmentLineItem {
  __typename: "FulfillmentLineItem";
  lineItem(variables: Record<string, never>): OrderLineItem;
  quantity(variables: Record<string, never>): number;
}
export interface FulfillmentLineItemConnection {
  __typename: "FulfillmentLineItemConnection";
  edges(variables: Record<string, never>): FulfillmentLineItemEdge[];
  nodes(variables: Record<string, never>): FulfillmentLineItem[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface FulfillmentLineItemEdge {
  __typename: "FulfillmentLineItemEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): FulfillmentLineItem;
}
export interface FulfillmentTrackingInfo {
  __typename: "FulfillmentTrackingInfo";
  number(variables: Record<string, never>): string | null;
  url(variables: Record<string, never>): URL | null;
}
export interface GenericFile {
  __typename: "GenericFile";
  alt(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  mimeType(variables: Record<string, never>): string | null;
  originalFileSize(variables: Record<string, never>): number | null;
  previewImage(variables: Record<string, never>): Image | null;
  url(variables: Record<string, never>): URL | null;
}
export interface GeoCoordinateInput {
  latitude: number;
  longitude: number;
}
export type HTML = string;
export interface HasMetafields {
  __possibleTypes: Article | Blog | Cart | Collection | Company | CompanyLocation | Customer | Location | Market | Order | Page | Product | ProductVariant | Shop;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
}
export interface HasMetafieldsIdentifier {
  namespace?: string | null;
  key: string;
}
export interface Image {
  __typename: "Image";
  altText(variables: Record<string, never>): string | null;
  height(variables: Record<string, never>): number | null;
  id(variables: Record<string, never>): string | null;
  originalSrc(variables: Record<string, never>): URL;
  src(variables: Record<string, never>): URL;
  transformedSrc(variables: {
    readonly maxWidth?: number | null;
    readonly maxHeight?: number | null;
    readonly crop?: CropRegion | null;
    readonly scale?: number | null;
    readonly preferredContentType?: ImageContentType | null;
  }): URL;
  url(variables: {
    readonly transform?: ImageTransformInput | null;
  }): URL;
  width(variables: Record<string, never>): number | null;
}
export interface ImageConnection {
  __typename: "ImageConnection";
  edges(variables: Record<string, never>): ImageEdge[];
  nodes(variables: Record<string, never>): Image[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export type ImageContentType = "PNG" | "JPG" | "WEBP";
export interface ImageEdge {
  __typename: "ImageEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Image;
}
export interface ImageTransformInput {
  crop?: CropRegion | null;
  maxWidth?: number | null;
  maxHeight?: number | null;
  scale?: number | null;
  preferredContentType?: ImageContentType | null;
}
export interface InContextAnnotation {
  __typename: "InContextAnnotation";
  description(variables: Record<string, never>): string;
  type(variables: Record<string, never>): InContextAnnotationType;
}
export interface InContextAnnotationType {
  __typename: "InContextAnnotationType";
  kind(variables: Record<string, never>): string;
  name(variables: Record<string, never>): string;
}
export type JSON = string;
export interface Language {
  __typename: "Language";
  endonymName(variables: Record<string, never>): string;
  isoCode(variables: Record<string, never>): LanguageCode;
  name(variables: Record<string, never>): string;
}
export type LanguageCode = "AF" | "AK" | "AM" | "AR" | "AS" | "AZ" | "BE" | "BG" | "BM" | "BN" | "BO" | "BR" | "BS" | "CA" | "CE" | "CKB" | "CS" | "CY" | "DA" | "DE" | "DZ" | "EE" | "EL" | "EN" | "EO" | "ES" | "ET" | "EU" | "FA" | "FF" | "FI" | "FIL" | "FO" | "FR" | "FY" | "GA" | "GD" | "GL" | "GU" | "GV" | "HA" | "HE" | "HI" | "HR" | "HU" | "HY" | "IA" | "ID" | "IG" | "II" | "IS" | "IT" | "JA" | "JV" | "KA" | "KI" | "KK" | "KL" | "KM" | "KN" | "KO" | "KS" | "KU" | "KW" | "KY" | "LB" | "LG" | "LN" | "LO" | "LT" | "LU" | "LV" | "MG" | "MI" | "MK" | "ML" | "MN" | "MR" | "MS" | "MT" | "MY" | "NB" | "ND" | "NE" | "NL" | "NN" | "NO" | "OM" | "OR" | "OS" | "PA" | "PL" | "PS" | "PT_BR" | "PT_PT" | "QU" | "RM" | "RN" | "RO" | "RU" | "RW" | "SA" | "SC" | "SD" | "SE" | "SG" | "SI" | "SK" | "SL" | "SN" | "SO" | "SQ" | "SR" | "SU" | "SV" | "SW" | "TA" | "TE" | "TG" | "TH" | "TI" | "TK" | "TO" | "TR" | "TT" | "UG" | "UK" | "UR" | "UZ" | "VI" | "WO" | "XH" | "YI" | "YO" | "ZH_CN" | "ZH_TW" | "ZU" | "ZH" | "PT" | "CU" | "VO" | "LA" | "SH" | "MO";
export interface Localization {
  __typename: "Localization";
  availableCountries(variables: Record<string, never>): Country[];
  availableLanguages(variables: Record<string, never>): Language[];
  country(variables: Record<string, never>): Country;
  language(variables: Record<string, never>): Language;
  market(variables: Record<string, never>): Market;
}
export interface Location {
  __typename: "Location";
  address(variables: Record<string, never>): LocationAddress;
  id(variables: Record<string, never>): string;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  name(variables: Record<string, never>): string;
}
export interface LocationAddress {
  __typename: "LocationAddress";
  address1(variables: Record<string, never>): string | null;
  address2(variables: Record<string, never>): string | null;
  city(variables: Record<string, never>): string | null;
  country(variables: Record<string, never>): string | null;
  countryCode(variables: Record<string, never>): string | null;
  formatted(variables: Record<string, never>): string[];
  latitude(variables: Record<string, never>): number | null;
  longitude(variables: Record<string, never>): number | null;
  phone(variables: Record<string, never>): string | null;
  province(variables: Record<string, never>): string | null;
  provinceCode(variables: Record<string, never>): string | null;
  zip(variables: Record<string, never>): string | null;
}
export interface LocationConnection {
  __typename: "LocationConnection";
  edges(variables: Record<string, never>): LocationEdge[];
  nodes(variables: Record<string, never>): Location[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface LocationEdge {
  __typename: "LocationEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Location;
}
export type LocationSortKeys = "ID" | "NAME" | "CITY" | "DISTANCE";
export interface MailingAddress {
  __typename: "MailingAddress";
  address1(variables: Record<string, never>): string | null;
  address2(variables: Record<string, never>): string | null;
  city(variables: Record<string, never>): string | null;
  company(variables: Record<string, never>): string | null;
  country(variables: Record<string, never>): string | null;
  countryCode(variables: Record<string, never>): string | null;
  countryCodeV2(variables: Record<string, never>): CountryCode | null;
  firstName(variables: Record<string, never>): string | null;
  formatted(variables: {
    readonly withName?: boolean | null;
    readonly withCompany?: boolean | null;
  }): string[];
  formattedArea(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  lastName(variables: Record<string, never>): string | null;
  latitude(variables: Record<string, never>): number | null;
  longitude(variables: Record<string, never>): number | null;
  name(variables: Record<string, never>): string | null;
  phone(variables: Record<string, never>): string | null;
  province(variables: Record<string, never>): string | null;
  provinceCode(variables: Record<string, never>): string | null;
  zip(variables: Record<string, never>): string | null;
}
export interface MailingAddressConnection {
  __typename: "MailingAddressConnection";
  edges(variables: Record<string, never>): MailingAddressEdge[];
  nodes(variables: Record<string, never>): MailingAddress[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface MailingAddressEdge {
  __typename: "MailingAddressEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): MailingAddress;
}
export interface MailingAddressInput {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  company?: string | null;
  country?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  province?: string | null;
  zip?: string | null;
}
export interface ManualDiscountApplication {
  __typename: "ManualDiscountApplication";
  allocationMethod(variables: Record<string, never>): DiscountApplicationAllocationMethod;
  description(variables: Record<string, never>): string | null;
  targetSelection(variables: Record<string, never>): DiscountApplicationTargetSelection;
  targetType(variables: Record<string, never>): DiscountApplicationTargetType;
  title(variables: Record<string, never>): string;
  value(variables: Record<string, never>): PricingValue;
}
export interface Market {
  __typename: "Market";
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
}
export interface Media {
  __possibleTypes: ExternalVideo | MediaImage | Model3d | Video;
  alt(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  mediaContentType(variables: Record<string, never>): MediaContentType;
  presentation(variables: Record<string, never>): MediaPresentation | null;
  previewImage(variables: Record<string, never>): Image | null;
}
export interface MediaConnection {
  __typename: "MediaConnection";
  edges(variables: Record<string, never>): MediaEdge[];
  nodes(variables: Record<string, never>): Media[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export type MediaContentType = "EXTERNAL_VIDEO" | "IMAGE" | "MODEL_3D" | "VIDEO";
export interface MediaEdge {
  __typename: "MediaEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Media;
}
export type MediaHost = "YOUTUBE" | "VIMEO";
export interface MediaImage {
  __typename: "MediaImage";
  alt(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  image(variables: Record<string, never>): Image | null;
  mediaContentType(variables: Record<string, never>): MediaContentType;
  presentation(variables: Record<string, never>): MediaPresentation | null;
  previewImage(variables: Record<string, never>): Image | null;
}
export interface MediaPresentation {
  __typename: "MediaPresentation";
  asJson(variables: {
    readonly format: MediaPresentationFormat;
  }): JSON | null;
  id(variables: Record<string, never>): string;
}
export type MediaPresentationFormat = "MODEL_VIEWER" | "IMAGE";
export interface Menu {
  __typename: "Menu";
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  items(variables: Record<string, never>): MenuItem[];
  itemsCount(variables: Record<string, never>): number;
  title(variables: Record<string, never>): string;
}
export interface MenuItem {
  __typename: "MenuItem";
  id(variables: Record<string, never>): string;
  items(variables: Record<string, never>): MenuItem[];
  resource(variables: Record<string, never>): MenuItemResource | null;
  resourceId(variables: Record<string, never>): string | null;
  tags(variables: Record<string, never>): string[];
  title(variables: Record<string, never>): string;
  type(variables: Record<string, never>): MenuItemType;
  url(variables: Record<string, never>): URL | null;
}
export type MenuItemResource = Article | Blog | Collection | Metaobject | Page | Product | ShopPolicy;
export type MenuItemType = "FRONTPAGE" | "COLLECTION" | "COLLECTIONS" | "PRODUCT" | "CATALOG" | "PAGE" | "BLOG" | "ARTICLE" | "SEARCH" | "SHOP_POLICY" | "HTTP" | "METAOBJECT";
export type Merchandise = ProductVariant;
export interface Metafield {
  __typename: "Metafield";
  createdAt(variables: Record<string, never>): DateTime;
  description(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  key(variables: Record<string, never>): string;
  namespace(variables: Record<string, never>): string;
  parentResource(variables: Record<string, never>): MetafieldParentResource;
  reference(variables: Record<string, never>): MetafieldReference | null;
  references(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
  }): MetafieldReferenceConnection | null;
  type(variables: Record<string, never>): string;
  updatedAt(variables: Record<string, never>): DateTime;
  value(variables: Record<string, never>): string;
}
export type MetafieldDeleteErrorCode = "INVALID_OWNER" | "METAFIELD_DOES_NOT_EXIST";
export interface MetafieldDeleteUserError {
  __typename: "MetafieldDeleteUserError";
  code(variables: Record<string, never>): MetafieldDeleteErrorCode | null;
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export interface MetafieldFilter {
  namespace: string;
  key: string;
  value: string;
}
export type MetafieldParentResource = Article | Blog | Cart | Collection | Company | CompanyLocation | Customer | Location | Market | Order | Page | Product | ProductVariant | Shop;
export type MetafieldReference = Collection | GenericFile | MediaImage | Metaobject | Model3d | Page | Product | ProductVariant | Video;
export interface MetafieldReferenceConnection {
  __typename: "MetafieldReferenceConnection";
  edges(variables: Record<string, never>): MetafieldReferenceEdge[];
  nodes(variables: Record<string, never>): MetafieldReference[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface MetafieldReferenceEdge {
  __typename: "MetafieldReferenceEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): MetafieldReference;
}
export interface MetafieldsSetUserError {
  __typename: "MetafieldsSetUserError";
  code(variables: Record<string, never>): MetafieldsSetUserErrorCode | null;
  elementIndex(variables: Record<string, never>): number | null;
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export type MetafieldsSetUserErrorCode = "BLANK" | "INCLUSION" | "LESS_THAN_OR_EQUAL_TO" | "PRESENT" | "TOO_SHORT" | "TOO_LONG" | "INVALID_OWNER" | "INVALID_VALUE" | "INVALID_TYPE";
export interface Metaobject {
  __typename: "Metaobject";
  field(variables: {
    readonly key: string;
  }): MetaobjectField | null;
  fields(variables: Record<string, never>): MetaobjectField[];
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  onlineStoreUrl(variables: Record<string, never>): URL | null;
  seo(variables: Record<string, never>): MetaobjectSEO | null;
  type(variables: Record<string, never>): string;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface MetaobjectConnection {
  __typename: "MetaobjectConnection";
  edges(variables: Record<string, never>): MetaobjectEdge[];
  nodes(variables: Record<string, never>): Metaobject[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface MetaobjectEdge {
  __typename: "MetaobjectEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Metaobject;
}
export interface MetaobjectField {
  __typename: "MetaobjectField";
  key(variables: Record<string, never>): string;
  reference(variables: Record<string, never>): MetafieldReference | null;
  references(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
  }): MetafieldReferenceConnection | null;
  type(variables: Record<string, never>): string;
  value(variables: Record<string, never>): string | null;
}
export interface MetaobjectHandleInput {
  handle: string;
  type: string;
}
export interface MetaobjectSEO {
  __typename: "MetaobjectSEO";
  description(variables: Record<string, never>): MetaobjectField | null;
  title(variables: Record<string, never>): MetaobjectField | null;
}
export interface Model3d {
  __typename: "Model3d";
  alt(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  mediaContentType(variables: Record<string, never>): MediaContentType;
  presentation(variables: Record<string, never>): MediaPresentation | null;
  previewImage(variables: Record<string, never>): Image | null;
  sources(variables: Record<string, never>): Model3dSource[];
}
export interface Model3dSource {
  __typename: "Model3dSource";
  filesize(variables: Record<string, never>): number;
  format(variables: Record<string, never>): string;
  mimeType(variables: Record<string, never>): string;
  url(variables: Record<string, never>): string;
}
export interface MoneyInput {
  amount: Decimal;
  currencyCode: CurrencyCode;
}
export interface MoneyV2 {
  __typename: "MoneyV2";
  amount(variables: Record<string, never>): Decimal;
  currencyCode(variables: Record<string, never>): CurrencyCode;
}
export interface Mutation {
  __typename: "Mutation";
  cartAttributesUpdate(variables: {
    readonly attributes: AttributeInput[];
    readonly cartId: string;
  }): CartAttributesUpdatePayload | null;
  cartBuyerIdentityUpdate(variables: {
    readonly cartId: string;
    readonly buyerIdentity: CartBuyerIdentityInput;
  }): CartBuyerIdentityUpdatePayload | null;
  cartCreate(variables: {
    readonly input?: CartInput | null;
  }): CartCreatePayload | null;
  cartDiscountCodesUpdate(variables: {
    readonly cartId: string;
    readonly discountCodes?: string[] | null;
  }): CartDiscountCodesUpdatePayload | null;
  cartLinesAdd(variables: {
    readonly lines: CartLineInput[];
    readonly cartId: string;
  }): CartLinesAddPayload | null;
  cartLinesRemove(variables: {
    readonly cartId: string;
    readonly lineIds: string[];
  }): CartLinesRemovePayload | null;
  cartLinesUpdate(variables: {
    readonly cartId: string;
    readonly lines: CartLineUpdateInput[];
  }): CartLinesUpdatePayload | null;
  cartMetafieldDelete(variables: {
    readonly input: CartMetafieldDeleteInput;
  }): CartMetafieldDeletePayload | null;
  cartMetafieldsSet(variables: {
    readonly metafields: CartMetafieldsSetInput[];
  }): CartMetafieldsSetPayload | null;
  cartNoteUpdate(variables: {
    readonly cartId: string;
    readonly note: string;
  }): CartNoteUpdatePayload | null;
  cartPaymentUpdate(variables: {
    readonly cartId: string;
    readonly payment: CartPaymentInput;
  }): CartPaymentUpdatePayload | null;
  cartSelectedDeliveryOptionsUpdate(variables: {
    readonly cartId: string;
    readonly selectedDeliveryOptions: CartSelectedDeliveryOptionInput[];
  }): CartSelectedDeliveryOptionsUpdatePayload | null;
  cartSubmitForCompletion(variables: {
    readonly cartId: string;
    readonly attemptToken: string;
  }): CartSubmitForCompletionPayload | null;
  checkoutAttributesUpdateV2(variables: {
    readonly checkoutId: string;
    readonly input: CheckoutAttributesUpdateV2Input;
  }): CheckoutAttributesUpdateV2Payload | null;
  checkoutCompleteFree(variables: {
    readonly checkoutId: string;
  }): CheckoutCompleteFreePayload | null;
  checkoutCompleteWithCreditCardV2(variables: {
    readonly checkoutId: string;
    readonly payment: CreditCardPaymentInputV2;
  }): CheckoutCompleteWithCreditCardV2Payload | null;
  checkoutCompleteWithTokenizedPaymentV3(variables: {
    readonly checkoutId: string;
    readonly payment: TokenizedPaymentInputV3;
  }): CheckoutCompleteWithTokenizedPaymentV3Payload | null;
  checkoutCreate(variables: {
    readonly input: CheckoutCreateInput;
    readonly queueToken?: string | null;
  }): CheckoutCreatePayload | null;
  checkoutCustomerAssociateV2(variables: {
    readonly checkoutId: string;
    readonly customerAccessToken: string;
  }): CheckoutCustomerAssociateV2Payload | null;
  checkoutCustomerDisassociateV2(variables: {
    readonly checkoutId: string;
  }): CheckoutCustomerDisassociateV2Payload | null;
  checkoutDiscountCodeApplyV2(variables: {
    readonly discountCode: string;
    readonly checkoutId: string;
  }): CheckoutDiscountCodeApplyV2Payload | null;
  checkoutDiscountCodeRemove(variables: {
    readonly checkoutId: string;
  }): CheckoutDiscountCodeRemovePayload | null;
  checkoutEmailUpdateV2(variables: {
    readonly checkoutId: string;
    readonly email: string;
  }): CheckoutEmailUpdateV2Payload | null;
  checkoutGiftCardRemoveV2(variables: {
    readonly appliedGiftCardId: string;
    readonly checkoutId: string;
  }): CheckoutGiftCardRemoveV2Payload | null;
  checkoutGiftCardsAppend(variables: {
    readonly giftCardCodes: string[];
    readonly checkoutId: string;
  }): CheckoutGiftCardsAppendPayload | null;
  checkoutLineItemsAdd(variables: {
    readonly lineItems: CheckoutLineItemInput[];
    readonly checkoutId: string;
  }): CheckoutLineItemsAddPayload | null;
  checkoutLineItemsRemove(variables: {
    readonly checkoutId: string;
    readonly lineItemIds: string[];
  }): CheckoutLineItemsRemovePayload | null;
  checkoutLineItemsReplace(variables: {
    readonly lineItems: CheckoutLineItemInput[];
    readonly checkoutId: string;
  }): CheckoutLineItemsReplacePayload | null;
  checkoutLineItemsUpdate(variables: {
    readonly checkoutId: string;
    readonly lineItems: CheckoutLineItemUpdateInput[];
  }): CheckoutLineItemsUpdatePayload | null;
  checkoutShippingAddressUpdateV2(variables: {
    readonly shippingAddress: MailingAddressInput;
    readonly checkoutId: string;
  }): CheckoutShippingAddressUpdateV2Payload | null;
  checkoutShippingLineUpdate(variables: {
    readonly checkoutId: string;
    readonly shippingRateHandle: string;
  }): CheckoutShippingLineUpdatePayload | null;
  customerAccessTokenCreate(variables: {
    readonly input: CustomerAccessTokenCreateInput;
  }): CustomerAccessTokenCreatePayload | null;
  customerAccessTokenCreateWithMultipass(variables: {
    readonly multipassToken: string;
  }): CustomerAccessTokenCreateWithMultipassPayload | null;
  customerAccessTokenDelete(variables: {
    readonly customerAccessToken: string;
  }): CustomerAccessTokenDeletePayload | null;
  customerAccessTokenRenew(variables: {
    readonly customerAccessToken: string;
  }): CustomerAccessTokenRenewPayload | null;
  customerActivate(variables: {
    readonly id: string;
    readonly input: CustomerActivateInput;
  }): CustomerActivatePayload | null;
  customerActivateByUrl(variables: {
    readonly activationUrl: URL;
    readonly password: string;
  }): CustomerActivateByUrlPayload | null;
  customerAddressCreate(variables: {
    readonly customerAccessToken: string;
    readonly address: MailingAddressInput;
  }): CustomerAddressCreatePayload | null;
  customerAddressDelete(variables: {
    readonly id: string;
    readonly customerAccessToken: string;
  }): CustomerAddressDeletePayload | null;
  customerAddressUpdate(variables: {
    readonly customerAccessToken: string;
    readonly id: string;
    readonly address: MailingAddressInput;
  }): CustomerAddressUpdatePayload | null;
  customerCreate(variables: {
    readonly input: CustomerCreateInput;
  }): CustomerCreatePayload | null;
  customerDefaultAddressUpdate(variables: {
    readonly customerAccessToken: string;
    readonly addressId: string;
  }): CustomerDefaultAddressUpdatePayload | null;
  customerRecover(variables: {
    readonly email: string;
  }): CustomerRecoverPayload | null;
  customerReset(variables: {
    readonly id: string;
    readonly input: CustomerResetInput;
  }): CustomerResetPayload | null;
  customerResetByUrl(variables: {
    readonly resetUrl: URL;
    readonly password: string;
  }): CustomerResetByUrlPayload | null;
  customerUpdate(variables: {
    readonly customerAccessToken: string;
    readonly customer: CustomerUpdateInput;
  }): CustomerUpdatePayload | null;
}
export interface Node {
  __possibleTypes: AppliedGiftCard | Article | Blog | Cart | CartLine | Checkout | CheckoutLineItem | Collection | Comment | Company | CompanyContact | CompanyLocation | ComponentizableCartLine | ExternalVideo | GenericFile | Location | MailingAddress | Market | MediaImage | MediaPresentation | Menu | MenuItem | Metafield | Metaobject | Model3d | Order | Page | Payment | Product | ProductOption | ProductVariant | Shop | ShopPolicy | UrlRedirect | Video;
  id(variables: Record<string, never>): string;
}
export interface OnlineStorePublishable {
  __possibleTypes: Article | Blog | Collection | Metaobject | Page | Product;
  onlineStoreUrl(variables: Record<string, never>): URL | null;
}
export interface Order {
  __typename: "Order";
  billingAddress(variables: Record<string, never>): MailingAddress | null;
  cancelReason(variables: Record<string, never>): OrderCancelReason | null;
  canceledAt(variables: Record<string, never>): DateTime | null;
  currencyCode(variables: Record<string, never>): CurrencyCode;
  currentSubtotalPrice(variables: Record<string, never>): MoneyV2;
  currentTotalDuties(variables: Record<string, never>): MoneyV2 | null;
  currentTotalPrice(variables: Record<string, never>): MoneyV2;
  currentTotalTax(variables: Record<string, never>): MoneyV2;
  customAttributes(variables: Record<string, never>): Attribute[];
  customerLocale(variables: Record<string, never>): string | null;
  customerUrl(variables: Record<string, never>): URL | null;
  discountApplications(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): DiscountApplicationConnection;
  edited(variables: Record<string, never>): boolean;
  email(variables: Record<string, never>): string | null;
  financialStatus(variables: Record<string, never>): OrderFinancialStatus | null;
  fulfillmentStatus(variables: Record<string, never>): OrderFulfillmentStatus;
  id(variables: Record<string, never>): string;
  lineItems(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): OrderLineItemConnection;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  name(variables: Record<string, never>): string;
  orderNumber(variables: Record<string, never>): number;
  originalTotalDuties(variables: Record<string, never>): MoneyV2 | null;
  originalTotalPrice(variables: Record<string, never>): MoneyV2;
  phone(variables: Record<string, never>): string | null;
  processedAt(variables: Record<string, never>): DateTime;
  shippingAddress(variables: Record<string, never>): MailingAddress | null;
  shippingDiscountAllocations(variables: Record<string, never>): DiscountAllocation[];
  statusUrl(variables: Record<string, never>): URL;
  subtotalPrice(variables: Record<string, never>): MoneyV2 | null;
  subtotalPriceV2(variables: Record<string, never>): MoneyV2 | null;
  successfulFulfillments(variables: {
    readonly first?: number | null;
  }): Fulfillment[] | null;
  totalPrice(variables: Record<string, never>): MoneyV2;
  totalPriceV2(variables: Record<string, never>): MoneyV2;
  totalRefunded(variables: Record<string, never>): MoneyV2;
  totalRefundedV2(variables: Record<string, never>): MoneyV2;
  totalShippingPrice(variables: Record<string, never>): MoneyV2;
  totalShippingPriceV2(variables: Record<string, never>): MoneyV2;
  totalTax(variables: Record<string, never>): MoneyV2 | null;
  totalTaxV2(variables: Record<string, never>): MoneyV2 | null;
}
export type OrderCancelReason = "CUSTOMER" | "DECLINED" | "FRAUD" | "INVENTORY" | "STAFF" | "OTHER";
export interface OrderConnection {
  __typename: "OrderConnection";
  edges(variables: Record<string, never>): OrderEdge[];
  nodes(variables: Record<string, never>): Order[];
  pageInfo(variables: Record<string, never>): PageInfo;
  totalCount(variables: Record<string, never>): UnsignedInt64;
}
export interface OrderEdge {
  __typename: "OrderEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Order;
}
export type OrderFinancialStatus = "PENDING" | "AUTHORIZED" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "VOIDED" | "PAID" | "REFUNDED";
export type OrderFulfillmentStatus = "UNFULFILLED" | "PARTIALLY_FULFILLED" | "FULFILLED" | "RESTOCKED" | "PENDING_FULFILLMENT" | "OPEN" | "IN_PROGRESS" | "ON_HOLD" | "SCHEDULED";
export interface OrderLineItem {
  __typename: "OrderLineItem";
  currentQuantity(variables: Record<string, never>): number;
  customAttributes(variables: Record<string, never>): Attribute[];
  discountAllocations(variables: Record<string, never>): DiscountAllocation[];
  discountedTotalPrice(variables: Record<string, never>): MoneyV2;
  originalTotalPrice(variables: Record<string, never>): MoneyV2;
  quantity(variables: Record<string, never>): number;
  title(variables: Record<string, never>): string;
  variant(variables: Record<string, never>): ProductVariant | null;
}
export interface OrderLineItemConnection {
  __typename: "OrderLineItemConnection";
  edges(variables: Record<string, never>): OrderLineItemEdge[];
  nodes(variables: Record<string, never>): OrderLineItem[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface OrderLineItemEdge {
  __typename: "OrderLineItemEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): OrderLineItem;
}
export type OrderSortKeys = "PROCESSED_AT" | "TOTAL_PRICE" | "ID" | "RELEVANCE";
export interface Page {
  __typename: "Page";
  body(variables: Record<string, never>): HTML;
  bodySummary(variables: Record<string, never>): string;
  createdAt(variables: Record<string, never>): DateTime;
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  onlineStoreUrl(variables: Record<string, never>): URL | null;
  seo(variables: Record<string, never>): SEO | null;
  title(variables: Record<string, never>): string;
  trackingParameters(variables: Record<string, never>): string | null;
  updatedAt(variables: Record<string, never>): DateTime;
}
export interface PageConnection {
  __typename: "PageConnection";
  edges(variables: Record<string, never>): PageEdge[];
  nodes(variables: Record<string, never>): Page[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface PageEdge {
  __typename: "PageEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Page;
}
export interface PageInfo {
  __typename: "PageInfo";
  endCursor(variables: Record<string, never>): string | null;
  hasNextPage(variables: Record<string, never>): boolean;
  hasPreviousPage(variables: Record<string, never>): boolean;
  startCursor(variables: Record<string, never>): string | null;
}
export type PageSortKeys = "TITLE" | "UPDATED_AT" | "ID" | "RELEVANCE";
export interface Payment {
  __typename: "Payment";
  amount(variables: Record<string, never>): MoneyV2;
  amountV2(variables: Record<string, never>): MoneyV2;
  billingAddress(variables: Record<string, never>): MailingAddress | null;
  checkout(variables: Record<string, never>): Checkout;
  creditCard(variables: Record<string, never>): CreditCard | null;
  errorMessage(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  idempotencyKey(variables: Record<string, never>): string | null;
  nextActionUrl(variables: Record<string, never>): URL | null;
  ready(variables: Record<string, never>): boolean;
  test(variables: Record<string, never>): boolean;
  transaction(variables: Record<string, never>): Transaction | null;
}
export interface PaymentSettings {
  __typename: "PaymentSettings";
  acceptedCardBrands(variables: Record<string, never>): CardBrand[];
  cardVaultUrl(variables: Record<string, never>): URL;
  countryCode(variables: Record<string, never>): CountryCode;
  currencyCode(variables: Record<string, never>): CurrencyCode;
  enabledPresentmentCurrencies(variables: Record<string, never>): CurrencyCode[];
  shopifyPaymentsAccountId(variables: Record<string, never>): string | null;
  supportedDigitalWallets(variables: Record<string, never>): DigitalWallet[];
}
export type PaymentTokenType = "APPLE_PAY" | "VAULT" | "SHOPIFY_PAY" | "GOOGLE_PAY" | "STRIPE_VAULT_TOKEN";
export type PredictiveSearchLimitScope = "ALL" | "EACH";
export interface PredictiveSearchResult {
  __typename: "PredictiveSearchResult";
  articles(variables: Record<string, never>): Article[];
  collections(variables: Record<string, never>): Collection[];
  pages(variables: Record<string, never>): Page[];
  products(variables: Record<string, never>): Product[];
  queries(variables: Record<string, never>): SearchQuerySuggestion[];
}
export type PredictiveSearchType = "COLLECTION" | "PRODUCT" | "PAGE" | "ARTICLE" | "QUERY";
export type PreferenceDeliveryMethodType = "SHIPPING" | "PICK_UP" | "PICKUP_POINT";
export interface PriceRangeFilter {
  min?: number | null;
  max?: number | null;
}
export interface PricingPercentageValue {
  __typename: "PricingPercentageValue";
  percentage(variables: Record<string, never>): number;
}
export type PricingValue = MoneyV2 | PricingPercentageValue;
export interface Product {
  __typename: "Product";
  availableForSale(variables: Record<string, never>): boolean;
  collections(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): CollectionConnection;
  compareAtPriceRange(variables: Record<string, never>): ProductPriceRange;
  createdAt(variables: Record<string, never>): DateTime;
  description(variables: {
    readonly truncateAt?: number | null;
  }): string;
  descriptionHtml(variables: Record<string, never>): HTML;
  featuredImage(variables: Record<string, never>): Image | null;
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  images(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ProductImageSortKeys | null;
  }): ImageConnection;
  isGiftCard(variables: Record<string, never>): boolean;
  media(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ProductMediaSortKeys | null;
  }): MediaConnection;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  onlineStoreUrl(variables: Record<string, never>): URL | null;
  options(variables: {
    readonly first?: number | null;
  }): ProductOption[];
  priceRange(variables: Record<string, never>): ProductPriceRange;
  productType(variables: Record<string, never>): string;
  publishedAt(variables: Record<string, never>): DateTime;
  requiresSellingPlan(variables: Record<string, never>): boolean;
  sellingPlanGroups(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): SellingPlanGroupConnection;
  seo(variables: Record<string, never>): SEO;
  tags(variables: Record<string, never>): string[];
  title(variables: Record<string, never>): string;
  totalInventory(variables: Record<string, never>): number | null;
  trackingParameters(variables: Record<string, never>): string | null;
  updatedAt(variables: Record<string, never>): DateTime;
  variantBySelectedOptions(variables: {
    readonly selectedOptions: SelectedOptionInput[];
    readonly ignoreUnknownOptions?: boolean | null;
    readonly caseInsensitiveMatch?: boolean | null;
  }): ProductVariant | null;
  variants(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ProductVariantSortKeys | null;
  }): ProductVariantConnection;
  vendor(variables: Record<string, never>): string;
}
export type ProductCollectionSortKeys = "TITLE" | "PRICE" | "BEST_SELLING" | "CREATED" | "ID" | "MANUAL" | "COLLECTION_DEFAULT" | "RELEVANCE";
export interface ProductConnection {
  __typename: "ProductConnection";
  edges(variables: Record<string, never>): ProductEdge[];
  filters(variables: Record<string, never>): Filter[];
  nodes(variables: Record<string, never>): Product[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface ProductEdge {
  __typename: "ProductEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): Product;
}
export interface ProductFilter {
  available?: boolean | null;
  variantOption?: VariantOptionFilter | null;
  productType?: string | null;
  productVendor?: string | null;
  price?: PriceRangeFilter | null;
  productMetafield?: MetafieldFilter | null;
  variantMetafield?: MetafieldFilter | null;
  tag?: string | null;
}
export type ProductImageSortKeys = "CREATED_AT" | "POSITION" | "ID" | "RELEVANCE";
export type ProductMediaSortKeys = "POSITION" | "ID" | "RELEVANCE";
export interface ProductOption {
  __typename: "ProductOption";
  id(variables: Record<string, never>): string;
  name(variables: Record<string, never>): string;
  values(variables: Record<string, never>): string[];
}
export interface ProductPriceRange {
  __typename: "ProductPriceRange";
  maxVariantPrice(variables: Record<string, never>): MoneyV2;
  minVariantPrice(variables: Record<string, never>): MoneyV2;
}
export type ProductRecommendationIntent = "RELATED" | "COMPLEMENTARY";
export type ProductSortKeys = "TITLE" | "PRODUCT_TYPE" | "VENDOR" | "UPDATED_AT" | "CREATED_AT" | "BEST_SELLING" | "PRICE" | "ID" | "RELEVANCE";
export interface ProductVariant {
  __typename: "ProductVariant";
  availableForSale(variables: Record<string, never>): boolean;
  barcode(variables: Record<string, never>): string | null;
  compareAtPrice(variables: Record<string, never>): MoneyV2 | null;
  compareAtPriceV2(variables: Record<string, never>): MoneyV2 | null;
  currentlyNotInStock(variables: Record<string, never>): boolean;
  id(variables: Record<string, never>): string;
  image(variables: Record<string, never>): Image | null;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  price(variables: Record<string, never>): MoneyV2;
  priceV2(variables: Record<string, never>): MoneyV2;
  product(variables: Record<string, never>): Product;
  quantityAvailable(variables: Record<string, never>): number | null;
  quantityPriceBreaks(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
  }): QuantityPriceBreakConnection;
  quantityRule(variables: Record<string, never>): QuantityRule;
  requiresShipping(variables: Record<string, never>): boolean;
  selectedOptions(variables: Record<string, never>): SelectedOption[];
  sellingPlanAllocations(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): SellingPlanAllocationConnection;
  sku(variables: Record<string, never>): string | null;
  storeAvailability(variables: {
    readonly near?: GeoCoordinateInput | null;
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): StoreAvailabilityConnection;
  taxable(variables: Record<string, never>): boolean;
  title(variables: Record<string, never>): string;
  unitPrice(variables: Record<string, never>): MoneyV2 | null;
  unitPriceMeasurement(variables: Record<string, never>): UnitPriceMeasurement | null;
  weight(variables: Record<string, never>): number | null;
  weightUnit(variables: Record<string, never>): WeightUnit;
}
export interface ProductVariantConnection {
  __typename: "ProductVariantConnection";
  edges(variables: Record<string, never>): ProductVariantEdge[];
  nodes(variables: Record<string, never>): ProductVariant[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface ProductVariantEdge {
  __typename: "ProductVariantEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): ProductVariant;
}
export type ProductVariantSortKeys = "TITLE" | "SKU" | "POSITION" | "ID" | "RELEVANCE";
export interface PurchasingCompany {
  __typename: "PurchasingCompany";
  company(variables: Record<string, never>): Company;
  contact(variables: Record<string, never>): CompanyContact | null;
  location(variables: Record<string, never>): CompanyLocation;
}
export interface QuantityPriceBreak {
  __typename: "QuantityPriceBreak";
  minimumQuantity(variables: Record<string, never>): number;
  price(variables: Record<string, never>): MoneyV2;
}
export interface QuantityPriceBreakConnection {
  __typename: "QuantityPriceBreakConnection";
  edges(variables: Record<string, never>): QuantityPriceBreakEdge[];
  nodes(variables: Record<string, never>): QuantityPriceBreak[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface QuantityPriceBreakEdge {
  __typename: "QuantityPriceBreakEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): QuantityPriceBreak;
}
export interface QuantityRule {
  __typename: "QuantityRule";
  increment(variables: Record<string, never>): number;
  maximum(variables: Record<string, never>): number | null;
  minimum(variables: Record<string, never>): number;
}
export interface QueryRoot {
  __typename: "QueryRoot";
  article(variables: {
    readonly id: string;
  }): Article | null;
  articles(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ArticleSortKeys | null;
    readonly query?: string | null;
  }): ArticleConnection;
  blog(variables: {
    readonly handle?: string | null;
    readonly id?: string | null;
  }): Blog | null;
  blogByHandle(variables: {
    readonly handle: string;
  }): Blog | null;
  blogs(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: BlogSortKeys | null;
    readonly query?: string | null;
  }): BlogConnection;
  cart(variables: {
    readonly id: string;
  }): Cart | null;
  cartCompletionAttempt(variables: {
    readonly attemptId: string;
  }): CartCompletionAttemptResult | null;
  collection(variables: {
    readonly id?: string | null;
    readonly handle?: string | null;
  }): Collection | null;
  collectionByHandle(variables: {
    readonly handle: string;
  }): Collection | null;
  collections(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: CollectionSortKeys | null;
    readonly query?: string | null;
  }): CollectionConnection;
  customer(variables: {
    readonly customerAccessToken: string;
  }): Customer | null;
  localization(variables: Record<string, never>): Localization;
  locations(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: LocationSortKeys | null;
    readonly near?: GeoCoordinateInput | null;
  }): LocationConnection;
  menu(variables: {
    readonly handle: string;
  }): Menu | null;
  metaobject(variables: {
    readonly id?: string | null;
    readonly handle?: MetaobjectHandleInput | null;
  }): Metaobject | null;
  metaobjects(variables: {
    readonly type: string;
    readonly sortKey?: string | null;
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): MetaobjectConnection;
  node(variables: {
    readonly id: string;
  }): Node | null;
  nodes(variables: {
    readonly ids: string[];
  }): (Node | null)[];
  page(variables: {
    readonly handle?: string | null;
    readonly id?: string | null;
  }): Page | null;
  pageByHandle(variables: {
    readonly handle: string;
  }): Page | null;
  pages(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: PageSortKeys | null;
    readonly query?: string | null;
  }): PageConnection;
  predictiveSearch(variables: {
    readonly limit?: number | null;
    readonly limitScope?: PredictiveSearchLimitScope | null;
    readonly query: string;
    readonly searchableFields?: SearchableField[] | null;
    readonly types?: PredictiveSearchType[] | null;
    readonly unavailableProducts?: SearchUnavailableProductsType | null;
  }): PredictiveSearchResult | null;
  product(variables: {
    readonly id?: string | null;
    readonly handle?: string | null;
  }): Product | null;
  productByHandle(variables: {
    readonly handle: string;
  }): Product | null;
  productRecommendations(variables: {
    readonly productId: string;
    readonly intent?: ProductRecommendationIntent | null;
  }): Product[] | null;
  productTags(variables: {
    readonly first: number;
  }): StringConnection;
  productTypes(variables: {
    readonly first: number;
  }): StringConnection;
  products(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: ProductSortKeys | null;
    readonly query?: string | null;
  }): ProductConnection;
  publicApiVersions(variables: Record<string, never>): ApiVersion[];
  search(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly sortKey?: SearchSortKeys | null;
    readonly query: string;
    readonly prefix?: SearchPrefixQueryType | null;
    readonly productFilters?: ProductFilter[] | null;
    readonly types?: SearchType[] | null;
    readonly unavailableProducts?: SearchUnavailableProductsType | null;
  }): SearchResultItemConnection;
  shop(variables: Record<string, never>): Shop;
  urlRedirects(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
    readonly query?: string | null;
  }): UrlRedirectConnection;
}
export interface SEO {
  __typename: "SEO";
  description(variables: Record<string, never>): string | null;
  title(variables: Record<string, never>): string | null;
}
export interface ScriptDiscountApplication {
  __typename: "ScriptDiscountApplication";
  allocationMethod(variables: Record<string, never>): DiscountApplicationAllocationMethod;
  targetSelection(variables: Record<string, never>): DiscountApplicationTargetSelection;
  targetType(variables: Record<string, never>): DiscountApplicationTargetType;
  title(variables: Record<string, never>): string;
  value(variables: Record<string, never>): PricingValue;
}
export type SearchPrefixQueryType = "LAST" | "NONE";
export interface SearchQuerySuggestion {
  __typename: "SearchQuerySuggestion";
  styledText(variables: Record<string, never>): string;
  text(variables: Record<string, never>): string;
  trackingParameters(variables: Record<string, never>): string | null;
}
export type SearchResultItem = Article | Page | Product;
export interface SearchResultItemConnection {
  __typename: "SearchResultItemConnection";
  edges(variables: Record<string, never>): SearchResultItemEdge[];
  nodes(variables: Record<string, never>): SearchResultItem[];
  pageInfo(variables: Record<string, never>): PageInfo;
  productFilters(variables: Record<string, never>): Filter[];
  totalCount(variables: Record<string, never>): number;
}
export interface SearchResultItemEdge {
  __typename: "SearchResultItemEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): SearchResultItem;
}
export type SearchSortKeys = "PRICE" | "RELEVANCE";
export type SearchType = "PRODUCT" | "PAGE" | "ARTICLE";
export type SearchUnavailableProductsType = "SHOW" | "HIDE" | "LAST";
export type SearchableField = "AUTHOR" | "BODY" | "PRODUCT_TYPE" | "TAG" | "TITLE" | "VARIANTS_BARCODE" | "VARIANTS_SKU" | "VARIANTS_TITLE" | "VENDOR";
export interface SelectedOption {
  __typename: "SelectedOption";
  name(variables: Record<string, never>): string;
  value(variables: Record<string, never>): string;
}
export interface SelectedOptionInput {
  name: string;
  value: string;
}
export interface SellingPlan {
  __typename: "SellingPlan";
  checkoutCharge(variables: Record<string, never>): SellingPlanCheckoutCharge;
  description(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  name(variables: Record<string, never>): string;
  options(variables: Record<string, never>): SellingPlanOption[];
  priceAdjustments(variables: Record<string, never>): SellingPlanPriceAdjustment[];
  recurringDeliveries(variables: Record<string, never>): boolean;
}
export interface SellingPlanAllocation {
  __typename: "SellingPlanAllocation";
  checkoutChargeAmount(variables: Record<string, never>): MoneyV2;
  priceAdjustments(variables: Record<string, never>): SellingPlanAllocationPriceAdjustment[];
  remainingBalanceChargeAmount(variables: Record<string, never>): MoneyV2;
  sellingPlan(variables: Record<string, never>): SellingPlan;
}
export interface SellingPlanAllocationConnection {
  __typename: "SellingPlanAllocationConnection";
  edges(variables: Record<string, never>): SellingPlanAllocationEdge[];
  nodes(variables: Record<string, never>): SellingPlanAllocation[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface SellingPlanAllocationEdge {
  __typename: "SellingPlanAllocationEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): SellingPlanAllocation;
}
export interface SellingPlanAllocationPriceAdjustment {
  __typename: "SellingPlanAllocationPriceAdjustment";
  compareAtPrice(variables: Record<string, never>): MoneyV2;
  perDeliveryPrice(variables: Record<string, never>): MoneyV2;
  price(variables: Record<string, never>): MoneyV2;
  unitPrice(variables: Record<string, never>): MoneyV2 | null;
}
export interface SellingPlanCheckoutCharge {
  __typename: "SellingPlanCheckoutCharge";
  type(variables: Record<string, never>): SellingPlanCheckoutChargeType;
  value(variables: Record<string, never>): SellingPlanCheckoutChargeValue;
}
export interface SellingPlanCheckoutChargePercentageValue {
  __typename: "SellingPlanCheckoutChargePercentageValue";
  percentage(variables: Record<string, never>): number;
}
export type SellingPlanCheckoutChargeType = "PERCENTAGE" | "PRICE";
export type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue;
export interface SellingPlanConnection {
  __typename: "SellingPlanConnection";
  edges(variables: Record<string, never>): SellingPlanEdge[];
  nodes(variables: Record<string, never>): SellingPlan[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface SellingPlanEdge {
  __typename: "SellingPlanEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): SellingPlan;
}
export interface SellingPlanFixedAmountPriceAdjustment {
  __typename: "SellingPlanFixedAmountPriceAdjustment";
  adjustmentAmount(variables: Record<string, never>): MoneyV2;
}
export interface SellingPlanFixedPriceAdjustment {
  __typename: "SellingPlanFixedPriceAdjustment";
  price(variables: Record<string, never>): MoneyV2;
}
export interface SellingPlanGroup {
  __typename: "SellingPlanGroup";
  appName(variables: Record<string, never>): string | null;
  name(variables: Record<string, never>): string;
  options(variables: Record<string, never>): SellingPlanGroupOption[];
  sellingPlans(variables: {
    readonly first?: number | null;
    readonly after?: string | null;
    readonly last?: number | null;
    readonly before?: string | null;
    readonly reverse?: boolean | null;
  }): SellingPlanConnection;
}
export interface SellingPlanGroupConnection {
  __typename: "SellingPlanGroupConnection";
  edges(variables: Record<string, never>): SellingPlanGroupEdge[];
  nodes(variables: Record<string, never>): SellingPlanGroup[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface SellingPlanGroupEdge {
  __typename: "SellingPlanGroupEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): SellingPlanGroup;
}
export interface SellingPlanGroupOption {
  __typename: "SellingPlanGroupOption";
  name(variables: Record<string, never>): string;
  values(variables: Record<string, never>): string[];
}
export interface SellingPlanOption {
  __typename: "SellingPlanOption";
  name(variables: Record<string, never>): string | null;
  value(variables: Record<string, never>): string | null;
}
export interface SellingPlanPercentagePriceAdjustment {
  __typename: "SellingPlanPercentagePriceAdjustment";
  adjustmentPercentage(variables: Record<string, never>): number;
}
export interface SellingPlanPriceAdjustment {
  __typename: "SellingPlanPriceAdjustment";
  adjustmentValue(variables: Record<string, never>): SellingPlanPriceAdjustmentValue;
  orderCount(variables: Record<string, never>): number | null;
}
export type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment;
export interface ShippingRate {
  __typename: "ShippingRate";
  handle(variables: Record<string, never>): string;
  price(variables: Record<string, never>): MoneyV2;
  priceV2(variables: Record<string, never>): MoneyV2;
  title(variables: Record<string, never>): string;
}
export interface Shop {
  __typename: "Shop";
  brand(variables: Record<string, never>): Brand | null;
  description(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  metafield(variables: {
    readonly namespace?: string | null;
    readonly key: string;
  }): Metafield | null;
  metafields(variables: {
    readonly identifiers: HasMetafieldsIdentifier[];
  }): (Metafield | null)[];
  moneyFormat(variables: Record<string, never>): string;
  name(variables: Record<string, never>): string;
  paymentSettings(variables: Record<string, never>): PaymentSettings;
  primaryDomain(variables: Record<string, never>): Domain;
  privacyPolicy(variables: Record<string, never>): ShopPolicy | null;
  refundPolicy(variables: Record<string, never>): ShopPolicy | null;
  shippingPolicy(variables: Record<string, never>): ShopPolicy | null;
  shipsToCountries(variables: Record<string, never>): CountryCode[];
  subscriptionPolicy(variables: Record<string, never>): ShopPolicyWithDefault | null;
  termsOfService(variables: Record<string, never>): ShopPolicy | null;
}
export interface ShopPayWalletContentInput {
  billingAddress: MailingAddressInput;
  sessionToken: string;
}
export interface ShopPolicy {
  __typename: "ShopPolicy";
  body(variables: Record<string, never>): string;
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string;
  title(variables: Record<string, never>): string;
  url(variables: Record<string, never>): URL;
}
export interface ShopPolicyWithDefault {
  __typename: "ShopPolicyWithDefault";
  body(variables: Record<string, never>): string;
  handle(variables: Record<string, never>): string;
  id(variables: Record<string, never>): string | null;
  title(variables: Record<string, never>): string;
  url(variables: Record<string, never>): URL;
}
export interface StoreAvailability {
  __typename: "StoreAvailability";
  available(variables: Record<string, never>): boolean;
  location(variables: Record<string, never>): Location;
  pickUpTime(variables: Record<string, never>): string;
  quantityAvailable(variables: Record<string, never>): number;
}
export interface StoreAvailabilityConnection {
  __typename: "StoreAvailabilityConnection";
  edges(variables: Record<string, never>): StoreAvailabilityEdge[];
  nodes(variables: Record<string, never>): StoreAvailability[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface StoreAvailabilityEdge {
  __typename: "StoreAvailabilityEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): StoreAvailability;
}
export interface StringConnection {
  __typename: "StringConnection";
  edges(variables: Record<string, never>): StringEdge[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface StringEdge {
  __typename: "StringEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): string;
}
export interface SubmissionError {
  __typename: "SubmissionError";
  code(variables: Record<string, never>): SubmissionErrorCode;
  message(variables: Record<string, never>): string | null;
}
export type SubmissionErrorCode = "ERROR" | "NO_DELIVERY_GROUP_SELECTED" | "BUYER_IDENTITY_EMAIL_IS_INVALID" | "BUYER_IDENTITY_EMAIL_REQUIRED" | "BUYER_IDENTITY_PHONE_IS_INVALID" | "DELIVERY_ADDRESS1_INVALID" | "DELIVERY_ADDRESS1_REQUIRED" | "DELIVERY_ADDRESS1_TOO_LONG" | "DELIVERY_ADDRESS2_INVALID" | "DELIVERY_ADDRESS2_REQUIRED" | "DELIVERY_ADDRESS2_TOO_LONG" | "DELIVERY_CITY_INVALID" | "DELIVERY_CITY_REQUIRED" | "DELIVERY_CITY_TOO_LONG" | "DELIVERY_COMPANY_INVALID" | "DELIVERY_COMPANY_REQUIRED" | "DELIVERY_COMPANY_TOO_LONG" | "DELIVERY_COUNTRY_REQUIRED" | "DELIVERY_FIRST_NAME_INVALID" | "DELIVERY_FIRST_NAME_REQUIRED" | "DELIVERY_FIRST_NAME_TOO_LONG" | "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY" | "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE" | "DELIVERY_LAST_NAME_INVALID" | "DELIVERY_LAST_NAME_REQUIRED" | "DELIVERY_LAST_NAME_TOO_LONG" | "DELIVERY_NO_DELIVERY_AVAILABLE" | "DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE" | "DELIVERY_OPTIONS_PHONE_NUMBER_INVALID" | "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED" | "DELIVERY_PHONE_NUMBER_INVALID" | "DELIVERY_PHONE_NUMBER_REQUIRED" | "DELIVERY_POSTAL_CODE_INVALID" | "DELIVERY_POSTAL_CODE_REQUIRED" | "DELIVERY_ZONE_NOT_FOUND" | "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY" | "DELIVERY_ADDRESS_REQUIRED" | "MERCHANDISE_NOT_APPLICABLE" | "MERCHANDISE_LINE_LIMIT_REACHED" | "MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE" | "MERCHANDISE_OUT_OF_STOCK" | "MERCHANDISE_PRODUCT_NOT_PUBLISHED" | "PAYMENTS_ADDRESS1_INVALID" | "PAYMENTS_ADDRESS1_REQUIRED" | "PAYMENTS_ADDRESS1_TOO_LONG" | "PAYMENTS_ADDRESS2_INVALID" | "PAYMENTS_ADDRESS2_REQUIRED" | "PAYMENTS_ADDRESS2_TOO_LONG" | "PAYMENTS_CITY_INVALID" | "PAYMENTS_CITY_REQUIRED" | "PAYMENTS_CITY_TOO_LONG" | "PAYMENTS_COMPANY_INVALID" | "PAYMENTS_COMPANY_REQUIRED" | "PAYMENTS_COMPANY_TOO_LONG" | "PAYMENTS_COUNTRY_REQUIRED" | "PAYMENTS_CREDIT_CARD_BASE_EXPIRED" | "PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED" | "PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT" | "PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED" | "PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK" | "PAYMENTS_CREDIT_CARD_GENERIC" | "PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK" | "PAYMENTS_CREDIT_CARD_MONTH_INCLUSION" | "PAYMENTS_CREDIT_CARD_NAME_INVALID" | "PAYMENTS_CREDIT_CARD_NUMBER_INVALID" | "PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT" | "PAYMENTS_CREDIT_CARD_SESSION_ID" | "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK" | "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE" | "PAYMENTS_CREDIT_CARD_YEAR_EXPIRED" | "PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR" | "PAYMENTS_FIRST_NAME_INVALID" | "PAYMENTS_FIRST_NAME_REQUIRED" | "PAYMENTS_FIRST_NAME_TOO_LONG" | "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY" | "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE" | "PAYMENTS_LAST_NAME_INVALID" | "PAYMENTS_LAST_NAME_REQUIRED" | "PAYMENTS_LAST_NAME_TOO_LONG" | "PAYMENTS_METHOD_UNAVAILABLE" | "PAYMENTS_METHOD_REQUIRED" | "PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT" | "PAYMENTS_PHONE_NUMBER_INVALID" | "PAYMENTS_PHONE_NUMBER_REQUIRED" | "PAYMENTS_POSTAL_CODE_INVALID" | "PAYMENTS_POSTAL_CODE_REQUIRED" | "PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED" | "PAYMENTS_WALLET_CONTENT_MISSING" | "PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND" | "PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY" | "TAXES_MUST_BE_DEFINED" | "TAXES_LINE_ID_NOT_FOUND" | "TAXES_DELIVERY_GROUP_ID_NOT_FOUND";
export interface SubmitAlreadyAccepted {
  __typename: "SubmitAlreadyAccepted";
  attemptId(variables: Record<string, never>): string;
}
export interface SubmitFailed {
  __typename: "SubmitFailed";
  checkoutUrl(variables: Record<string, never>): URL | null;
  errors(variables: Record<string, never>): SubmissionError[];
}
export interface SubmitSuccess {
  __typename: "SubmitSuccess";
  attemptId(variables: Record<string, never>): string;
}
export interface SubmitThrottled {
  __typename: "SubmitThrottled";
  pollAfter(variables: Record<string, never>): DateTime;
}
export interface Swatch {
  __typename: "Swatch";
  color(variables: Record<string, never>): Color | null;
  image(variables: Record<string, never>): MediaImage | null;
}
export interface TokenizedPaymentInputV3 {
  paymentAmount: MoneyInput;
  idempotencyKey: string;
  billingAddress: MailingAddressInput;
  paymentData: string;
  test?: boolean | null;
  identifier?: string | null;
  type: PaymentTokenType;
}
export interface Trackable {
  __possibleTypes: Article | Collection | Page | Product | SearchQuerySuggestion;
  trackingParameters(variables: Record<string, never>): string | null;
}
export interface Transaction {
  __typename: "Transaction";
  amount(variables: Record<string, never>): MoneyV2;
  amountV2(variables: Record<string, never>): MoneyV2;
  kind(variables: Record<string, never>): TransactionKind;
  status(variables: Record<string, never>): TransactionStatus;
  statusV2(variables: Record<string, never>): TransactionStatus | null;
  test(variables: Record<string, never>): boolean;
}
export type TransactionKind = "SALE" | "CAPTURE" | "AUTHORIZATION" | "EMV_AUTHORIZATION" | "CHANGE";
export type TransactionStatus = "PENDING" | "SUCCESS" | "FAILURE" | "ERROR";
export type URL = string;
export interface UnitPriceMeasurement {
  __typename: "UnitPriceMeasurement";
  measuredType(variables: Record<string, never>): UnitPriceMeasurementMeasuredType | null;
  quantityUnit(variables: Record<string, never>): UnitPriceMeasurementMeasuredUnit | null;
  quantityValue(variables: Record<string, never>): number;
  referenceUnit(variables: Record<string, never>): UnitPriceMeasurementMeasuredUnit | null;
  referenceValue(variables: Record<string, never>): number;
}
export type UnitPriceMeasurementMeasuredType = "VOLUME" | "WEIGHT" | "LENGTH" | "AREA";
export type UnitPriceMeasurementMeasuredUnit = "ML" | "CL" | "L" | "M3" | "MG" | "G" | "KG" | "MM" | "CM" | "M" | "M2";
export type UnitSystem = "IMPERIAL_SYSTEM" | "METRIC_SYSTEM";
export type UnsignedInt64 = string;
export interface UrlRedirect {
  __typename: "UrlRedirect";
  id(variables: Record<string, never>): string;
  path(variables: Record<string, never>): string;
  target(variables: Record<string, never>): string;
}
export interface UrlRedirectConnection {
  __typename: "UrlRedirectConnection";
  edges(variables: Record<string, never>): UrlRedirectEdge[];
  nodes(variables: Record<string, never>): UrlRedirect[];
  pageInfo(variables: Record<string, never>): PageInfo;
}
export interface UrlRedirectEdge {
  __typename: "UrlRedirectEdge";
  cursor(variables: Record<string, never>): string;
  node(variables: Record<string, never>): UrlRedirect;
}
export interface UserError {
  __typename: "UserError";
  field(variables: Record<string, never>): string[] | null;
  message(variables: Record<string, never>): string;
}
export interface VariantOptionFilter {
  name: string;
  value: string;
}
export interface Video {
  __typename: "Video";
  alt(variables: Record<string, never>): string | null;
  id(variables: Record<string, never>): string;
  mediaContentType(variables: Record<string, never>): MediaContentType;
  presentation(variables: Record<string, never>): MediaPresentation | null;
  previewImage(variables: Record<string, never>): Image | null;
  sources(variables: Record<string, never>): VideoSource[];
}
export interface VideoSource {
  __typename: "VideoSource";
  format(variables: Record<string, never>): string;
  height(variables: Record<string, never>): number;
  mimeType(variables: Record<string, never>): string;
  url(variables: Record<string, never>): string;
  width(variables: Record<string, never>): number;
}
export type WeightUnit = "KILOGRAMS" | "GRAMS" | "POUNDS" | "OUNCES";
export interface Schema {
  ApiVersion: ApiVersion;
  ApplePayWalletContentInput: ApplePayWalletContentInput;
  ApplePayWalletHeaderInput: ApplePayWalletHeaderInput;
  AppliedGiftCard: AppliedGiftCard;
  Article: Article;
  ArticleAuthor: ArticleAuthor;
  ArticleConnection: ArticleConnection;
  ArticleEdge: ArticleEdge;
  ArticleSortKeys: ArticleSortKeys;
  Attribute: Attribute;
  AttributeInput: AttributeInput;
  AutomaticDiscountApplication: AutomaticDiscountApplication;
  AvailableShippingRates: AvailableShippingRates;
  BaseCartLine: BaseCartLine;
  BaseCartLineConnection: BaseCartLineConnection;
  BaseCartLineEdge: BaseCartLineEdge;
  Blog: Blog;
  BlogConnection: BlogConnection;
  BlogEdge: BlogEdge;
  BlogSortKeys: BlogSortKeys;
  Brand: Brand;
  BrandColorGroup: BrandColorGroup;
  BrandColors: BrandColors;
  BuyerInput: BuyerInput;
  CardBrand: CardBrand;
  Cart: Cart;
  CartAttributesUpdatePayload: CartAttributesUpdatePayload;
  CartAutomaticDiscountAllocation: CartAutomaticDiscountAllocation;
  CartBuyerIdentity: CartBuyerIdentity;
  CartBuyerIdentityInput: CartBuyerIdentityInput;
  CartBuyerIdentityUpdatePayload: CartBuyerIdentityUpdatePayload;
  CartCardSource: CartCardSource;
  CartCodeDiscountAllocation: CartCodeDiscountAllocation;
  CartCompletionAction: CartCompletionAction;
  CartCompletionActionRequired: CartCompletionActionRequired;
  CartCompletionAttemptResult: CartCompletionAttemptResult;
  CartCompletionFailed: CartCompletionFailed;
  CartCompletionProcessing: CartCompletionProcessing;
  CartCompletionSuccess: CartCompletionSuccess;
  CartCost: CartCost;
  CartCreatePayload: CartCreatePayload;
  CartCustomDiscountAllocation: CartCustomDiscountAllocation;
  CartDeliveryCoordinatesPreference: CartDeliveryCoordinatesPreference;
  CartDeliveryCoordinatesPreferenceInput: CartDeliveryCoordinatesPreferenceInput;
  CartDeliveryGroup: CartDeliveryGroup;
  CartDeliveryGroupConnection: CartDeliveryGroupConnection;
  CartDeliveryGroupEdge: CartDeliveryGroupEdge;
  CartDeliveryGroupType: CartDeliveryGroupType;
  CartDeliveryOption: CartDeliveryOption;
  CartDeliveryPreference: CartDeliveryPreference;
  CartDeliveryPreferenceInput: CartDeliveryPreferenceInput;
  CartDirectPaymentMethodInput: CartDirectPaymentMethodInput;
  CartDiscountAllocation: CartDiscountAllocation;
  CartDiscountCode: CartDiscountCode;
  CartDiscountCodesUpdatePayload: CartDiscountCodesUpdatePayload;
  CartErrorCode: CartErrorCode;
  CartEstimatedCost: CartEstimatedCost;
  CartFreePaymentMethodInput: CartFreePaymentMethodInput;
  CartInput: CartInput;
  CartInputMetafieldInput: CartInputMetafieldInput;
  CartLine: CartLine;
  CartLineCost: CartLineCost;
  CartLineEstimatedCost: CartLineEstimatedCost;
  CartLineInput: CartLineInput;
  CartLineUpdateInput: CartLineUpdateInput;
  CartLinesAddPayload: CartLinesAddPayload;
  CartLinesRemovePayload: CartLinesRemovePayload;
  CartLinesUpdatePayload: CartLinesUpdatePayload;
  CartMetafieldDeleteInput: CartMetafieldDeleteInput;
  CartMetafieldDeletePayload: CartMetafieldDeletePayload;
  CartMetafieldsSetInput: CartMetafieldsSetInput;
  CartMetafieldsSetPayload: CartMetafieldsSetPayload;
  CartNoteUpdatePayload: CartNoteUpdatePayload;
  CartPaymentInput: CartPaymentInput;
  CartPaymentUpdatePayload: CartPaymentUpdatePayload;
  CartPreferences: CartPreferences;
  CartPreferencesInput: CartPreferencesInput;
  CartSelectedDeliveryOptionInput: CartSelectedDeliveryOptionInput;
  CartSelectedDeliveryOptionsUpdatePayload: CartSelectedDeliveryOptionsUpdatePayload;
  CartSubmitForCompletionPayload: CartSubmitForCompletionPayload;
  CartSubmitForCompletionResult: CartSubmitForCompletionResult;
  CartUserError: CartUserError;
  CartWalletPaymentMethodInput: CartWalletPaymentMethodInput;
  Checkout: Checkout;
  CheckoutAttributesUpdateV2Input: CheckoutAttributesUpdateV2Input;
  CheckoutAttributesUpdateV2Payload: CheckoutAttributesUpdateV2Payload;
  CheckoutBuyerIdentity: CheckoutBuyerIdentity;
  CheckoutBuyerIdentityInput: CheckoutBuyerIdentityInput;
  CheckoutCompleteFreePayload: CheckoutCompleteFreePayload;
  CheckoutCompleteWithCreditCardV2Payload: CheckoutCompleteWithCreditCardV2Payload;
  CheckoutCompleteWithTokenizedPaymentV3Payload: CheckoutCompleteWithTokenizedPaymentV3Payload;
  CheckoutCreateInput: CheckoutCreateInput;
  CheckoutCreatePayload: CheckoutCreatePayload;
  CheckoutCustomerAssociateV2Payload: CheckoutCustomerAssociateV2Payload;
  CheckoutCustomerDisassociateV2Payload: CheckoutCustomerDisassociateV2Payload;
  CheckoutDiscountCodeApplyV2Payload: CheckoutDiscountCodeApplyV2Payload;
  CheckoutDiscountCodeRemovePayload: CheckoutDiscountCodeRemovePayload;
  CheckoutEmailUpdateV2Payload: CheckoutEmailUpdateV2Payload;
  CheckoutErrorCode: CheckoutErrorCode;
  CheckoutGiftCardRemoveV2Payload: CheckoutGiftCardRemoveV2Payload;
  CheckoutGiftCardsAppendPayload: CheckoutGiftCardsAppendPayload;
  CheckoutLineItem: CheckoutLineItem;
  CheckoutLineItemConnection: CheckoutLineItemConnection;
  CheckoutLineItemEdge: CheckoutLineItemEdge;
  CheckoutLineItemInput: CheckoutLineItemInput;
  CheckoutLineItemUpdateInput: CheckoutLineItemUpdateInput;
  CheckoutLineItemsAddPayload: CheckoutLineItemsAddPayload;
  CheckoutLineItemsRemovePayload: CheckoutLineItemsRemovePayload;
  CheckoutLineItemsReplacePayload: CheckoutLineItemsReplacePayload;
  CheckoutLineItemsUpdatePayload: CheckoutLineItemsUpdatePayload;
  CheckoutShippingAddressUpdateV2Payload: CheckoutShippingAddressUpdateV2Payload;
  CheckoutShippingLineUpdatePayload: CheckoutShippingLineUpdatePayload;
  CheckoutUserError: CheckoutUserError;
  Collection: Collection;
  CollectionConnection: CollectionConnection;
  CollectionEdge: CollectionEdge;
  CollectionSortKeys: CollectionSortKeys;
  Color: Color;
  Comment: Comment;
  CommentAuthor: CommentAuthor;
  CommentConnection: CommentConnection;
  CommentEdge: CommentEdge;
  Company: Company;
  CompanyContact: CompanyContact;
  CompanyLocation: CompanyLocation;
  CompletePaymentChallenge: CompletePaymentChallenge;
  CompletionError: CompletionError;
  CompletionErrorCode: CompletionErrorCode;
  ComponentizableCartLine: ComponentizableCartLine;
  Country: Country;
  CountryCode: CountryCode;
  CreditCard: CreditCard;
  CreditCardPaymentInputV2: CreditCardPaymentInputV2;
  CropRegion: CropRegion;
  Currency: Currency;
  CurrencyCode: CurrencyCode;
  Customer: Customer;
  CustomerAccessToken: CustomerAccessToken;
  CustomerAccessTokenCreateInput: CustomerAccessTokenCreateInput;
  CustomerAccessTokenCreatePayload: CustomerAccessTokenCreatePayload;
  CustomerAccessTokenCreateWithMultipassPayload: CustomerAccessTokenCreateWithMultipassPayload;
  CustomerAccessTokenDeletePayload: CustomerAccessTokenDeletePayload;
  CustomerAccessTokenRenewPayload: CustomerAccessTokenRenewPayload;
  CustomerActivateByUrlPayload: CustomerActivateByUrlPayload;
  CustomerActivateInput: CustomerActivateInput;
  CustomerActivatePayload: CustomerActivatePayload;
  CustomerAddressCreatePayload: CustomerAddressCreatePayload;
  CustomerAddressDeletePayload: CustomerAddressDeletePayload;
  CustomerAddressUpdatePayload: CustomerAddressUpdatePayload;
  CustomerCreateInput: CustomerCreateInput;
  CustomerCreatePayload: CustomerCreatePayload;
  CustomerDefaultAddressUpdatePayload: CustomerDefaultAddressUpdatePayload;
  CustomerErrorCode: CustomerErrorCode;
  CustomerRecoverPayload: CustomerRecoverPayload;
  CustomerResetByUrlPayload: CustomerResetByUrlPayload;
  CustomerResetInput: CustomerResetInput;
  CustomerResetPayload: CustomerResetPayload;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerUpdatePayload: CustomerUpdatePayload;
  CustomerUserError: CustomerUserError;
  DateTime: DateTime;
  Decimal: Decimal;
  DeliveryAddress: DeliveryAddress;
  DeliveryAddressInput: DeliveryAddressInput;
  DeliveryAddressValidationStrategy: DeliveryAddressValidationStrategy;
  DeliveryMethodType: DeliveryMethodType;
  DigitalWallet: DigitalWallet;
  DiscountAllocation: DiscountAllocation;
  DiscountApplication: DiscountApplication;
  DiscountApplicationAllocationMethod: DiscountApplicationAllocationMethod;
  DiscountApplicationConnection: DiscountApplicationConnection;
  DiscountApplicationEdge: DiscountApplicationEdge;
  DiscountApplicationTargetSelection: DiscountApplicationTargetSelection;
  DiscountApplicationTargetType: DiscountApplicationTargetType;
  DiscountCodeApplication: DiscountCodeApplication;
  DisplayableError: DisplayableError;
  Domain: Domain;
  ExternalVideo: ExternalVideo;
  Filter: Filter;
  FilterPresentation: FilterPresentation;
  FilterType: FilterType;
  FilterValue: FilterValue;
  Fulfillment: Fulfillment;
  FulfillmentLineItem: FulfillmentLineItem;
  FulfillmentLineItemConnection: FulfillmentLineItemConnection;
  FulfillmentLineItemEdge: FulfillmentLineItemEdge;
  FulfillmentTrackingInfo: FulfillmentTrackingInfo;
  GenericFile: GenericFile;
  GeoCoordinateInput: GeoCoordinateInput;
  HTML: HTML;
  HasMetafields: HasMetafields;
  HasMetafieldsIdentifier: HasMetafieldsIdentifier;
  Image: Image;
  ImageConnection: ImageConnection;
  ImageContentType: ImageContentType;
  ImageEdge: ImageEdge;
  ImageTransformInput: ImageTransformInput;
  InContextAnnotation: InContextAnnotation;
  InContextAnnotationType: InContextAnnotationType;
  JSON: JSON;
  Language: Language;
  LanguageCode: LanguageCode;
  Localization: Localization;
  Location: Location;
  LocationAddress: LocationAddress;
  LocationConnection: LocationConnection;
  LocationEdge: LocationEdge;
  LocationSortKeys: LocationSortKeys;
  MailingAddress: MailingAddress;
  MailingAddressConnection: MailingAddressConnection;
  MailingAddressEdge: MailingAddressEdge;
  MailingAddressInput: MailingAddressInput;
  ManualDiscountApplication: ManualDiscountApplication;
  Market: Market;
  Media: Media;
  MediaConnection: MediaConnection;
  MediaContentType: MediaContentType;
  MediaEdge: MediaEdge;
  MediaHost: MediaHost;
  MediaImage: MediaImage;
  MediaPresentation: MediaPresentation;
  MediaPresentationFormat: MediaPresentationFormat;
  Menu: Menu;
  MenuItem: MenuItem;
  MenuItemResource: MenuItemResource;
  MenuItemType: MenuItemType;
  Merchandise: Merchandise;
  Metafield: Metafield;
  MetafieldDeleteErrorCode: MetafieldDeleteErrorCode;
  MetafieldDeleteUserError: MetafieldDeleteUserError;
  MetafieldFilter: MetafieldFilter;
  MetafieldParentResource: MetafieldParentResource;
  MetafieldReference: MetafieldReference;
  MetafieldReferenceConnection: MetafieldReferenceConnection;
  MetafieldReferenceEdge: MetafieldReferenceEdge;
  MetafieldsSetUserError: MetafieldsSetUserError;
  MetafieldsSetUserErrorCode: MetafieldsSetUserErrorCode;
  Metaobject: Metaobject;
  MetaobjectConnection: MetaobjectConnection;
  MetaobjectEdge: MetaobjectEdge;
  MetaobjectField: MetaobjectField;
  MetaobjectHandleInput: MetaobjectHandleInput;
  MetaobjectSEO: MetaobjectSEO;
  Model3d: Model3d;
  Model3dSource: Model3dSource;
  MoneyInput: MoneyInput;
  MoneyV2: MoneyV2;
  Mutation: Mutation;
  Node: Node;
  OnlineStorePublishable: OnlineStorePublishable;
  Order: Order;
  OrderCancelReason: OrderCancelReason;
  OrderConnection: OrderConnection;
  OrderEdge: OrderEdge;
  OrderFinancialStatus: OrderFinancialStatus;
  OrderFulfillmentStatus: OrderFulfillmentStatus;
  OrderLineItem: OrderLineItem;
  OrderLineItemConnection: OrderLineItemConnection;
  OrderLineItemEdge: OrderLineItemEdge;
  OrderSortKeys: OrderSortKeys;
  Page: Page;
  PageConnection: PageConnection;
  PageEdge: PageEdge;
  PageInfo: PageInfo;
  PageSortKeys: PageSortKeys;
  Payment: Payment;
  PaymentSettings: PaymentSettings;
  PaymentTokenType: PaymentTokenType;
  PredictiveSearchLimitScope: PredictiveSearchLimitScope;
  PredictiveSearchResult: PredictiveSearchResult;
  PredictiveSearchType: PredictiveSearchType;
  PreferenceDeliveryMethodType: PreferenceDeliveryMethodType;
  PriceRangeFilter: PriceRangeFilter;
  PricingPercentageValue: PricingPercentageValue;
  PricingValue: PricingValue;
  Product: Product;
  ProductCollectionSortKeys: ProductCollectionSortKeys;
  ProductConnection: ProductConnection;
  ProductEdge: ProductEdge;
  ProductFilter: ProductFilter;
  ProductImageSortKeys: ProductImageSortKeys;
  ProductMediaSortKeys: ProductMediaSortKeys;
  ProductOption: ProductOption;
  ProductPriceRange: ProductPriceRange;
  ProductRecommendationIntent: ProductRecommendationIntent;
  ProductSortKeys: ProductSortKeys;
  ProductVariant: ProductVariant;
  ProductVariantConnection: ProductVariantConnection;
  ProductVariantEdge: ProductVariantEdge;
  ProductVariantSortKeys: ProductVariantSortKeys;
  PurchasingCompany: PurchasingCompany;
  QuantityPriceBreak: QuantityPriceBreak;
  QuantityPriceBreakConnection: QuantityPriceBreakConnection;
  QuantityPriceBreakEdge: QuantityPriceBreakEdge;
  QuantityRule: QuantityRule;
  QueryRoot: QueryRoot;
  SEO: SEO;
  ScriptDiscountApplication: ScriptDiscountApplication;
  SearchPrefixQueryType: SearchPrefixQueryType;
  SearchQuerySuggestion: SearchQuerySuggestion;
  SearchResultItem: SearchResultItem;
  SearchResultItemConnection: SearchResultItemConnection;
  SearchResultItemEdge: SearchResultItemEdge;
  SearchSortKeys: SearchSortKeys;
  SearchType: SearchType;
  SearchUnavailableProductsType: SearchUnavailableProductsType;
  SearchableField: SearchableField;
  SelectedOption: SelectedOption;
  SelectedOptionInput: SelectedOptionInput;
  SellingPlan: SellingPlan;
  SellingPlanAllocation: SellingPlanAllocation;
  SellingPlanAllocationConnection: SellingPlanAllocationConnection;
  SellingPlanAllocationEdge: SellingPlanAllocationEdge;
  SellingPlanAllocationPriceAdjustment: SellingPlanAllocationPriceAdjustment;
  SellingPlanCheckoutCharge: SellingPlanCheckoutCharge;
  SellingPlanCheckoutChargePercentageValue: SellingPlanCheckoutChargePercentageValue;
  SellingPlanCheckoutChargeType: SellingPlanCheckoutChargeType;
  SellingPlanCheckoutChargeValue: SellingPlanCheckoutChargeValue;
  SellingPlanConnection: SellingPlanConnection;
  SellingPlanEdge: SellingPlanEdge;
  SellingPlanFixedAmountPriceAdjustment: SellingPlanFixedAmountPriceAdjustment;
  SellingPlanFixedPriceAdjustment: SellingPlanFixedPriceAdjustment;
  SellingPlanGroup: SellingPlanGroup;
  SellingPlanGroupConnection: SellingPlanGroupConnection;
  SellingPlanGroupEdge: SellingPlanGroupEdge;
  SellingPlanGroupOption: SellingPlanGroupOption;
  SellingPlanOption: SellingPlanOption;
  SellingPlanPercentagePriceAdjustment: SellingPlanPercentagePriceAdjustment;
  SellingPlanPriceAdjustment: SellingPlanPriceAdjustment;
  SellingPlanPriceAdjustmentValue: SellingPlanPriceAdjustmentValue;
  ShippingRate: ShippingRate;
  Shop: Shop;
  ShopPayWalletContentInput: ShopPayWalletContentInput;
  ShopPolicy: ShopPolicy;
  ShopPolicyWithDefault: ShopPolicyWithDefault;
  StoreAvailability: StoreAvailability;
  StoreAvailabilityConnection: StoreAvailabilityConnection;
  StoreAvailabilityEdge: StoreAvailabilityEdge;
  StringConnection: StringConnection;
  StringEdge: StringEdge;
  SubmissionError: SubmissionError;
  SubmissionErrorCode: SubmissionErrorCode;
  SubmitAlreadyAccepted: SubmitAlreadyAccepted;
  SubmitFailed: SubmitFailed;
  SubmitSuccess: SubmitSuccess;
  SubmitThrottled: SubmitThrottled;
  Swatch: Swatch;
  TokenizedPaymentInputV3: TokenizedPaymentInputV3;
  Trackable: Trackable;
  Transaction: Transaction;
  TransactionKind: TransactionKind;
  TransactionStatus: TransactionStatus;
  URL: URL;
  UnitPriceMeasurement: UnitPriceMeasurement;
  UnitPriceMeasurementMeasuredType: UnitPriceMeasurementMeasuredType;
  UnitPriceMeasurementMeasuredUnit: UnitPriceMeasurementMeasuredUnit;
  UnitSystem: UnitSystem;
  UnsignedInt64: UnsignedInt64;
  UrlRedirect: UrlRedirect;
  UrlRedirectConnection: UrlRedirectConnection;
  UrlRedirectEdge: UrlRedirectEdge;
  UserError: UserError;
  VariantOptionFilter: VariantOptionFilter;
  Video: Video;
  VideoSource: VideoSource;
  WeightUnit: WeightUnit;
}
const schema = "schema {\n  query: QueryRoot\n  mutation: Mutation\n}\n\n\"\"\"Marks an element of a GraphQL schema as having restricted access.\"\"\"\ndirective @accessRestricted(\n  \"\"\"Explains the reason around this restriction\"\"\"\n  reason: String = null\n) on FIELD_DEFINITION | OBJECT\n\n\"\"\"\nContextualizes data based on the additional information provided by the directive. For example, you can use the `@inContext(country: CA)` directive to [query a product's price](https://shopify.dev/custom-storefronts/internationalization/international-pricing) in a storefront within the context of Canada.\n\"\"\"\ndirective @inContext(\n  \"\"\"The country code for context. For example, `CA`.\"\"\"\n  country: CountryCode\n\n  \"\"\"The language code for context. For example, `EN`.\"\"\"\n  language: LanguageCode\n\n  \"\"\"The identifier of the customer's preferred location.\"\"\"\n  preferredLocationId: ID\n\n  \"\"\"The buyer's identity.\"\"\"\n  buyer: BuyerInput\n) on QUERY | MUTATION\n\n\"A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).\\nVersions are commonly referred to by their handle (for example, `2021-10`).\\n\"\ntype ApiVersion {\n  \"\"\"The human-readable name of the version.\"\"\"\n  displayName: String!\n\n  \"\"\"\n  The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.\n  \"\"\"\n  handle: String!\n\n  \"\"\"\n  Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning).\n  \"\"\"\n  supported: Boolean!\n}\n\n\"The input fields for submitting Apple Pay payment method information for checkout.\\n\"\ninput ApplePayWalletContentInput {\n  \"\"\"The customer's billing address.\"\"\"\n  billingAddress: MailingAddressInput!\n\n  \"\"\"The data for the Apple Pay wallet.\"\"\"\n  data: String!\n\n  \"\"\"The header data for the Apple Pay wallet.\"\"\"\n  header: ApplePayWalletHeaderInput!\n\n  \"\"\"The last digits of the card used to create the payment.\"\"\"\n  lastDigits: String\n\n  \"\"\"The signature for the Apple Pay wallet.\"\"\"\n  signature: String!\n\n  \"\"\"The version for the Apple Pay wallet.\"\"\"\n  version: String!\n}\n\n\"The input fields for submitting wallet payment method information for checkout.\\n\"\ninput ApplePayWalletHeaderInput {\n  \"\"\"The application data for the Apple Pay wallet.\"\"\"\n  applicationData: String\n\n  \"\"\"The ephemeral public key for the Apple Pay wallet.\"\"\"\n  ephemeralPublicKey: String!\n\n  \"\"\"The public key hash for the Apple Pay wallet.\"\"\"\n  publicKeyHash: String!\n\n  \"\"\"The transaction ID for the Apple Pay wallet.\"\"\"\n  transactionId: String!\n}\n\n\"\"\"Details about the gift card used on the checkout.\"\"\"\ntype AppliedGiftCard implements Node {\n  \"\"\"The amount that was taken from the gift card by applying it.\"\"\"\n  amountUsed: MoneyV2!\n\n  \"\"\"The amount that was taken from the gift card by applying it.\"\"\"\n  amountUsedV2: MoneyV2! @deprecated(reason: \"Use `amountUsed` instead.\")\n\n  \"\"\"The amount left on the gift card.\"\"\"\n  balance: MoneyV2!\n\n  \"\"\"The amount left on the gift card.\"\"\"\n  balanceV2: MoneyV2! @deprecated(reason: \"Use `balance` instead.\")\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The last characters of the gift card.\"\"\"\n  lastCharacters: String!\n\n  \"\"\"The amount that was applied to the checkout in its currency.\"\"\"\n  presentmentAmountUsed: MoneyV2!\n}\n\n\"\"\"An article in an online store blog.\"\"\"\ntype Article implements HasMetafields & Node & OnlineStorePublishable & Trackable {\n  \"\"\"The article's author.\"\"\"\n  author: ArticleAuthor! @deprecated(reason: \"Use `authorV2` instead.\")\n\n  \"\"\"The article's author.\"\"\"\n  authorV2: ArticleAuthor\n\n  \"\"\"The blog that the article belongs to.\"\"\"\n  blog: Blog!\n\n  \"\"\"List of comments posted on the article.\"\"\"\n  comments(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): CommentConnection!\n\n  \"\"\"Stripped content of the article, single line with HTML tags removed.\"\"\"\n  content(\n    \"\"\"Truncates string after the given length.\"\"\"\n    truncateAt: Int\n  ): String!\n\n  \"\"\"The content of the article, complete with HTML formatting.\"\"\"\n  contentHtml: HTML!\n\n  \"\"\"Stripped excerpt of the article, single line with HTML tags removed.\"\"\"\n  excerpt(\n    \"\"\"Truncates string after the given length.\"\"\"\n    truncateAt: Int\n  ): String\n\n  \"\"\"The excerpt of the article, complete with HTML formatting.\"\"\"\n  excerptHtml: HTML\n\n  \"\"\"\n  A human-friendly unique string for the Article automatically generated from its title.\n  \"\"\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The image associated with the article.\"\"\"\n  image: Image\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.\n  \"\"\"\n  onlineStoreUrl: URL\n\n  \"\"\"The date and time when the article was published.\"\"\"\n  publishedAt: DateTime!\n\n  \"\"\"The article\u2019s SEO information.\"\"\"\n  seo: SEO\n\n  \"A categorization that a article can be tagged with.\\n\"\n  tags: [String!]!\n\n  \"\"\"The article\u2019s name.\"\"\"\n  title: String!\n\n  \"\"\"\n  A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.\n  \"\"\"\n  trackingParameters: String\n}\n\n\"\"\"The author of an article.\"\"\"\ntype ArticleAuthor {\n  \"\"\"The author's bio.\"\"\"\n  bio: String\n\n  \"\"\"The author\u2019s email.\"\"\"\n  email: String!\n\n  \"\"\"The author's first name.\"\"\"\n  firstName: String!\n\n  \"\"\"The author's last name.\"\"\"\n  lastName: String!\n\n  \"\"\"The author's full name.\"\"\"\n  name: String!\n}\n\n\"An auto-generated type for paginating through multiple Articles.\\n\"\ntype ArticleConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [ArticleEdge!]!\n\n  \"\"\"A list of the nodes contained in ArticleEdge.\"\"\"\n  nodes: [Article!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Article and a cursor during pagination.\\n\"\ntype ArticleEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of ArticleEdge.\"\"\"\n  node: Article!\n}\n\n\"\"\"The set of valid sort keys for the Article query.\"\"\"\nenum ArticleSortKeys {\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `blog_title` value.\"\"\"\n  BLOG_TITLE\n\n  \"\"\"Sort by the `author` value.\"\"\"\n  AUTHOR\n\n  \"\"\"Sort by the `updated_at` value.\"\"\"\n  UPDATED_AT\n\n  \"\"\"Sort by the `published_at` value.\"\"\"\n  PUBLISHED_AT\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"\"\"Represents a generic custom attribute.\"\"\"\ntype Attribute {\n  \"\"\"Key or name of the attribute.\"\"\"\n  key: String!\n\n  \"\"\"Value of the attribute.\"\"\"\n  value: String\n}\n\n\"\"\"The input fields for an attribute.\"\"\"\ninput AttributeInput {\n  \"\"\"Key or name of the attribute.\"\"\"\n  key: String!\n\n  \"\"\"Value of the attribute.\"\"\"\n  value: String!\n}\n\n\"Automatic discount applications capture the intentions of a discount that was automatically applied.\\n\"\ntype AutomaticDiscountApplication implements DiscountApplication {\n  \"\"\"\n  The method by which the discount's value is allocated to its entitled items.\n  \"\"\"\n  allocationMethod: DiscountApplicationAllocationMethod!\n\n  \"\"\"Which lines of targetType that the discount is allocated over.\"\"\"\n  targetSelection: DiscountApplicationTargetSelection!\n\n  \"\"\"The type of line that the discount is applicable towards.\"\"\"\n  targetType: DiscountApplicationTargetType!\n\n  \"\"\"The title of the application.\"\"\"\n  title: String!\n\n  \"\"\"The value of the discount application.\"\"\"\n  value: PricingValue!\n}\n\n\"\"\"A collection of available shipping rates for a checkout.\"\"\"\ntype AvailableShippingRates {\n  \"Whether or not the shipping rates are ready.\\nThe `shippingRates` field is `null` when this value is `false`.\\nThis field should be polled until its value becomes `true`.\\n\"\n  ready: Boolean!\n\n  \"\"\"The fetched shipping rates. `null` until the `ready` field is `true`.\"\"\"\n  shippingRates: [ShippingRate!]\n}\n\n\"\"\"Represents a cart line common fields.\"\"\"\ninterface BaseCartLine implements Node {\n  \"\"\"An attribute associated with the cart line.\"\"\"\n  attribute(\n    \"\"\"The key of the attribute.\"\"\"\n    key: String!\n  ): Attribute\n\n  \"\"\"\n  The attributes associated with the cart line. Attributes are represented as key-value pairs.\n  \"\"\"\n  attributes: [Attribute!]!\n\n  \"\"\"\n  The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.\n  \"\"\"\n  cost: CartLineCost!\n\n  \"\"\"The discounts that have been applied to the cart line.\"\"\"\n  discountAllocations: [CartDiscountAllocation!]!\n\n  \"\"\"\n  The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.\n  \"\"\"\n  estimatedCost: CartLineEstimatedCost! @deprecated(reason: \"Use `cost` instead.\")\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The merchandise that the buyer intends to purchase.\"\"\"\n  merchandise: Merchandise!\n\n  \"\"\"The quantity of the merchandise that the customer intends to purchase.\"\"\"\n  quantity: Int!\n\n  \"\"\"\n  The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.\n  \"\"\"\n  sellingPlanAllocation: SellingPlanAllocation\n}\n\n\"An auto-generated type for paginating through multiple BaseCartLines.\\n\"\ntype BaseCartLineConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [BaseCartLineEdge!]!\n\n  \"\"\"A list of the nodes contained in BaseCartLineEdge.\"\"\"\n  nodes: [BaseCartLine!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one BaseCartLine and a cursor during pagination.\\n\"\ntype BaseCartLineEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of BaseCartLineEdge.\"\"\"\n  node: BaseCartLine!\n}\n\n\"\"\"An online store blog.\"\"\"\ntype Blog implements HasMetafields & Node & OnlineStorePublishable {\n  \"\"\"Find an article by its handle.\"\"\"\n  articleByHandle(\n    \"\"\"The handle of the article.\"\"\"\n    handle: String!\n  ): Article\n\n  \"\"\"List of the blog's articles.\"\"\"\n  articles(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ArticleSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| author |\\n| blog_title |\\n| created_at |\\n| tag |\\n| tag_not |\\n| updated_at |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): ArticleConnection!\n\n  \"\"\"The authors who have contributed to the blog.\"\"\"\n  authors: [ArticleAuthor!]!\n\n  \"A human-friendly unique string for the Blog automatically generated from its title.\\n\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.\n  \"\"\"\n  onlineStoreUrl: URL\n\n  \"\"\"The blog's SEO information.\"\"\"\n  seo: SEO\n\n  \"\"\"The blogs\u2019s title.\"\"\"\n  title: String!\n}\n\n\"An auto-generated type for paginating through multiple Blogs.\\n\"\ntype BlogConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [BlogEdge!]!\n\n  \"\"\"A list of the nodes contained in BlogEdge.\"\"\"\n  nodes: [Blog!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Blog and a cursor during pagination.\\n\"\ntype BlogEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of BlogEdge.\"\"\"\n  node: Blog!\n}\n\n\"\"\"The set of valid sort keys for the Blog query.\"\"\"\nenum BlogSortKeys {\n  \"\"\"Sort by the `handle` value.\"\"\"\n  HANDLE\n\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).\\n\"\ntype Brand {\n  \"\"\"The colors of the store's brand.\"\"\"\n  colors: BrandColors!\n\n  \"\"\"The store's cover image.\"\"\"\n  coverImage: MediaImage\n\n  \"\"\"The store's default logo.\"\"\"\n  logo: MediaImage\n\n  \"\"\"The store's short description.\"\"\"\n  shortDescription: String\n\n  \"\"\"The store's slogan.\"\"\"\n  slogan: String\n\n  \"\"\"The store's preferred logo for square UI elements.\"\"\"\n  squareLogo: MediaImage\n}\n\n\"A group of related colors for the shop's brand.\\n\"\ntype BrandColorGroup {\n  \"\"\"The background color.\"\"\"\n  background: Color\n\n  \"\"\"The foreground color.\"\"\"\n  foreground: Color\n}\n\n\"The colors of the shop's brand.\\n\"\ntype BrandColors {\n  \"\"\"The shop's primary brand colors.\"\"\"\n  primary: [BrandColorGroup!]!\n\n  \"\"\"The shop's secondary brand colors.\"\"\"\n  secondary: [BrandColorGroup!]!\n}\n\n\"The input fields for obtaining the buyer's identity.\\n\"\ninput BuyerInput {\n  \"\"\"\n  The storefront customer access token retrieved from the [Customer Accounts API](https://shopify.dev/docs/api/customer/reference/mutations/storefrontCustomerAccessTokenCreate).\n  \"\"\"\n  customerAccessToken: String!\n\n  \"\"\"The identifier of the company location.\"\"\"\n  companyLocationId: ID\n}\n\n\"\"\"\nCard brand, such as Visa or Mastercard, which can be used for payments.\n\"\"\"\nenum CardBrand {\n  \"\"\"Visa.\"\"\"\n  VISA\n\n  \"\"\"Mastercard.\"\"\"\n  MASTERCARD\n\n  \"\"\"Discover.\"\"\"\n  DISCOVER\n\n  \"\"\"American Express.\"\"\"\n  AMERICAN_EXPRESS\n\n  \"\"\"Diners Club.\"\"\"\n  DINERS_CLUB\n\n  \"\"\"JCB.\"\"\"\n  JCB\n}\n\n\"A cart represents the merchandise that a buyer intends to purchase,\\nand the estimated cost associated with the cart. Learn how to\\n[interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)\\nduring a customer's session.\\n\"\ntype Cart implements HasMetafields & Node {\n  \"\"\"An attribute associated with the cart.\"\"\"\n  attribute(\n    \"\"\"The key of the attribute.\"\"\"\n    key: String!\n  ): Attribute\n\n  \"\"\"\n  The attributes associated with the cart. Attributes are represented as key-value pairs.\n  \"\"\"\n  attributes: [Attribute!]!\n\n  \"\"\"Information about the buyer that's interacting with the cart.\"\"\"\n  buyerIdentity: CartBuyerIdentity!\n\n  \"\"\"The URL of the checkout for the cart.\"\"\"\n  checkoutUrl: URL!\n\n  \"\"\"\n  The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).\n  \"\"\"\n  cost: CartCost!\n\n  \"\"\"The date and time when the cart was created.\"\"\"\n  createdAt: DateTime!\n\n  \"The delivery groups available for the cart, based on the buyer identity default\\ndelivery address preference or the default address of the logged-in customer.\\n\"\n  deliveryGroups(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): CartDeliveryGroupConnection!\n\n  \"\"\"The discounts that have been applied to the entire cart.\"\"\"\n  discountAllocations: [CartDiscountAllocation!]!\n\n  \"\"\"\n  The case-insensitive discount codes that the customer added at checkout.\n  \"\"\"\n  discountCodes: [CartDiscountCode!]!\n\n  \"\"\"\n  The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).\n  \"\"\"\n  estimatedCost: CartEstimatedCost! @deprecated(reason: \"Use `cost` instead.\")\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"\n  A list of lines containing information about the items the customer intends to purchase.\n  \"\"\"\n  lines(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): BaseCartLineConnection!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  A note that's associated with the cart. For example, the note can be a personalized message to the buyer.\n  \"\"\"\n  note: String\n\n  \"\"\"The total number of items in the cart.\"\"\"\n  totalQuantity: Int!\n\n  \"\"\"The date and time when the cart was updated.\"\"\"\n  updatedAt: DateTime!\n}\n\n\"\"\"Return type for `cartAttributesUpdate` mutation.\"\"\"\ntype CartAttributesUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"\nThe discounts automatically applied to the cart line based on prerequisites that have been met.\n\"\"\"\ntype CartAutomaticDiscountAllocation implements CartDiscountAllocation {\n  \"\"\"The discounted amount that has been applied to the cart line.\"\"\"\n  discountedAmount: MoneyV2!\n\n  \"\"\"The title of the allocated discount.\"\"\"\n  title: String!\n}\n\n\"\"\"\nRepresents information about the buyer that is interacting with the cart.\n\"\"\"\ntype CartBuyerIdentity {\n  \"\"\"The country where the buyer is located.\"\"\"\n  countryCode: CountryCode\n\n  \"\"\"The customer account associated with the cart.\"\"\"\n  customer: Customer\n\n  \"An ordered set of delivery addresses tied to the buyer that is interacting with the cart.\\nThe rank of the preferences is determined by the order of the addresses in the array. Preferences\\ncan be used to populate relevant fields in the checkout flow.\\n\"\n  deliveryAddressPreferences: [DeliveryAddress!]!\n\n  \"\"\"The email address of the buyer that's interacting with the cart.\"\"\"\n  email: String\n\n  \"\"\"The phone number of the buyer that's interacting with the cart.\"\"\"\n  phone: String\n\n  \"A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. \\nPreferences are not synced back to the cart if they are overwritten.\\n\"\n  preferences: CartPreferences\n\n  \"\"\"The purchasing company associated with the cart.\"\"\"\n  purchasingCompany: PurchasingCompany\n\n  \"A set of wallet preferences tied to the buyer that is interacting with the cart.\\nPreferences can be used to populate relevant payment fields in the checkout flow.\\n\"\n  walletPreferences: [String!]! @deprecated(reason: \"Use `preferences` instead.\")\n}\n\n\"Specifies the input fields to update the buyer information associated with a cart.\\nBuyer identity is used to determine\\n[international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)\\nand should match the customer's shipping address.\\n\"\ninput CartBuyerIdentityInput {\n  \"\"\"The email address of the buyer that is interacting with the cart.\"\"\"\n  email: String\n\n  \"\"\"The phone number of the buyer that is interacting with the cart.\"\"\"\n  phone: String\n\n  \"\"\"The company location of the buyer that is interacting with the cart.\"\"\"\n  companyLocationId: ID\n\n  \"\"\"The country where the buyer is located.\"\"\"\n  countryCode: CountryCode\n\n  \"\"\"\n  The access token used to identify the customer associated with the cart.\n  \"\"\"\n  customerAccessToken: String\n\n  \"\"\"\n  An ordered set of delivery addresses tied to the buyer that is interacting with the cart.\n  The rank of the preferences is determined by the order of the addresses in the array. Preferences\n  can be used to populate relevant fields in the checkout flow.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  deliveryAddressPreferences: [DeliveryAddressInput!]\n\n  \"A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. \\nPreferences are not synced back to the cart if they are overwritten.\\n\"\n  preferences: CartPreferencesInput\n}\n\n\"\"\"Return type for `cartBuyerIdentityUpdate` mutation.\"\"\"\ntype CartBuyerIdentityUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"Represents how credit card details are provided for a direct payment.\\n\"\nenum CartCardSource {\n  \"The credit card was provided by a third party and vaulted on their system.\\nUsing this value requires a separate permission from Shopify.\\n\"\n  SAVED_CREDIT_CARD\n}\n\n\"\"\"\nThe discount that has been applied to the cart line using a discount code.\n\"\"\"\ntype CartCodeDiscountAllocation implements CartDiscountAllocation {\n  \"\"\"The code used to apply the discount.\"\"\"\n  code: String!\n\n  \"\"\"The discounted amount that has been applied to the cart line.\"\"\"\n  discountedAmount: MoneyV2!\n}\n\n\"\"\"The completion action to checkout a cart.\"\"\"\nunion CartCompletionAction = CompletePaymentChallenge\n\n\"\"\"The required completion action to checkout a cart.\"\"\"\ntype CartCompletionActionRequired {\n  \"\"\"The action required to complete the cart completion attempt.\"\"\"\n  action: CartCompletionAction\n\n  \"\"\"The ID of the cart completion attempt.\"\"\"\n  id: String!\n}\n\n\"\"\"The result of a cart completion attempt.\"\"\"\nunion CartCompletionAttemptResult = CartCompletionActionRequired | CartCompletionFailed | CartCompletionProcessing | CartCompletionSuccess\n\n\"\"\"A failed completion to checkout a cart.\"\"\"\ntype CartCompletionFailed {\n  \"\"\"The errors that caused the checkout to fail.\"\"\"\n  errors: [CompletionError!]!\n\n  \"\"\"The ID of the cart completion attempt.\"\"\"\n  id: String!\n}\n\n\"\"\"A cart checkout completion that's still processing.\"\"\"\ntype CartCompletionProcessing {\n  \"\"\"The ID of the cart completion attempt.\"\"\"\n  id: String!\n\n  \"\"\"The number of milliseconds to wait before polling again.\"\"\"\n  pollDelay: Int!\n}\n\n\"\"\"A successful completion to checkout a cart and a created order.\"\"\"\ntype CartCompletionSuccess {\n  \"\"\"The date and time when the job completed.\"\"\"\n  completedAt: DateTime\n\n  \"\"\"The ID of the cart completion attempt.\"\"\"\n  id: String!\n\n  \"\"\"The ID of the order that's created in Shopify.\"\"\"\n  orderId: ID!\n\n  \"\"\"The URL of the order confirmation in Shopify.\"\"\"\n  orderUrl: URL!\n}\n\n\"The costs that the buyer will pay at checkout.\\nThe cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine\\n[international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).\\n\"\ntype CartCost {\n  \"\"\"\n  The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`.\n  \"\"\"\n  checkoutChargeAmount: MoneyV2!\n\n  \"\"\"\n  The amount, before taxes and cart-level discounts, for the customer to pay.\n  \"\"\"\n  subtotalAmount: MoneyV2!\n\n  \"\"\"Whether the subtotal amount is estimated.\"\"\"\n  subtotalAmountEstimated: Boolean!\n\n  \"\"\"The total amount for the customer to pay.\"\"\"\n  totalAmount: MoneyV2!\n\n  \"\"\"Whether the total amount is estimated.\"\"\"\n  totalAmountEstimated: Boolean!\n\n  \"\"\"The duty amount for the customer to pay at checkout.\"\"\"\n  totalDutyAmount: MoneyV2\n\n  \"\"\"Whether the total duty amount is estimated.\"\"\"\n  totalDutyAmountEstimated: Boolean!\n\n  \"\"\"The tax amount for the customer to pay at checkout.\"\"\"\n  totalTaxAmount: MoneyV2\n\n  \"\"\"Whether the total tax amount is estimated.\"\"\"\n  totalTaxAmountEstimated: Boolean!\n}\n\n\"\"\"Return type for `cartCreate` mutation.\"\"\"\ntype CartCreatePayload {\n  \"\"\"The new cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"\nThe discounts automatically applied to the cart line based on prerequisites that have been met.\n\"\"\"\ntype CartCustomDiscountAllocation implements CartDiscountAllocation {\n  \"\"\"The discounted amount that has been applied to the cart line.\"\"\"\n  discountedAmount: MoneyV2!\n\n  \"\"\"The title of the allocated discount.\"\"\"\n  title: String!\n}\n\n\"\"\"\nPreferred location used to find the closest pick up point based on coordinates.\n\"\"\"\ntype CartDeliveryCoordinatesPreference {\n  \"The two-letter code for the country of the preferred location.\\n\\nFor example, US.\\n\"\n  countryCode: CountryCode!\n\n  \"\"\"\n  The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points.\n  \"\"\"\n  latitude: Float!\n\n  \"\"\"\n  The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points.\n  \"\"\"\n  longitude: Float!\n}\n\n\"\"\"\nPreferred location used to find the closest pick up point based on coordinates.\n\"\"\"\ninput CartDeliveryCoordinatesPreferenceInput {\n  \"\"\"\n  The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points.\n  \"\"\"\n  latitude: Float!\n\n  \"\"\"\n  The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points.\n  \"\"\"\n  longitude: Float!\n\n  \"The two-letter code for the country of the preferred location.\\n\\nFor example, US.\\n\"\n  countryCode: CountryCode!\n}\n\n\"\"\"\nInformation about the options available for one or more line items to be delivered to a specific address.\n\"\"\"\ntype CartDeliveryGroup {\n  \"\"\"A list of cart lines for the delivery group.\"\"\"\n  cartLines(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): BaseCartLineConnection!\n\n  \"\"\"The destination address for the delivery group.\"\"\"\n  deliveryAddress: MailingAddress!\n\n  \"\"\"The delivery options available for the delivery group.\"\"\"\n  deliveryOptions: [CartDeliveryOption!]!\n\n  \"\"\"The type of merchandise in the delivery group.\"\"\"\n  groupType: CartDeliveryGroupType!\n\n  \"\"\"The ID for the delivery group.\"\"\"\n  id: ID!\n\n  \"\"\"The selected delivery option for the delivery group.\"\"\"\n  selectedDeliveryOption: CartDeliveryOption\n}\n\n\"An auto-generated type for paginating through multiple CartDeliveryGroups.\\n\"\ntype CartDeliveryGroupConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [CartDeliveryGroupEdge!]!\n\n  \"\"\"A list of the nodes contained in CartDeliveryGroupEdge.\"\"\"\n  nodes: [CartDeliveryGroup!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.\\n\"\ntype CartDeliveryGroupEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of CartDeliveryGroupEdge.\"\"\"\n  node: CartDeliveryGroup!\n}\n\n\"Defines what type of merchandise is in the delivery group.\\n\"\nenum CartDeliveryGroupType {\n  \"\"\"The delivery group only contains subscription merchandise.\"\"\"\n  SUBSCRIPTION\n\n  \"The delivery group only contains merchandise that is either a one time purchase or a first delivery of\\nsubscription merchandise.\\n\"\n  ONE_TIME_PURCHASE\n}\n\n\"\"\"Information about a delivery option.\"\"\"\ntype CartDeliveryOption {\n  \"\"\"The code of the delivery option.\"\"\"\n  code: String\n\n  \"\"\"The method for the delivery option.\"\"\"\n  deliveryMethodType: DeliveryMethodType!\n\n  \"\"\"The description of the delivery option.\"\"\"\n  description: String\n\n  \"\"\"The estimated cost for the delivery option.\"\"\"\n  estimatedCost: MoneyV2!\n\n  \"\"\"The unique identifier of the delivery option.\"\"\"\n  handle: String!\n\n  \"\"\"The title of the delivery option.\"\"\"\n  title: String\n}\n\n\"A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. \\nPreferences are not synced back to the cart if they are overwritten.\\n\"\ntype CartDeliveryPreference {\n  \"\"\"\n  Preferred location used to find the closest pick up point based on coordinates.\n  \"\"\"\n  coordinates: CartDeliveryCoordinatesPreference\n\n  \"\"\"\n  The preferred delivery methods such as shipping, local pickup or through pickup points.\n  \"\"\"\n  deliveryMethod: [PreferenceDeliveryMethodType!]!\n\n  \"The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods.\\nIt accepts both location ID for local pickup and external IDs for pickup points.\\n\"\n  pickupHandle: [String!]!\n}\n\n\"\"\"\nDelivery preferences can be used to prefill the delivery section at checkout.\n\"\"\"\ninput CartDeliveryPreferenceInput {\n  \"\"\"\n  The preferred delivery methods such as shipping, local pickup or through pickup points.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  deliveryMethod: [PreferenceDeliveryMethodType!]\n\n  \"\"\"\n  The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods.\n  It accepts both location ID for local pickup and external IDs for pickup points.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  pickupHandle: [String!]\n\n  \"\"\"\n  The coordinates of a delivery location in order of preference.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  coordinates: [CartDeliveryCoordinatesPreferenceInput!]\n}\n\n\"The input fields for submitting direct payment method information for checkout.\\n\"\ninput CartDirectPaymentMethodInput {\n  \"\"\"The customer's billing address.\"\"\"\n  billingAddress: MailingAddressInput!\n\n  \"\"\"\n  The session ID for the direct payment method used to create the payment.\n  \"\"\"\n  sessionId: String!\n\n  \"\"\"The source of the credit card payment.\"\"\"\n  cardSource: CartCardSource\n}\n\n\"\"\"The discounts that have been applied to the cart line.\"\"\"\ninterface CartDiscountAllocation {\n  \"\"\"The discounted amount that has been applied to the cart line.\"\"\"\n  discountedAmount: MoneyV2!\n}\n\n\"\"\"The discount codes applied to the cart.\"\"\"\ntype CartDiscountCode {\n  \"\"\"\n  Whether the discount code is applicable to the cart's current contents.\n  \"\"\"\n  applicable: Boolean!\n\n  \"\"\"The code for the discount.\"\"\"\n  code: String!\n}\n\n\"\"\"Return type for `cartDiscountCodesUpdate` mutation.\"\"\"\ntype CartDiscountCodesUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"Possible error codes that can be returned by `CartUserError`.\"\"\"\nenum CartErrorCode {\n  \"\"\"The input value is invalid.\"\"\"\n  INVALID\n\n  \"\"\"The input value should be less than the maximum value allowed.\"\"\"\n  LESS_THAN\n\n  \"\"\"Merchandise line was not found in cart.\"\"\"\n  INVALID_MERCHANDISE_LINE\n\n  \"\"\"Missing discount code.\"\"\"\n  MISSING_DISCOUNT_CODE\n\n  \"\"\"Missing note.\"\"\"\n  MISSING_NOTE\n\n  \"\"\"Delivery group was not found in cart.\"\"\"\n  INVALID_DELIVERY_GROUP\n\n  \"\"\"Delivery option was not valid.\"\"\"\n  INVALID_DELIVERY_OPTION\n\n  \"\"\"The payment wasn't valid.\"\"\"\n  INVALID_PAYMENT\n\n  \"\"\"The payment method is not supported.\"\"\"\n  PAYMENT_METHOD_NOT_SUPPORTED\n\n  \"\"\"Cannot update payment on an empty cart\"\"\"\n  INVALID_PAYMENT_EMPTY_CART\n\n  \"\"\"Validation failed.\"\"\"\n  VALIDATION_CUSTOM\n\n  \"\"\"The metafields were not valid.\"\"\"\n  INVALID_METAFIELDS\n\n  \"\"\"The customer access token is required when setting a company location.\"\"\"\n  MISSING_CUSTOMER_ACCESS_TOKEN\n\n  \"\"\"Company location not found or not allowed.\"\"\"\n  INVALID_COMPANY_LOCATION\n\n  \"\"\"The quantity must be a multiple of the specified increment.\"\"\"\n  INVALID_INCREMENT\n\n  \"\"\"The quantity must be above the specified minimum for the item.\"\"\"\n  MINIMUM_NOT_MET\n\n  \"\"\"The quantity must be below the specified maximum for the item.\"\"\"\n  MAXIMUM_EXCEEDED\n\n  \"\"\"The specified address field is required.\"\"\"\n  ADDRESS_FIELD_IS_REQUIRED\n\n  \"\"\"The specified address field is too long.\"\"\"\n  ADDRESS_FIELD_IS_TOO_LONG\n\n  \"\"\"The specified address field contains emojis.\"\"\"\n  ADDRESS_FIELD_CONTAINS_EMOJIS\n\n  \"\"\"The specified address field contains HTML tags.\"\"\"\n  ADDRESS_FIELD_CONTAINS_HTML_TAGS\n\n  \"\"\"The specified address field contains a URL.\"\"\"\n  ADDRESS_FIELD_CONTAINS_URL\n\n  \"\"\"The specified address field does not match the expected pattern.\"\"\"\n  ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN\n\n  \"\"\"The given zip code is invalid for the provided province.\"\"\"\n  INVALID_ZIP_CODE_FOR_PROVINCE\n\n  \"\"\"The given zip code is invalid for the provided country.\"\"\"\n  INVALID_ZIP_CODE_FOR_COUNTRY\n\n  \"\"\"The given zip code is unsupported.\"\"\"\n  ZIP_CODE_NOT_SUPPORTED\n\n  \"\"\"The given province cannot be found.\"\"\"\n  PROVINCE_NOT_FOUND\n\n  \"\"\"A general error occurred during address validation.\"\"\"\n  UNSPECIFIED_ADDRESS_ERROR\n}\n\n\"\"\"\nThe estimated costs that the buyer will pay at checkout. The estimated cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).\n\"\"\"\ntype CartEstimatedCost {\n  \"\"\"\n  The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`.\n  \"\"\"\n  checkoutChargeAmount: MoneyV2!\n\n  \"\"\"\n  The estimated amount, before taxes and discounts, for the customer to pay.\n  \"\"\"\n  subtotalAmount: MoneyV2!\n\n  \"\"\"The estimated total amount for the customer to pay.\"\"\"\n  totalAmount: MoneyV2!\n\n  \"\"\"The estimated duty amount for the customer to pay at checkout.\"\"\"\n  totalDutyAmount: MoneyV2\n\n  \"\"\"The estimated tax amount for the customer to pay at checkout.\"\"\"\n  totalTaxAmount: MoneyV2\n}\n\n\"The input fields for submitting a billing address without a selected payment method.\\n\"\ninput CartFreePaymentMethodInput {\n  \"\"\"The customer's billing address.\"\"\"\n  billingAddress: MailingAddressInput!\n}\n\n\"\"\"The input fields to create a cart.\"\"\"\ninput CartInput {\n  \"\"\"\n  An array of key-value pairs that contains additional information about the cart.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  attributes: [AttributeInput!]\n\n  \"\"\"\n  A list of merchandise lines to add to the cart.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  lines: [CartLineInput!]\n\n  \"\"\"\n  The case-insensitive discount codes that the customer added at checkout.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  discountCodes: [String!]\n\n  \"A note that's associated with the cart. For example, the note can be a personalized message to the buyer.\\n\"\n  note: String\n\n  \"The customer associated with the cart. Used to determine [international pricing]\\n(https://shopify.dev/custom-storefronts/internationalization/international-pricing).\\nBuyer identity should match the customer's shipping address.\\n\"\n  buyerIdentity: CartBuyerIdentityInput\n\n  \"\"\"\n  The metafields to associate with this cart.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  metafields: [CartInputMetafieldInput!]\n}\n\n\"\"\"The input fields for a cart metafield value to set.\"\"\"\ninput CartInputMetafieldInput {\n  \"\"\"The key name of the metafield.\"\"\"\n  key: String!\n\n  \"The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.\\n\"\n  value: String!\n\n  \"The type of data that the cart metafield stores.\\nThe type of data must be a [supported type](https://shopify.dev/apps/metafields/types).\\n\"\n  type: String!\n}\n\n\"\"\"Represents information about the merchandise in the cart.\"\"\"\ntype CartLine implements BaseCartLine & Node {\n  \"\"\"An attribute associated with the cart line.\"\"\"\n  attribute(\n    \"\"\"The key of the attribute.\"\"\"\n    key: String!\n  ): Attribute\n\n  \"\"\"\n  The attributes associated with the cart line. Attributes are represented as key-value pairs.\n  \"\"\"\n  attributes: [Attribute!]!\n\n  \"\"\"\n  The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.\n  \"\"\"\n  cost: CartLineCost!\n\n  \"\"\"The discounts that have been applied to the cart line.\"\"\"\n  discountAllocations: [CartDiscountAllocation!]!\n\n  \"\"\"\n  The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.\n  \"\"\"\n  estimatedCost: CartLineEstimatedCost! @deprecated(reason: \"Use `cost` instead.\")\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The merchandise that the buyer intends to purchase.\"\"\"\n  merchandise: Merchandise!\n\n  \"\"\"The quantity of the merchandise that the customer intends to purchase.\"\"\"\n  quantity: Int!\n\n  \"\"\"\n  The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.\n  \"\"\"\n  sellingPlanAllocation: SellingPlanAllocation\n}\n\n\"\"\"The cost of the merchandise line that the buyer will pay at checkout.\"\"\"\ntype CartLineCost {\n  \"\"\"The amount of the merchandise line.\"\"\"\n  amountPerQuantity: MoneyV2!\n\n  \"\"\"The compare at amount of the merchandise line.\"\"\"\n  compareAtAmountPerQuantity: MoneyV2\n\n  \"\"\"The cost of the merchandise line before line-level discounts.\"\"\"\n  subtotalAmount: MoneyV2!\n\n  \"\"\"The total cost of the merchandise line.\"\"\"\n  totalAmount: MoneyV2!\n}\n\n\"The estimated cost of the merchandise line that the buyer will pay at checkout.\\n\"\ntype CartLineEstimatedCost {\n  \"\"\"The amount of the merchandise line.\"\"\"\n  amount: MoneyV2!\n\n  \"\"\"The compare at amount of the merchandise line.\"\"\"\n  compareAtAmount: MoneyV2\n\n  \"\"\"The estimated cost of the merchandise line before discounts.\"\"\"\n  subtotalAmount: MoneyV2!\n\n  \"\"\"The estimated total cost of the merchandise line.\"\"\"\n  totalAmount: MoneyV2!\n}\n\n\"\"\"The input fields to create a merchandise line on a cart.\"\"\"\ninput CartLineInput {\n  \"\"\"\n  An array of key-value pairs that contains additional information about the merchandise line.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  attributes: [AttributeInput!]\n\n  \"\"\"The quantity of the merchandise.\"\"\"\n  quantity: Int = 1\n\n  \"\"\"The ID of the merchandise that the buyer intends to purchase.\"\"\"\n  merchandiseId: ID!\n\n  \"\"\"\n  The ID of the selling plan that the merchandise is being purchased with.\n  \"\"\"\n  sellingPlanId: ID\n}\n\n\"\"\"The input fields to update a line item on a cart.\"\"\"\ninput CartLineUpdateInput {\n  \"\"\"The ID of the merchandise line.\"\"\"\n  id: ID!\n\n  \"\"\"The quantity of the line item.\"\"\"\n  quantity: Int\n\n  \"\"\"The ID of the merchandise for the line item.\"\"\"\n  merchandiseId: ID\n\n  \"\"\"\n  An array of key-value pairs that contains additional information about the merchandise line.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  attributes: [AttributeInput!]\n\n  \"\"\"\n  The ID of the selling plan that the merchandise is being purchased with.\n  \"\"\"\n  sellingPlanId: ID\n}\n\n\"\"\"Return type for `cartLinesAdd` mutation.\"\"\"\ntype CartLinesAddPayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"Return type for `cartLinesRemove` mutation.\"\"\"\ntype CartLinesRemovePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"Return type for `cartLinesUpdate` mutation.\"\"\"\ntype CartLinesUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"The input fields to delete a cart metafield.\"\"\"\ninput CartMetafieldDeleteInput {\n  \"\"\"The ID of the cart resource.\"\"\"\n  ownerId: ID!\n\n  \"The key name of the cart metafield. Can either be a composite key (`namespace.key`) or a simple key\\n that relies on the default app-reserved namespace.\\n\"\n  key: String!\n}\n\n\"\"\"Return type for `cartMetafieldDelete` mutation.\"\"\"\ntype CartMetafieldDeletePayload {\n  \"\"\"The ID of the deleted cart metafield.\"\"\"\n  deletedId: ID\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [MetafieldDeleteUserError!]!\n}\n\n\"\"\"The input fields for a cart metafield value to set.\"\"\"\ninput CartMetafieldsSetInput {\n  \"\"\"The ID of the cart resource.\"\"\"\n  ownerId: ID!\n\n  \"\"\"The key name of the cart metafield.\"\"\"\n  key: String!\n\n  \"The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.\\n\"\n  value: String!\n\n  \"The type of data that the cart metafield stores.\\nThe type of data must be a [supported type](https://shopify.dev/apps/metafields/types).\\n\"\n  type: String!\n}\n\n\"\"\"Return type for `cartMetafieldsSet` mutation.\"\"\"\ntype CartMetafieldsSetPayload {\n  \"\"\"The list of cart metafields that were set.\"\"\"\n  metafields: [Metafield!]\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [MetafieldsSetUserError!]!\n}\n\n\"\"\"Return type for `cartNoteUpdate` mutation.\"\"\"\ntype CartNoteUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"The input fields for updating the payment method that will be used to checkout.\\n\"\ninput CartPaymentInput {\n  \"\"\"The amount that the customer will be charged at checkout.\"\"\"\n  amount: MoneyInput!\n\n  \"An ID of the order placed on the originating platform.\\nNote that this value doesn't correspond to the Shopify Order ID.\\n\"\n  sourceIdentifier: String\n\n  \"The input fields to use to checkout a cart without providing a payment method.\\nUse this payment method input if the total cost of the cart is 0.\\n\"\n  freePaymentMethod: CartFreePaymentMethodInput\n\n  \"The input fields to use when checking out a cart with a direct payment method (like a credit card).\\n\"\n  directPaymentMethod: CartDirectPaymentMethodInput\n\n  \"The input fields to use when checking out a cart with a wallet payment method (like Shop Pay or Apple Pay).\\n\"\n  walletPaymentMethod: CartWalletPaymentMethodInput\n}\n\n\"\"\"Return type for `cartPaymentUpdate` mutation.\"\"\"\ntype CartPaymentUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. \\nPreferences are not synced back to the cart if they are overwritten.\\n\"\ntype CartPreferences {\n  \"\"\"\n  Delivery preferences can be used to prefill the delivery section in at checkout.\n  \"\"\"\n  delivery: CartDeliveryPreference\n\n  \"Wallet preferences are used to populate relevant payment fields in the checkout flow.\\nAccepted value: `[\\\"shop_pay\\\"]`.\\n\"\n  wallet: [String!]\n}\n\n\"\"\"\nThe input fields represent preferences for the buyer that is interacting with the cart.\n\"\"\"\ninput CartPreferencesInput {\n  \"\"\"\n  Delivery preferences can be used to prefill the delivery section in at checkout.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  delivery: [CartDeliveryPreferenceInput!]\n\n  \"\"\"\n  Wallet preferences are used to populate relevant payment fields in the checkout flow.\n  Accepted value: `[\"shop_pay\"]`.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  wallet: [String!]\n}\n\n\"The input fields for updating the selected delivery options for a delivery group.\\n\"\ninput CartSelectedDeliveryOptionInput {\n  \"\"\"The ID of the cart delivery group.\"\"\"\n  deliveryGroupId: ID!\n\n  \"\"\"The handle of the selected delivery option.\"\"\"\n  deliveryOptionHandle: String!\n}\n\n\"\"\"Return type for `cartSelectedDeliveryOptionsUpdate` mutation.\"\"\"\ntype CartSelectedDeliveryOptionsUpdatePayload {\n  \"\"\"The updated cart.\"\"\"\n  cart: Cart\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"Return type for `cartSubmitForCompletion` mutation.\"\"\"\ntype CartSubmitForCompletionPayload {\n  \"\"\"The result of cart submission for completion.\"\"\"\n  result: CartSubmitForCompletionResult\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CartUserError!]!\n}\n\n\"\"\"The result of cart submit completion.\"\"\"\nunion CartSubmitForCompletionResult = SubmitAlreadyAccepted | SubmitFailed | SubmitSuccess | SubmitThrottled\n\n\"\"\"Represents an error that happens during execution of a cart mutation.\"\"\"\ntype CartUserError implements DisplayableError {\n  \"\"\"The error code.\"\"\"\n  code: CartErrorCode\n\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"The input fields for submitting wallet payment method information for checkout.\\n\"\ninput CartWalletPaymentMethodInput {\n  \"\"\"The payment method information for the Apple Pay wallet.\"\"\"\n  applePayWalletContent: ApplePayWalletContentInput\n\n  \"\"\"The payment method information for the Shop Pay wallet.\"\"\"\n  shopPayWalletContent: ShopPayWalletContentInput\n}\n\n\"A container for all the information required to checkout items and pay.\\n\\nThe Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\\n\"\ntype Checkout implements Node {\n  \"\"\"The gift cards used on the checkout.\"\"\"\n  appliedGiftCards: [AppliedGiftCard!]!\n\n  \"The available shipping rates for this Checkout.\\nShould only be used when checkout `requiresShipping` is `true` and\\nthe shipping address is valid.\\n\"\n  availableShippingRates: AvailableShippingRates\n\n  \"\"\"The identity of the customer associated with the checkout.\"\"\"\n  buyerIdentity: CheckoutBuyerIdentity!\n\n  \"\"\"The date and time when the checkout was completed.\"\"\"\n  completedAt: DateTime\n\n  \"\"\"The date and time when the checkout was created.\"\"\"\n  createdAt: DateTime!\n\n  \"\"\"The currency code for the checkout.\"\"\"\n  currencyCode: CurrencyCode!\n\n  \"\"\"A list of extra information that's added to the checkout.\"\"\"\n  customAttributes: [Attribute!]!\n\n  \"\"\"Discounts that have been applied on the checkout.\"\"\"\n  discountApplications(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): DiscountApplicationConnection!\n\n  \"\"\"The email attached to this checkout.\"\"\"\n  email: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"\n  A list of line item objects, each one containing information about an item in the checkout.\n  \"\"\"\n  lineItems(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): CheckoutLineItemConnection!\n\n  \"\"\"\n  The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded.\n  \"\"\"\n  lineItemsSubtotalPrice: MoneyV2!\n\n  \"\"\"The note associated with the checkout.\"\"\"\n  note: String\n\n  \"\"\"The resulting order from a paid checkout.\"\"\"\n  order: Order\n\n  \"\"\"\n  The <b>Order status</b> page for this Checkout, null when checkout isn't completed.\n  \"\"\"\n  orderStatusUrl: URL\n\n  \"\"\"\n  The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards.\n  \"\"\"\n  paymentDue: MoneyV2!\n\n  \"\"\"\n  The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.\n  \"\"\"\n  paymentDueV2: MoneyV2! @deprecated(reason: \"Use `paymentDue` instead.\")\n\n  \"Whether or not the Checkout is ready and can be completed. Checkouts may\\nhave asynchronous operations that can take time to finish. If you want\\nto complete a checkout or ensure all the fields are populated and up to\\ndate, polling is required until the value is true.\\n\"\n  ready: Boolean!\n\n  \"\"\"States whether or not the fulfillment requires shipping.\"\"\"\n  requiresShipping: Boolean!\n\n  \"\"\"The shipping address to where the line items will be shipped.\"\"\"\n  shippingAddress: MailingAddress\n\n  \"The discounts that have been allocated onto the shipping line by discount applications.\\n\"\n  shippingDiscountAllocations: [DiscountAllocation!]!\n\n  \"\"\"\n  Once a shipping rate is selected by the customer it's transitioned to a `shipping_line` object.\n  \"\"\"\n  shippingLine: ShippingRate\n\n  \"\"\"The price at checkout before shipping and taxes.\"\"\"\n  subtotalPrice: MoneyV2!\n\n  \"\"\"The price at checkout before duties, shipping, and taxes.\"\"\"\n  subtotalPriceV2: MoneyV2! @deprecated(reason: \"Use `subtotalPrice` instead.\")\n\n  \"\"\"Whether the checkout is tax exempt.\"\"\"\n  taxExempt: Boolean!\n\n  \"\"\"Whether taxes are included in the line item and shipping line prices.\"\"\"\n  taxesIncluded: Boolean!\n\n  \"\"\"The sum of all the duties applied to the line items in the checkout.\"\"\"\n  totalDuties: MoneyV2\n\n  \"\"\"\n  The sum of all the prices of all the items in the checkout, including taxes and duties.\n  \"\"\"\n  totalPrice: MoneyV2!\n\n  \"\"\"\n  The sum of all the prices of all the items in the checkout, including taxes and duties.\n  \"\"\"\n  totalPriceV2: MoneyV2! @deprecated(reason: \"Use `totalPrice` instead.\")\n\n  \"\"\"\n  The sum of all the taxes applied to the line items and shipping lines in the checkout.\n  \"\"\"\n  totalTax: MoneyV2!\n\n  \"\"\"\n  The sum of all the taxes applied to the line items and shipping lines in the checkout.\n  \"\"\"\n  totalTaxV2: MoneyV2! @deprecated(reason: \"Use `totalTax` instead.\")\n\n  \"\"\"The date and time when the checkout was last updated.\"\"\"\n  updatedAt: DateTime!\n\n  \"\"\"The url pointing to the checkout accessible from the web.\"\"\"\n  webUrl: URL!\n}\n\n\"\"\"The input fields required to update a checkout's attributes.\"\"\"\ninput CheckoutAttributesUpdateV2Input {\n  \"\"\"\n  The text of an optional note that a shop owner can attach to the checkout.\n  \"\"\"\n  note: String\n\n  \"\"\"\n  A list of extra information that's added to the checkout.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  customAttributes: [AttributeInput!]\n\n  \"Allows setting partial addresses on a Checkout, skipping the full validation of attributes.\\nThe required attributes are city, province, and country.\\nFull validation of the addresses is still done at completion time. Defaults to `false` with \\neach operation.\\n\"\n  allowPartialAddresses: Boolean = false\n}\n\n\"\"\"Return type for `checkoutAttributesUpdateV2` mutation.\"\"\"\ntype CheckoutAttributesUpdateV2Payload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"The identity of the customer associated with the checkout.\"\"\"\ntype CheckoutBuyerIdentity {\n  \"\"\"The country code for the checkout. For example, `CA`.\"\"\"\n  countryCode: CountryCode\n}\n\n\"\"\"\nThe input fields for the identity of the customer associated with the checkout.\n\"\"\"\ninput CheckoutBuyerIdentityInput {\n  \"The country code of one of the shop's\\n[enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).\\nFor example, `CA`. Including this field creates a checkout in the specified country's currency.\\n\"\n  countryCode: CountryCode!\n}\n\n\"\"\"Return type for `checkoutCompleteFree` mutation.\"\"\"\ntype CheckoutCompleteFreePayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutCompleteWithCreditCardV2` mutation.\"\"\"\ntype CheckoutCompleteWithCreditCardV2Payload {\n  \"\"\"The checkout on which the payment was applied.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"A representation of the attempted payment.\"\"\"\n  payment: Payment\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation.\"\"\"\ntype CheckoutCompleteWithTokenizedPaymentV3Payload {\n  \"\"\"The checkout on which the payment was applied.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"A representation of the attempted payment.\"\"\"\n  payment: Payment\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"The input fields required to create a checkout.\"\"\"\ninput CheckoutCreateInput {\n  \"\"\"The email with which the customer wants to checkout.\"\"\"\n  email: String\n\n  \"\"\"\n  A list of line item objects, each one containing information about an item in the checkout.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  lineItems: [CheckoutLineItemInput!]\n\n  \"\"\"The shipping address to where the line items will be shipped.\"\"\"\n  shippingAddress: MailingAddressInput\n\n  \"\"\"\n  The text of an optional note that a shop owner can attach to the checkout.\n  \"\"\"\n  note: String\n\n  \"\"\"\n  A list of extra information that's added to the checkout.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  customAttributes: [AttributeInput!]\n\n  \"Allows setting partial addresses on a Checkout, skipping the full validation of attributes.\\nThe required attributes are city, province, and country.\\nFull validation of addresses is still done at completion time. Defaults to `null`.\\n\"\n  allowPartialAddresses: Boolean\n\n  \"\"\"The identity of the customer associated with the checkout.\"\"\"\n  buyerIdentity: CheckoutBuyerIdentityInput\n}\n\n\"\"\"Return type for `checkoutCreate` mutation.\"\"\"\ntype CheckoutCreatePayload {\n  \"\"\"The new checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The checkout queue token. Available only to selected stores.\"\"\"\n  queueToken: String\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutCustomerAssociateV2` mutation.\"\"\"\ntype CheckoutCustomerAssociateV2Payload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The associated customer object.\"\"\"\n  customer: Customer\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutCustomerDisassociateV2` mutation.\"\"\"\ntype CheckoutCustomerDisassociateV2Payload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutDiscountCodeApplyV2` mutation.\"\"\"\ntype CheckoutDiscountCodeApplyV2Payload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutDiscountCodeRemove` mutation.\"\"\"\ntype CheckoutDiscountCodeRemovePayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutEmailUpdateV2` mutation.\"\"\"\ntype CheckoutEmailUpdateV2Payload {\n  \"\"\"The checkout object with the updated email.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Possible error codes that can be returned by `CheckoutUserError`.\"\"\"\nenum CheckoutErrorCode {\n  \"\"\"The input value is blank.\"\"\"\n  BLANK\n\n  \"\"\"The input value is invalid.\"\"\"\n  INVALID\n\n  \"\"\"The input value is too long.\"\"\"\n  TOO_LONG\n\n  \"\"\"The input value needs to be blank.\"\"\"\n  PRESENT\n\n  \"\"\"The input value should be less than the maximum value allowed.\"\"\"\n  LESS_THAN\n\n  \"\"\"\n  The input value should be greater than or equal to the minimum value allowed.\n  \"\"\"\n  GREATER_THAN_OR_EQUAL_TO\n\n  \"\"\"\n  The input value should be less than or equal to the maximum value allowed.\n  \"\"\"\n  LESS_THAN_OR_EQUAL_TO\n\n  \"\"\"Checkout is already completed.\"\"\"\n  ALREADY_COMPLETED\n\n  \"\"\"Checkout is locked.\"\"\"\n  LOCKED\n\n  \"\"\"Input value is not supported.\"\"\"\n  NOT_SUPPORTED\n\n  \"\"\"Input email contains an invalid domain name.\"\"\"\n  BAD_DOMAIN\n\n  \"\"\"Input Zip is invalid for country provided.\"\"\"\n  INVALID_FOR_COUNTRY\n\n  \"\"\"Input Zip is invalid for country and province provided.\"\"\"\n  INVALID_FOR_COUNTRY_AND_PROVINCE\n\n  \"\"\"Invalid state in country.\"\"\"\n  INVALID_STATE_IN_COUNTRY\n\n  \"\"\"Invalid province in country.\"\"\"\n  INVALID_PROVINCE_IN_COUNTRY\n\n  \"\"\"Invalid region in country.\"\"\"\n  INVALID_REGION_IN_COUNTRY\n\n  \"\"\"Shipping rate expired.\"\"\"\n  SHIPPING_RATE_EXPIRED\n\n  \"\"\"Gift card cannot be applied to a checkout that contains a gift card.\"\"\"\n  GIFT_CARD_UNUSABLE\n\n  \"\"\"Gift card is disabled.\"\"\"\n  GIFT_CARD_DISABLED\n\n  \"\"\"Gift card code is invalid.\"\"\"\n  GIFT_CARD_CODE_INVALID\n\n  \"\"\"Gift card has already been applied.\"\"\"\n  GIFT_CARD_ALREADY_APPLIED\n\n  \"\"\"Gift card currency does not match checkout currency.\"\"\"\n  GIFT_CARD_CURRENCY_MISMATCH\n\n  \"\"\"Gift card is expired.\"\"\"\n  GIFT_CARD_EXPIRED\n\n  \"\"\"Gift card has no funds left.\"\"\"\n  GIFT_CARD_DEPLETED\n\n  \"\"\"Gift card was not found.\"\"\"\n  GIFT_CARD_NOT_FOUND\n\n  \"\"\"Cart does not meet discount requirements notice.\"\"\"\n  CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE\n\n  \"\"\"Discount expired.\"\"\"\n  DISCOUNT_EXPIRED\n\n  \"\"\"Discount disabled.\"\"\"\n  DISCOUNT_DISABLED\n\n  \"\"\"Discount limit reached.\"\"\"\n  DISCOUNT_LIMIT_REACHED\n\n  \"\"\"Higher value discount applied.\"\"\"\n  HIGHER_VALUE_DISCOUNT_APPLIED\n\n  \"\"\"Maximum number of discount codes limit reached.\"\"\"\n  MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED\n\n  \"\"\"Discount not found.\"\"\"\n  DISCOUNT_NOT_FOUND\n\n  \"\"\"Customer already used once per customer discount notice.\"\"\"\n  CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE\n\n  \"\"\"Discount code isn't working right now. Please contact us for help.\"\"\"\n  DISCOUNT_CODE_APPLICATION_FAILED\n\n  \"\"\"Checkout is already completed.\"\"\"\n  EMPTY\n\n  \"\"\"Not enough in stock.\"\"\"\n  NOT_ENOUGH_IN_STOCK\n\n  \"\"\"Missing payment input.\"\"\"\n  MISSING_PAYMENT_INPUT\n\n  \"\"\"The amount of the payment does not match the value to be paid.\"\"\"\n  TOTAL_PRICE_MISMATCH\n\n  \"\"\"Line item was not found in checkout.\"\"\"\n  LINE_ITEM_NOT_FOUND\n\n  \"\"\"Unable to apply discount.\"\"\"\n  UNABLE_TO_APPLY\n\n  \"\"\"Discount already applied.\"\"\"\n  DISCOUNT_ALREADY_APPLIED\n\n  \"\"\"Throttled during checkout.\"\"\"\n  THROTTLED_DURING_CHECKOUT\n\n  \"\"\"Queue token has expired.\"\"\"\n  EXPIRED_QUEUE_TOKEN\n\n  \"\"\"Queue token is invalid.\"\"\"\n  INVALID_QUEUE_TOKEN\n\n  \"\"\"Cannot specify country and presentment currency code.\"\"\"\n  INVALID_COUNTRY_AND_CURRENCY\n\n  \"\"\"Product is not published for this customer.\"\"\"\n  PRODUCT_NOT_AVAILABLE\n}\n\n\"\"\"Return type for `checkoutGiftCardRemoveV2` mutation.\"\"\"\ntype CheckoutGiftCardRemoveV2Payload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutGiftCardsAppend` mutation.\"\"\"\ntype CheckoutGiftCardsAppendPayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"A single line item in the checkout, grouped by variant and attributes.\"\"\"\ntype CheckoutLineItem implements Node {\n  \"\"\"\n  Extra information in the form of an array of Key-Value pairs about the line item.\n  \"\"\"\n  customAttributes: [Attribute!]!\n\n  \"\"\"\n  The discounts that have been allocated onto the checkout line item by discount applications.\n  \"\"\"\n  discountAllocations: [DiscountAllocation!]!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The quantity of the line item.\"\"\"\n  quantity: Int!\n\n  \"\"\"Title of the line item. Defaults to the product's title.\"\"\"\n  title: String!\n\n  \"\"\"Unit price of the line item.\"\"\"\n  unitPrice: MoneyV2\n\n  \"\"\"Product variant of the line item.\"\"\"\n  variant: ProductVariant\n}\n\n\"An auto-generated type for paginating through multiple CheckoutLineItems.\\n\"\ntype CheckoutLineItemConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [CheckoutLineItemEdge!]!\n\n  \"\"\"A list of the nodes contained in CheckoutLineItemEdge.\"\"\"\n  nodes: [CheckoutLineItem!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.\\n\"\ntype CheckoutLineItemEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of CheckoutLineItemEdge.\"\"\"\n  node: CheckoutLineItem!\n}\n\n\"\"\"The input fields to create a line item on a checkout.\"\"\"\ninput CheckoutLineItemInput {\n  \"\"\"\n  Extra information in the form of an array of Key-Value pairs about the line item.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  customAttributes: [AttributeInput!]\n\n  \"\"\"The quantity of the line item.\"\"\"\n  quantity: Int!\n\n  \"\"\"The ID of the product variant for the line item.\"\"\"\n  variantId: ID!\n}\n\n\"\"\"The input fields to update a line item on the checkout.\"\"\"\ninput CheckoutLineItemUpdateInput {\n  \"\"\"The ID of the line item.\"\"\"\n  id: ID\n\n  \"\"\"The variant ID of the line item.\"\"\"\n  variantId: ID\n\n  \"\"\"The quantity of the line item.\"\"\"\n  quantity: Int\n\n  \"\"\"\n  Extra information in the form of an array of Key-Value pairs about the line item.\n  \n  The input must not contain more than `250` values.\n  \"\"\"\n  customAttributes: [AttributeInput!]\n}\n\n\"\"\"Return type for `checkoutLineItemsAdd` mutation.\"\"\"\ntype CheckoutLineItemsAddPayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutLineItemsRemove` mutation.\"\"\"\ntype CheckoutLineItemsRemovePayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutLineItemsReplace` mutation.\"\"\"\ntype CheckoutLineItemsReplacePayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [CheckoutUserError!]!\n}\n\n\"\"\"Return type for `checkoutLineItemsUpdate` mutation.\"\"\"\ntype CheckoutLineItemsUpdatePayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutShippingAddressUpdateV2` mutation.\"\"\"\ntype CheckoutShippingAddressUpdateV2Payload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"Return type for `checkoutShippingLineUpdate` mutation.\"\"\"\ntype CheckoutShippingLineUpdatePayload {\n  \"\"\"The updated checkout object.\"\"\"\n  checkout: Checkout\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  checkoutUserErrors: [CheckoutUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `checkoutUserErrors` instead.\")\n}\n\n\"\"\"\nRepresents an error that happens during execution of a checkout mutation.\n\"\"\"\ntype CheckoutUserError implements DisplayableError {\n  \"\"\"The error code.\"\"\"\n  code: CheckoutErrorCode\n\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"A collection represents a grouping of products that a shop owner can create to\\norganize them or make their shops easier to browse.\\n\"\ntype Collection implements HasMetafields & Node & OnlineStorePublishable & Trackable {\n  \"\"\"\n  Stripped description of the collection, single line with HTML tags removed.\n  \"\"\"\n  description(\n    \"\"\"Truncates string after the given length.\"\"\"\n    truncateAt: Int\n  ): String!\n\n  \"\"\"The description of the collection, complete with HTML formatting.\"\"\"\n  descriptionHtml: HTML!\n\n  \"A human-friendly unique string for the collection automatically generated from its title.\\nLimit of 255 characters.\\n\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Image associated with the collection.\"\"\"\n  image: Image\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.\n  \"\"\"\n  onlineStoreUrl: URL\n\n  \"\"\"List of products in the collection.\"\"\"\n  products(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ProductCollectionSortKeys = COLLECTION_DEFAULT\n\n    \"\"\"\n    Returns a subset of products matching all product filters.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    filters: [ProductFilter!]\n  ): ProductConnection!\n\n  \"\"\"The collection's SEO information.\"\"\"\n  seo: SEO!\n\n  \"\"\"The collection\u2019s name. Limit of 255 characters.\"\"\"\n  title: String!\n\n  \"\"\"\n  A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.\n  \"\"\"\n  trackingParameters: String\n\n  \"\"\"The date and time when the collection was last modified.\"\"\"\n  updatedAt: DateTime!\n}\n\n\"An auto-generated type for paginating through multiple Collections.\\n\"\ntype CollectionConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [CollectionEdge!]!\n\n  \"\"\"A list of the nodes contained in CollectionEdge.\"\"\"\n  nodes: [Collection!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"The total count of Collections.\"\"\"\n  totalCount: UnsignedInt64!\n}\n\n\"An auto-generated type which holds one Collection and a cursor during pagination.\\n\"\ntype CollectionEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of CollectionEdge.\"\"\"\n  node: Collection!\n}\n\n\"\"\"The set of valid sort keys for the Collection query.\"\"\"\nenum CollectionSortKeys {\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `updated_at` value.\"\"\"\n  UPDATED_AT\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"A string containing a hexadecimal representation of a color.\\n\\nFor example, \\\"#6A8D48\\\".\\n\"\nscalar Color\n\n\"\"\"A comment on an article.\"\"\"\ntype Comment implements Node {\n  \"\"\"The comment\u2019s author.\"\"\"\n  author: CommentAuthor!\n\n  \"\"\"Stripped content of the comment, single line with HTML tags removed.\"\"\"\n  content(\n    \"\"\"Truncates string after the given length.\"\"\"\n    truncateAt: Int\n  ): String!\n\n  \"\"\"The content of the comment, complete with HTML formatting.\"\"\"\n  contentHtml: HTML!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n}\n\n\"\"\"The author of a comment.\"\"\"\ntype CommentAuthor {\n  \"\"\"The author's email.\"\"\"\n  email: String!\n\n  \"\"\"The author\u2019s name.\"\"\"\n  name: String!\n}\n\n\"An auto-generated type for paginating through multiple Comments.\\n\"\ntype CommentConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [CommentEdge!]!\n\n  \"\"\"A list of the nodes contained in CommentEdge.\"\"\"\n  nodes: [Comment!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Comment and a cursor during pagination.\\n\"\ntype CommentEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of CommentEdge.\"\"\"\n  node: Comment!\n}\n\n\"\"\"\nRepresents information about a company which is also a customer of the shop.\n\"\"\"\ntype Company implements HasMetafields & Node {\n  \"\"\"\n  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify.\n  \"\"\"\n  createdAt: DateTime!\n\n  \"\"\"A unique externally-supplied ID for the company.\"\"\"\n  externalId: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"The name of the company.\"\"\"\n  name: String!\n\n  \"\"\"\n  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified.\n  \"\"\"\n  updatedAt: DateTime!\n}\n\n\"\"\"A company's main point of contact.\"\"\"\ntype CompanyContact implements Node {\n  \"\"\"\n  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created in Shopify.\n  \"\"\"\n  createdAt: DateTime!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The company contact's locale (language).\"\"\"\n  locale: String\n\n  \"\"\"The company contact's job title.\"\"\"\n  title: String\n\n  \"\"\"\n  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last modified.\n  \"\"\"\n  updatedAt: DateTime!\n}\n\n\"\"\"A company's location.\"\"\"\ntype CompanyLocation implements HasMetafields & Node {\n  \"\"\"\n  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify.\n  \"\"\"\n  createdAt: DateTime!\n\n  \"\"\"A unique externally-supplied ID for the company.\"\"\"\n  externalId: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The preferred locale of the company location.\"\"\"\n  locale: String\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"The name of the company location.\"\"\"\n  name: String!\n\n  \"\"\"\n  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified.\n  \"\"\"\n  updatedAt: DateTime!\n}\n\n\"\"\"The action for the 3DS payment redirect.\"\"\"\ntype CompletePaymentChallenge {\n  \"\"\"The URL for the 3DS payment redirect.\"\"\"\n  redirectUrl: URL\n}\n\n\"\"\"An error that occurred during a cart completion attempt.\"\"\"\ntype CompletionError {\n  \"\"\"The error code.\"\"\"\n  code: CompletionErrorCode!\n\n  \"\"\"The error message.\"\"\"\n  message: String\n}\n\n\"\"\"The code of the error that occurred during a cart completion attempt.\"\"\"\nenum CompletionErrorCode {\n  ERROR\n  INVENTORY_RESERVATION_ERROR\n  PAYMENT_ERROR\n  PAYMENT_TRANSIENT_ERROR\n  PAYMENT_AMOUNT_TOO_SMALL\n  PAYMENT_GATEWAY_NOT_ENABLED_ERROR\n  PAYMENT_INSUFFICIENT_FUNDS\n  PAYMENT_INVALID_PAYMENT_METHOD\n  PAYMENT_INVALID_CURRENCY\n  PAYMENT_INVALID_CREDIT_CARD\n  PAYMENT_INVALID_BILLING_ADDRESS\n  PAYMENT_CARD_DECLINED\n  PAYMENT_CALL_ISSUER\n}\n\n\"\"\"Represents information about the grouped merchandise in the cart.\"\"\"\ntype ComponentizableCartLine implements BaseCartLine & Node {\n  \"\"\"An attribute associated with the cart line.\"\"\"\n  attribute(\n    \"\"\"The key of the attribute.\"\"\"\n    key: String!\n  ): Attribute\n\n  \"\"\"\n  The attributes associated with the cart line. Attributes are represented as key-value pairs.\n  \"\"\"\n  attributes: [Attribute!]!\n\n  \"\"\"\n  The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.\n  \"\"\"\n  cost: CartLineCost!\n\n  \"\"\"The discounts that have been applied to the cart line.\"\"\"\n  discountAllocations: [CartDiscountAllocation!]!\n\n  \"\"\"\n  The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.\n  \"\"\"\n  estimatedCost: CartLineEstimatedCost! @deprecated(reason: \"Use `cost` instead.\")\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The components of the line item.\"\"\"\n  lineComponents: [CartLine!]!\n\n  \"\"\"The merchandise that the buyer intends to purchase.\"\"\"\n  merchandise: Merchandise!\n\n  \"\"\"The quantity of the merchandise that the customer intends to purchase.\"\"\"\n  quantity: Int!\n\n  \"\"\"\n  The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.\n  \"\"\"\n  sellingPlanAllocation: SellingPlanAllocation\n}\n\n\"\"\"A country.\"\"\"\ntype Country {\n  \"\"\"The languages available for the country.\"\"\"\n  availableLanguages: [Language!]!\n\n  \"\"\"The currency of the country.\"\"\"\n  currency: Currency!\n\n  \"\"\"The ISO code of the country.\"\"\"\n  isoCode: CountryCode!\n\n  \"\"\"The market that includes this country.\"\"\"\n  market: Market\n\n  \"\"\"The name of the country.\"\"\"\n  name: String!\n\n  \"\"\"The unit system used in the country.\"\"\"\n  unitSystem: UnitSystem!\n}\n\n\"The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.\\nIf a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision\\nof another country. For example, the territories associated with Spain are represented by the country code `ES`,\\nand the territories associated with the United States of America are represented by the country code `US`.\\n\"\nenum CountryCode {\n  \"\"\"Afghanistan.\"\"\"\n  AF\n\n  \"\"\"\xC5land Islands.\"\"\"\n  AX\n\n  \"\"\"Albania.\"\"\"\n  AL\n\n  \"\"\"Algeria.\"\"\"\n  DZ\n\n  \"\"\"Andorra.\"\"\"\n  AD\n\n  \"\"\"Angola.\"\"\"\n  AO\n\n  \"\"\"Anguilla.\"\"\"\n  AI\n\n  \"\"\"Antigua & Barbuda.\"\"\"\n  AG\n\n  \"\"\"Argentina.\"\"\"\n  AR\n\n  \"\"\"Armenia.\"\"\"\n  AM\n\n  \"\"\"Aruba.\"\"\"\n  AW\n\n  \"\"\"Ascension Island.\"\"\"\n  AC\n\n  \"\"\"Australia.\"\"\"\n  AU\n\n  \"\"\"Austria.\"\"\"\n  AT\n\n  \"\"\"Azerbaijan.\"\"\"\n  AZ\n\n  \"\"\"Bahamas.\"\"\"\n  BS\n\n  \"\"\"Bahrain.\"\"\"\n  BH\n\n  \"\"\"Bangladesh.\"\"\"\n  BD\n\n  \"\"\"Barbados.\"\"\"\n  BB\n\n  \"\"\"Belarus.\"\"\"\n  BY\n\n  \"\"\"Belgium.\"\"\"\n  BE\n\n  \"\"\"Belize.\"\"\"\n  BZ\n\n  \"\"\"Benin.\"\"\"\n  BJ\n\n  \"\"\"Bermuda.\"\"\"\n  BM\n\n  \"\"\"Bhutan.\"\"\"\n  BT\n\n  \"\"\"Bolivia.\"\"\"\n  BO\n\n  \"\"\"Bosnia & Herzegovina.\"\"\"\n  BA\n\n  \"\"\"Botswana.\"\"\"\n  BW\n\n  \"\"\"Bouvet Island.\"\"\"\n  BV\n\n  \"\"\"Brazil.\"\"\"\n  BR\n\n  \"\"\"British Indian Ocean Territory.\"\"\"\n  IO\n\n  \"\"\"Brunei.\"\"\"\n  BN\n\n  \"\"\"Bulgaria.\"\"\"\n  BG\n\n  \"\"\"Burkina Faso.\"\"\"\n  BF\n\n  \"\"\"Burundi.\"\"\"\n  BI\n\n  \"\"\"Cambodia.\"\"\"\n  KH\n\n  \"\"\"Canada.\"\"\"\n  CA\n\n  \"\"\"Cape Verde.\"\"\"\n  CV\n\n  \"\"\"Caribbean Netherlands.\"\"\"\n  BQ\n\n  \"\"\"Cayman Islands.\"\"\"\n  KY\n\n  \"\"\"Central African Republic.\"\"\"\n  CF\n\n  \"\"\"Chad.\"\"\"\n  TD\n\n  \"\"\"Chile.\"\"\"\n  CL\n\n  \"\"\"China.\"\"\"\n  CN\n\n  \"\"\"Christmas Island.\"\"\"\n  CX\n\n  \"\"\"Cocos (Keeling) Islands.\"\"\"\n  CC\n\n  \"\"\"Colombia.\"\"\"\n  CO\n\n  \"\"\"Comoros.\"\"\"\n  KM\n\n  \"\"\"Congo - Brazzaville.\"\"\"\n  CG\n\n  \"\"\"Congo - Kinshasa.\"\"\"\n  CD\n\n  \"\"\"Cook Islands.\"\"\"\n  CK\n\n  \"\"\"Costa Rica.\"\"\"\n  CR\n\n  \"\"\"Croatia.\"\"\"\n  HR\n\n  \"\"\"Cuba.\"\"\"\n  CU\n\n  \"\"\"Cura\xE7ao.\"\"\"\n  CW\n\n  \"\"\"Cyprus.\"\"\"\n  CY\n\n  \"\"\"Czechia.\"\"\"\n  CZ\n\n  \"\"\"C\xF4te d\u2019Ivoire.\"\"\"\n  CI\n\n  \"\"\"Denmark.\"\"\"\n  DK\n\n  \"\"\"Djibouti.\"\"\"\n  DJ\n\n  \"\"\"Dominica.\"\"\"\n  DM\n\n  \"\"\"Dominican Republic.\"\"\"\n  DO\n\n  \"\"\"Ecuador.\"\"\"\n  EC\n\n  \"\"\"Egypt.\"\"\"\n  EG\n\n  \"\"\"El Salvador.\"\"\"\n  SV\n\n  \"\"\"Equatorial Guinea.\"\"\"\n  GQ\n\n  \"\"\"Eritrea.\"\"\"\n  ER\n\n  \"\"\"Estonia.\"\"\"\n  EE\n\n  \"\"\"Eswatini.\"\"\"\n  SZ\n\n  \"\"\"Ethiopia.\"\"\"\n  ET\n\n  \"\"\"Falkland Islands.\"\"\"\n  FK\n\n  \"\"\"Faroe Islands.\"\"\"\n  FO\n\n  \"\"\"Fiji.\"\"\"\n  FJ\n\n  \"\"\"Finland.\"\"\"\n  FI\n\n  \"\"\"France.\"\"\"\n  FR\n\n  \"\"\"French Guiana.\"\"\"\n  GF\n\n  \"\"\"French Polynesia.\"\"\"\n  PF\n\n  \"\"\"French Southern Territories.\"\"\"\n  TF\n\n  \"\"\"Gabon.\"\"\"\n  GA\n\n  \"\"\"Gambia.\"\"\"\n  GM\n\n  \"\"\"Georgia.\"\"\"\n  GE\n\n  \"\"\"Germany.\"\"\"\n  DE\n\n  \"\"\"Ghana.\"\"\"\n  GH\n\n  \"\"\"Gibraltar.\"\"\"\n  GI\n\n  \"\"\"Greece.\"\"\"\n  GR\n\n  \"\"\"Greenland.\"\"\"\n  GL\n\n  \"\"\"Grenada.\"\"\"\n  GD\n\n  \"\"\"Guadeloupe.\"\"\"\n  GP\n\n  \"\"\"Guatemala.\"\"\"\n  GT\n\n  \"\"\"Guernsey.\"\"\"\n  GG\n\n  \"\"\"Guinea.\"\"\"\n  GN\n\n  \"\"\"Guinea-Bissau.\"\"\"\n  GW\n\n  \"\"\"Guyana.\"\"\"\n  GY\n\n  \"\"\"Haiti.\"\"\"\n  HT\n\n  \"\"\"Heard & McDonald Islands.\"\"\"\n  HM\n\n  \"\"\"Vatican City.\"\"\"\n  VA\n\n  \"\"\"Honduras.\"\"\"\n  HN\n\n  \"\"\"Hong Kong SAR.\"\"\"\n  HK\n\n  \"\"\"Hungary.\"\"\"\n  HU\n\n  \"\"\"Iceland.\"\"\"\n  IS\n\n  \"\"\"India.\"\"\"\n  IN\n\n  \"\"\"Indonesia.\"\"\"\n  ID\n\n  \"\"\"Iran.\"\"\"\n  IR\n\n  \"\"\"Iraq.\"\"\"\n  IQ\n\n  \"\"\"Ireland.\"\"\"\n  IE\n\n  \"\"\"Isle of Man.\"\"\"\n  IM\n\n  \"\"\"Israel.\"\"\"\n  IL\n\n  \"\"\"Italy.\"\"\"\n  IT\n\n  \"\"\"Jamaica.\"\"\"\n  JM\n\n  \"\"\"Japan.\"\"\"\n  JP\n\n  \"\"\"Jersey.\"\"\"\n  JE\n\n  \"\"\"Jordan.\"\"\"\n  JO\n\n  \"\"\"Kazakhstan.\"\"\"\n  KZ\n\n  \"\"\"Kenya.\"\"\"\n  KE\n\n  \"\"\"Kiribati.\"\"\"\n  KI\n\n  \"\"\"North Korea.\"\"\"\n  KP\n\n  \"\"\"Kosovo.\"\"\"\n  XK\n\n  \"\"\"Kuwait.\"\"\"\n  KW\n\n  \"\"\"Kyrgyzstan.\"\"\"\n  KG\n\n  \"\"\"Laos.\"\"\"\n  LA\n\n  \"\"\"Latvia.\"\"\"\n  LV\n\n  \"\"\"Lebanon.\"\"\"\n  LB\n\n  \"\"\"Lesotho.\"\"\"\n  LS\n\n  \"\"\"Liberia.\"\"\"\n  LR\n\n  \"\"\"Libya.\"\"\"\n  LY\n\n  \"\"\"Liechtenstein.\"\"\"\n  LI\n\n  \"\"\"Lithuania.\"\"\"\n  LT\n\n  \"\"\"Luxembourg.\"\"\"\n  LU\n\n  \"\"\"Macao SAR.\"\"\"\n  MO\n\n  \"\"\"Madagascar.\"\"\"\n  MG\n\n  \"\"\"Malawi.\"\"\"\n  MW\n\n  \"\"\"Malaysia.\"\"\"\n  MY\n\n  \"\"\"Maldives.\"\"\"\n  MV\n\n  \"\"\"Mali.\"\"\"\n  ML\n\n  \"\"\"Malta.\"\"\"\n  MT\n\n  \"\"\"Martinique.\"\"\"\n  MQ\n\n  \"\"\"Mauritania.\"\"\"\n  MR\n\n  \"\"\"Mauritius.\"\"\"\n  MU\n\n  \"\"\"Mayotte.\"\"\"\n  YT\n\n  \"\"\"Mexico.\"\"\"\n  MX\n\n  \"\"\"Moldova.\"\"\"\n  MD\n\n  \"\"\"Monaco.\"\"\"\n  MC\n\n  \"\"\"Mongolia.\"\"\"\n  MN\n\n  \"\"\"Montenegro.\"\"\"\n  ME\n\n  \"\"\"Montserrat.\"\"\"\n  MS\n\n  \"\"\"Morocco.\"\"\"\n  MA\n\n  \"\"\"Mozambique.\"\"\"\n  MZ\n\n  \"\"\"Myanmar (Burma).\"\"\"\n  MM\n\n  \"\"\"Namibia.\"\"\"\n  NA\n\n  \"\"\"Nauru.\"\"\"\n  NR\n\n  \"\"\"Nepal.\"\"\"\n  NP\n\n  \"\"\"Netherlands.\"\"\"\n  NL\n\n  \"\"\"Netherlands Antilles.\"\"\"\n  AN\n\n  \"\"\"New Caledonia.\"\"\"\n  NC\n\n  \"\"\"New Zealand.\"\"\"\n  NZ\n\n  \"\"\"Nicaragua.\"\"\"\n  NI\n\n  \"\"\"Niger.\"\"\"\n  NE\n\n  \"\"\"Nigeria.\"\"\"\n  NG\n\n  \"\"\"Niue.\"\"\"\n  NU\n\n  \"\"\"Norfolk Island.\"\"\"\n  NF\n\n  \"\"\"North Macedonia.\"\"\"\n  MK\n\n  \"\"\"Norway.\"\"\"\n  NO\n\n  \"\"\"Oman.\"\"\"\n  OM\n\n  \"\"\"Pakistan.\"\"\"\n  PK\n\n  \"\"\"Palestinian Territories.\"\"\"\n  PS\n\n  \"\"\"Panama.\"\"\"\n  PA\n\n  \"\"\"Papua New Guinea.\"\"\"\n  PG\n\n  \"\"\"Paraguay.\"\"\"\n  PY\n\n  \"\"\"Peru.\"\"\"\n  PE\n\n  \"\"\"Philippines.\"\"\"\n  PH\n\n  \"\"\"Pitcairn Islands.\"\"\"\n  PN\n\n  \"\"\"Poland.\"\"\"\n  PL\n\n  \"\"\"Portugal.\"\"\"\n  PT\n\n  \"\"\"Qatar.\"\"\"\n  QA\n\n  \"\"\"Cameroon.\"\"\"\n  CM\n\n  \"\"\"R\xE9union.\"\"\"\n  RE\n\n  \"\"\"Romania.\"\"\"\n  RO\n\n  \"\"\"Russia.\"\"\"\n  RU\n\n  \"\"\"Rwanda.\"\"\"\n  RW\n\n  \"\"\"St. Barth\xE9lemy.\"\"\"\n  BL\n\n  \"\"\"St. Helena.\"\"\"\n  SH\n\n  \"\"\"St. Kitts & Nevis.\"\"\"\n  KN\n\n  \"\"\"St. Lucia.\"\"\"\n  LC\n\n  \"\"\"St. Martin.\"\"\"\n  MF\n\n  \"\"\"St. Pierre & Miquelon.\"\"\"\n  PM\n\n  \"\"\"Samoa.\"\"\"\n  WS\n\n  \"\"\"San Marino.\"\"\"\n  SM\n\n  \"\"\"S\xE3o Tom\xE9 & Pr\xEDncipe.\"\"\"\n  ST\n\n  \"\"\"Saudi Arabia.\"\"\"\n  SA\n\n  \"\"\"Senegal.\"\"\"\n  SN\n\n  \"\"\"Serbia.\"\"\"\n  RS\n\n  \"\"\"Seychelles.\"\"\"\n  SC\n\n  \"\"\"Sierra Leone.\"\"\"\n  SL\n\n  \"\"\"Singapore.\"\"\"\n  SG\n\n  \"\"\"Sint Maarten.\"\"\"\n  SX\n\n  \"\"\"Slovakia.\"\"\"\n  SK\n\n  \"\"\"Slovenia.\"\"\"\n  SI\n\n  \"\"\"Solomon Islands.\"\"\"\n  SB\n\n  \"\"\"Somalia.\"\"\"\n  SO\n\n  \"\"\"South Africa.\"\"\"\n  ZA\n\n  \"\"\"South Georgia & South Sandwich Islands.\"\"\"\n  GS\n\n  \"\"\"South Korea.\"\"\"\n  KR\n\n  \"\"\"South Sudan.\"\"\"\n  SS\n\n  \"\"\"Spain.\"\"\"\n  ES\n\n  \"\"\"Sri Lanka.\"\"\"\n  LK\n\n  \"\"\"St. Vincent & Grenadines.\"\"\"\n  VC\n\n  \"\"\"Sudan.\"\"\"\n  SD\n\n  \"\"\"Suriname.\"\"\"\n  SR\n\n  \"\"\"Svalbard & Jan Mayen.\"\"\"\n  SJ\n\n  \"\"\"Sweden.\"\"\"\n  SE\n\n  \"\"\"Switzerland.\"\"\"\n  CH\n\n  \"\"\"Syria.\"\"\"\n  SY\n\n  \"\"\"Taiwan.\"\"\"\n  TW\n\n  \"\"\"Tajikistan.\"\"\"\n  TJ\n\n  \"\"\"Tanzania.\"\"\"\n  TZ\n\n  \"\"\"Thailand.\"\"\"\n  TH\n\n  \"\"\"Timor-Leste.\"\"\"\n  TL\n\n  \"\"\"Togo.\"\"\"\n  TG\n\n  \"\"\"Tokelau.\"\"\"\n  TK\n\n  \"\"\"Tonga.\"\"\"\n  TO\n\n  \"\"\"Trinidad & Tobago.\"\"\"\n  TT\n\n  \"\"\"Tristan da Cunha.\"\"\"\n  TA\n\n  \"\"\"Tunisia.\"\"\"\n  TN\n\n  \"\"\"T\xFCrkiye.\"\"\"\n  TR\n\n  \"\"\"Turkmenistan.\"\"\"\n  TM\n\n  \"\"\"Turks & Caicos Islands.\"\"\"\n  TC\n\n  \"\"\"Tuvalu.\"\"\"\n  TV\n\n  \"\"\"Uganda.\"\"\"\n  UG\n\n  \"\"\"Ukraine.\"\"\"\n  UA\n\n  \"\"\"United Arab Emirates.\"\"\"\n  AE\n\n  \"\"\"United Kingdom.\"\"\"\n  GB\n\n  \"\"\"United States.\"\"\"\n  US\n\n  \"\"\"U.S. Outlying Islands.\"\"\"\n  UM\n\n  \"\"\"Uruguay.\"\"\"\n  UY\n\n  \"\"\"Uzbekistan.\"\"\"\n  UZ\n\n  \"\"\"Vanuatu.\"\"\"\n  VU\n\n  \"\"\"Venezuela.\"\"\"\n  VE\n\n  \"\"\"Vietnam.\"\"\"\n  VN\n\n  \"\"\"British Virgin Islands.\"\"\"\n  VG\n\n  \"\"\"Wallis & Futuna.\"\"\"\n  WF\n\n  \"\"\"Western Sahara.\"\"\"\n  EH\n\n  \"\"\"Yemen.\"\"\"\n  YE\n\n  \"\"\"Zambia.\"\"\"\n  ZM\n\n  \"\"\"Zimbabwe.\"\"\"\n  ZW\n\n  \"\"\"Unknown Region.\"\"\"\n  ZZ\n}\n\n\"\"\"Credit card information used for a payment.\"\"\"\ntype CreditCard {\n  \"\"\"The brand of the credit card.\"\"\"\n  brand: String\n\n  \"\"\"The expiry month of the credit card.\"\"\"\n  expiryMonth: Int\n\n  \"\"\"The expiry year of the credit card.\"\"\"\n  expiryYear: Int\n\n  \"\"\"The credit card's BIN number.\"\"\"\n  firstDigits: String\n\n  \"\"\"The first name of the card holder.\"\"\"\n  firstName: String\n\n  \"\"\"The last 4 digits of the credit card.\"\"\"\n  lastDigits: String\n\n  \"\"\"The last name of the card holder.\"\"\"\n  lastName: String\n\n  \"\"\"The masked credit card number with only the last 4 digits displayed.\"\"\"\n  maskedNumber: String\n}\n\n\"Specifies the fields required to complete a checkout with\\na Shopify vaulted credit card payment.\\n\"\ninput CreditCardPaymentInputV2 {\n  \"\"\"The amount and currency of the payment.\"\"\"\n  paymentAmount: MoneyInput!\n\n  \"\"\"\n  A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).\n  \"\"\"\n  idempotencyKey: String!\n\n  \"\"\"The billing address for the payment.\"\"\"\n  billingAddress: MailingAddressInput!\n\n  \"\"\"The ID returned by Shopify's Card Vault.\"\"\"\n  vaultId: String!\n\n  \"\"\"Executes the payment in test mode if possible. Defaults to `false`.\"\"\"\n  test: Boolean = false\n}\n\n\"\"\"The part of the image that should remain after cropping.\"\"\"\nenum CropRegion {\n  \"\"\"Keep the center of the image.\"\"\"\n  CENTER\n\n  \"\"\"Keep the top of the image.\"\"\"\n  TOP\n\n  \"\"\"Keep the bottom of the image.\"\"\"\n  BOTTOM\n\n  \"\"\"Keep the left of the image.\"\"\"\n  LEFT\n\n  \"\"\"Keep the right of the image.\"\"\"\n  RIGHT\n}\n\n\"\"\"A currency.\"\"\"\ntype Currency {\n  \"\"\"The ISO code of the currency.\"\"\"\n  isoCode: CurrencyCode!\n\n  \"\"\"The name of the currency.\"\"\"\n  name: String!\n\n  \"\"\"The symbol of the currency.\"\"\"\n  symbol: String!\n}\n\n\"The three-letter currency codes that represent the world currencies used in\\nstores. These include standard ISO 4217 codes, legacy codes,\\nand non-standard codes.\\n\"\nenum CurrencyCode {\n  \"\"\"United States Dollars (USD).\"\"\"\n  USD\n\n  \"\"\"Euro (EUR).\"\"\"\n  EUR\n\n  \"\"\"United Kingdom Pounds (GBP).\"\"\"\n  GBP\n\n  \"\"\"Canadian Dollars (CAD).\"\"\"\n  CAD\n\n  \"\"\"Afghan Afghani (AFN).\"\"\"\n  AFN\n\n  \"\"\"Albanian Lek (ALL).\"\"\"\n  ALL\n\n  \"\"\"Algerian Dinar (DZD).\"\"\"\n  DZD\n\n  \"\"\"Angolan Kwanza (AOA).\"\"\"\n  AOA\n\n  \"\"\"Argentine Pesos (ARS).\"\"\"\n  ARS\n\n  \"\"\"Armenian Dram (AMD).\"\"\"\n  AMD\n\n  \"\"\"Aruban Florin (AWG).\"\"\"\n  AWG\n\n  \"\"\"Australian Dollars (AUD).\"\"\"\n  AUD\n\n  \"\"\"Barbadian Dollar (BBD).\"\"\"\n  BBD\n\n  \"\"\"Azerbaijani Manat (AZN).\"\"\"\n  AZN\n\n  \"\"\"Bangladesh Taka (BDT).\"\"\"\n  BDT\n\n  \"\"\"Bahamian Dollar (BSD).\"\"\"\n  BSD\n\n  \"\"\"Bahraini Dinar (BHD).\"\"\"\n  BHD\n\n  \"\"\"Burundian Franc (BIF).\"\"\"\n  BIF\n\n  \"\"\"Belize Dollar (BZD).\"\"\"\n  BZD\n\n  \"\"\"Bermudian Dollar (BMD).\"\"\"\n  BMD\n\n  \"\"\"Bhutanese Ngultrum (BTN).\"\"\"\n  BTN\n\n  \"\"\"Bosnia and Herzegovina Convertible Mark (BAM).\"\"\"\n  BAM\n\n  \"\"\"Brazilian Real (BRL).\"\"\"\n  BRL\n\n  \"\"\"Bolivian Boliviano (BOB).\"\"\"\n  BOB\n\n  \"\"\"Botswana Pula (BWP).\"\"\"\n  BWP\n\n  \"\"\"Brunei Dollar (BND).\"\"\"\n  BND\n\n  \"\"\"Bulgarian Lev (BGN).\"\"\"\n  BGN\n\n  \"\"\"Burmese Kyat (MMK).\"\"\"\n  MMK\n\n  \"\"\"Cambodian Riel.\"\"\"\n  KHR\n\n  \"\"\"Cape Verdean escudo (CVE).\"\"\"\n  CVE\n\n  \"\"\"Cayman Dollars (KYD).\"\"\"\n  KYD\n\n  \"\"\"Central African CFA Franc (XAF).\"\"\"\n  XAF\n\n  \"\"\"Chilean Peso (CLP).\"\"\"\n  CLP\n\n  \"\"\"Chinese Yuan Renminbi (CNY).\"\"\"\n  CNY\n\n  \"\"\"Colombian Peso (COP).\"\"\"\n  COP\n\n  \"\"\"Comorian Franc (KMF).\"\"\"\n  KMF\n\n  \"\"\"Congolese franc (CDF).\"\"\"\n  CDF\n\n  \"\"\"Costa Rican Colones (CRC).\"\"\"\n  CRC\n\n  \"\"\"Croatian Kuna (HRK).\"\"\"\n  HRK\n\n  \"\"\"Czech Koruny (CZK).\"\"\"\n  CZK\n\n  \"\"\"Danish Kroner (DKK).\"\"\"\n  DKK\n\n  \"\"\"Dominican Peso (DOP).\"\"\"\n  DOP\n\n  \"\"\"East Caribbean Dollar (XCD).\"\"\"\n  XCD\n\n  \"\"\"Egyptian Pound (EGP).\"\"\"\n  EGP\n\n  \"\"\"Eritrean Nakfa (ERN).\"\"\"\n  ERN\n\n  \"\"\"Ethiopian Birr (ETB).\"\"\"\n  ETB\n\n  \"\"\"Falkland Islands Pounds (FKP).\"\"\"\n  FKP\n\n  \"\"\"CFP Franc (XPF).\"\"\"\n  XPF\n\n  \"\"\"Fijian Dollars (FJD).\"\"\"\n  FJD\n\n  \"\"\"Gibraltar Pounds (GIP).\"\"\"\n  GIP\n\n  \"\"\"Gambian Dalasi (GMD).\"\"\"\n  GMD\n\n  \"\"\"Ghanaian Cedi (GHS).\"\"\"\n  GHS\n\n  \"\"\"Guatemalan Quetzal (GTQ).\"\"\"\n  GTQ\n\n  \"\"\"Guyanese Dollar (GYD).\"\"\"\n  GYD\n\n  \"\"\"Georgian Lari (GEL).\"\"\"\n  GEL\n\n  \"\"\"Haitian Gourde (HTG).\"\"\"\n  HTG\n\n  \"\"\"Honduran Lempira (HNL).\"\"\"\n  HNL\n\n  \"\"\"Hong Kong Dollars (HKD).\"\"\"\n  HKD\n\n  \"\"\"Hungarian Forint (HUF).\"\"\"\n  HUF\n\n  \"\"\"Icelandic Kronur (ISK).\"\"\"\n  ISK\n\n  \"\"\"Indian Rupees (INR).\"\"\"\n  INR\n\n  \"\"\"Indonesian Rupiah (IDR).\"\"\"\n  IDR\n\n  \"\"\"Israeli New Shekel (NIS).\"\"\"\n  ILS\n\n  \"\"\"Iraqi Dinar (IQD).\"\"\"\n  IQD\n\n  \"\"\"Jamaican Dollars (JMD).\"\"\"\n  JMD\n\n  \"\"\"Japanese Yen (JPY).\"\"\"\n  JPY\n\n  \"\"\"Jersey Pound.\"\"\"\n  JEP\n\n  \"\"\"Jordanian Dinar (JOD).\"\"\"\n  JOD\n\n  \"\"\"Kazakhstani Tenge (KZT).\"\"\"\n  KZT\n\n  \"\"\"Kenyan Shilling (KES).\"\"\"\n  KES\n\n  \"\"\"Kiribati Dollar (KID).\"\"\"\n  KID\n\n  \"\"\"Kuwaiti Dinar (KWD).\"\"\"\n  KWD\n\n  \"\"\"Kyrgyzstani Som (KGS).\"\"\"\n  KGS\n\n  \"\"\"Laotian Kip (LAK).\"\"\"\n  LAK\n\n  \"\"\"Latvian Lati (LVL).\"\"\"\n  LVL\n\n  \"\"\"Lebanese Pounds (LBP).\"\"\"\n  LBP\n\n  \"\"\"Lesotho Loti (LSL).\"\"\"\n  LSL\n\n  \"\"\"Liberian Dollar (LRD).\"\"\"\n  LRD\n\n  \"\"\"Lithuanian Litai (LTL).\"\"\"\n  LTL\n\n  \"\"\"Malagasy Ariary (MGA).\"\"\"\n  MGA\n\n  \"\"\"Macedonia Denar (MKD).\"\"\"\n  MKD\n\n  \"\"\"Macanese Pataca (MOP).\"\"\"\n  MOP\n\n  \"\"\"Malawian Kwacha (MWK).\"\"\"\n  MWK\n\n  \"\"\"Maldivian Rufiyaa (MVR).\"\"\"\n  MVR\n\n  \"\"\"Mauritanian Ouguiya (MRU).\"\"\"\n  MRU\n\n  \"\"\"Mexican Pesos (MXN).\"\"\"\n  MXN\n\n  \"\"\"Malaysian Ringgits (MYR).\"\"\"\n  MYR\n\n  \"\"\"Mauritian Rupee (MUR).\"\"\"\n  MUR\n\n  \"\"\"Moldovan Leu (MDL).\"\"\"\n  MDL\n\n  \"\"\"Moroccan Dirham.\"\"\"\n  MAD\n\n  \"\"\"Mongolian Tugrik.\"\"\"\n  MNT\n\n  \"\"\"Mozambican Metical.\"\"\"\n  MZN\n\n  \"\"\"Namibian Dollar.\"\"\"\n  NAD\n\n  \"\"\"Nepalese Rupee (NPR).\"\"\"\n  NPR\n\n  \"\"\"Netherlands Antillean Guilder.\"\"\"\n  ANG\n\n  \"\"\"New Zealand Dollars (NZD).\"\"\"\n  NZD\n\n  \"\"\"Nicaraguan C\xF3rdoba (NIO).\"\"\"\n  NIO\n\n  \"\"\"Nigerian Naira (NGN).\"\"\"\n  NGN\n\n  \"\"\"Norwegian Kroner (NOK).\"\"\"\n  NOK\n\n  \"\"\"Omani Rial (OMR).\"\"\"\n  OMR\n\n  \"\"\"Panamian Balboa (PAB).\"\"\"\n  PAB\n\n  \"\"\"Pakistani Rupee (PKR).\"\"\"\n  PKR\n\n  \"\"\"Papua New Guinean Kina (PGK).\"\"\"\n  PGK\n\n  \"\"\"Paraguayan Guarani (PYG).\"\"\"\n  PYG\n\n  \"\"\"Peruvian Nuevo Sol (PEN).\"\"\"\n  PEN\n\n  \"\"\"Philippine Peso (PHP).\"\"\"\n  PHP\n\n  \"\"\"Polish Zlotych (PLN).\"\"\"\n  PLN\n\n  \"\"\"Qatari Rial (QAR).\"\"\"\n  QAR\n\n  \"\"\"Romanian Lei (RON).\"\"\"\n  RON\n\n  \"\"\"Russian Rubles (RUB).\"\"\"\n  RUB\n\n  \"\"\"Rwandan Franc (RWF).\"\"\"\n  RWF\n\n  \"\"\"Samoan Tala (WST).\"\"\"\n  WST\n\n  \"\"\"Saint Helena Pounds (SHP).\"\"\"\n  SHP\n\n  \"\"\"Saudi Riyal (SAR).\"\"\"\n  SAR\n\n  \"\"\"Serbian dinar (RSD).\"\"\"\n  RSD\n\n  \"\"\"Seychellois Rupee (SCR).\"\"\"\n  SCR\n\n  \"\"\"Singapore Dollars (SGD).\"\"\"\n  SGD\n\n  \"\"\"Sudanese Pound (SDG).\"\"\"\n  SDG\n\n  \"\"\"Somali Shilling (SOS).\"\"\"\n  SOS\n\n  \"\"\"Syrian Pound (SYP).\"\"\"\n  SYP\n\n  \"\"\"South African Rand (ZAR).\"\"\"\n  ZAR\n\n  \"\"\"South Korean Won (KRW).\"\"\"\n  KRW\n\n  \"\"\"South Sudanese Pound (SSP).\"\"\"\n  SSP\n\n  \"\"\"Solomon Islands Dollar (SBD).\"\"\"\n  SBD\n\n  \"\"\"Sri Lankan Rupees (LKR).\"\"\"\n  LKR\n\n  \"\"\"Surinamese Dollar (SRD).\"\"\"\n  SRD\n\n  \"\"\"Swazi Lilangeni (SZL).\"\"\"\n  SZL\n\n  \"\"\"Swedish Kronor (SEK).\"\"\"\n  SEK\n\n  \"\"\"Swiss Francs (CHF).\"\"\"\n  CHF\n\n  \"\"\"Taiwan Dollars (TWD).\"\"\"\n  TWD\n\n  \"\"\"Thai baht (THB).\"\"\"\n  THB\n\n  \"\"\"Tanzanian Shilling (TZS).\"\"\"\n  TZS\n\n  \"\"\"Trinidad and Tobago Dollars (TTD).\"\"\"\n  TTD\n\n  \"\"\"Tunisian Dinar (TND).\"\"\"\n  TND\n\n  \"\"\"Turkish Lira (TRY).\"\"\"\n  TRY\n\n  \"\"\"Turkmenistani Manat (TMT).\"\"\"\n  TMT\n\n  \"\"\"Ugandan Shilling (UGX).\"\"\"\n  UGX\n\n  \"\"\"Ukrainian Hryvnia (UAH).\"\"\"\n  UAH\n\n  \"\"\"United Arab Emirates Dirham (AED).\"\"\"\n  AED\n\n  \"\"\"Uruguayan Pesos (UYU).\"\"\"\n  UYU\n\n  \"\"\"Uzbekistan som (UZS).\"\"\"\n  UZS\n\n  \"\"\"Vanuatu Vatu (VUV).\"\"\"\n  VUV\n\n  \"\"\"Venezuelan Bolivares Soberanos (VES).\"\"\"\n  VES\n\n  \"\"\"Vietnamese \u0111\u1ED3ng (VND).\"\"\"\n  VND\n\n  \"\"\"West African CFA franc (XOF).\"\"\"\n  XOF\n\n  \"\"\"Yemeni Rial (YER).\"\"\"\n  YER\n\n  \"\"\"Zambian Kwacha (ZMW).\"\"\"\n  ZMW\n\n  \"\"\"Belarusian Ruble (BYN).\"\"\"\n  BYN\n\n  \"\"\"Belarusian Ruble (BYR).\"\"\"\n  BYR @deprecated(reason: \"`BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.\")\n\n  \"\"\"Djiboutian Franc (DJF).\"\"\"\n  DJF\n\n  \"\"\"Guinean Franc (GNF).\"\"\"\n  GNF\n\n  \"\"\"Iranian Rial (IRR).\"\"\"\n  IRR\n\n  \"\"\"Libyan Dinar (LYD).\"\"\"\n  LYD\n\n  \"\"\"Sierra Leonean Leone (SLL).\"\"\"\n  SLL\n\n  \"\"\"Sao Tome And Principe Dobra (STD).\"\"\"\n  STD @deprecated(reason: \"`STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.\")\n\n  \"\"\"Sao Tome And Principe Dobra (STN).\"\"\"\n  STN\n\n  \"\"\"Tajikistani Somoni (TJS).\"\"\"\n  TJS\n\n  \"\"\"Tongan Pa'anga (TOP).\"\"\"\n  TOP\n\n  \"\"\"Venezuelan Bolivares (VED).\"\"\"\n  VED\n\n  \"\"\"Venezuelan Bolivares (VEF).\"\"\"\n  VEF @deprecated(reason: \"`VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.\")\n\n  \"\"\"Unrecognized currency.\"\"\"\n  XXX\n}\n\n\"\"\"\nA customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout.\n\"\"\"\ntype Customer implements HasMetafields {\n  \"\"\"\n  Indicates whether the customer has consented to be sent marketing material via email.\n  \"\"\"\n  acceptsMarketing: Boolean!\n\n  \"\"\"A list of addresses for the customer.\"\"\"\n  addresses(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): MailingAddressConnection!\n\n  \"\"\"The date and time when the customer was created.\"\"\"\n  createdAt: DateTime!\n\n  \"\"\"The customer\u2019s default address.\"\"\"\n  defaultAddress: MailingAddress\n\n  \"\"\"The customer\u2019s name, email or phone number.\"\"\"\n  displayName: String!\n\n  \"\"\"The customer\u2019s email address.\"\"\"\n  email: String\n\n  \"\"\"The customer\u2019s first name.\"\"\"\n  firstName: String\n\n  \"\"\"A unique ID for the customer.\"\"\"\n  id: ID!\n\n  \"\"\"The customer's most recently updated, incomplete checkout.\"\"\"\n  lastIncompleteCheckout: Checkout @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"The customer\u2019s last name.\"\"\"\n  lastName: String\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  The number of orders that the customer has made at the store in their lifetime.\n  \"\"\"\n  numberOfOrders: UnsignedInt64!\n\n  \"\"\"The orders associated with the customer.\"\"\"\n  orders(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: OrderSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| processed_at |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): OrderConnection!\n\n  \"\"\"The customer\u2019s phone number.\"\"\"\n  phone: String\n\n  \"A comma separated list of tags that have been added to the customer.\\nAdditional access scope required: unauthenticated_read_customer_tags.\\n\"\n  tags: [String!]!\n\n  \"\"\"The date and time when the customer information was updated.\"\"\"\n  updatedAt: DateTime!\n}\n\n\"\"\"\nA CustomerAccessToken represents the unique token required to make modifications to the customer object.\n\"\"\"\ntype CustomerAccessToken {\n  \"\"\"The customer\u2019s access token.\"\"\"\n  accessToken: String!\n\n  \"\"\"The date and time when the customer access token expires.\"\"\"\n  expiresAt: DateTime!\n}\n\n\"\"\"The input fields required to create a customer access token.\"\"\"\ninput CustomerAccessTokenCreateInput {\n  \"\"\"The email associated to the customer.\"\"\"\n  email: String!\n\n  \"\"\"The login password to be used by the customer.\"\"\"\n  password: String!\n}\n\n\"\"\"Return type for `customerAccessTokenCreate` mutation.\"\"\"\ntype CustomerAccessTokenCreatePayload {\n  \"\"\"The newly created customer access token object.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Return type for `customerAccessTokenCreateWithMultipass` mutation.\"\"\"\ntype CustomerAccessTokenCreateWithMultipassPayload {\n  \"\"\"An access token object associated with the customer.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n}\n\n\"\"\"Return type for `customerAccessTokenDelete` mutation.\"\"\"\ntype CustomerAccessTokenDeletePayload {\n  \"\"\"The destroyed access token.\"\"\"\n  deletedAccessToken: String\n\n  \"\"\"ID of the destroyed customer access token.\"\"\"\n  deletedCustomerAccessTokenId: String\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]!\n}\n\n\"\"\"Return type for `customerAccessTokenRenew` mutation.\"\"\"\ntype CustomerAccessTokenRenewPayload {\n  \"\"\"The renewed customer access token object.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]!\n}\n\n\"\"\"Return type for `customerActivateByUrl` mutation.\"\"\"\ntype CustomerActivateByUrlPayload {\n  \"\"\"The customer that was activated.\"\"\"\n  customer: Customer\n\n  \"\"\"A new customer access token for the customer.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n}\n\n\"\"\"The input fields to activate a customer.\"\"\"\ninput CustomerActivateInput {\n  \"\"\"The activation token required to activate the customer.\"\"\"\n  activationToken: String!\n\n  \"\"\"New password that will be set during activation.\"\"\"\n  password: String!\n}\n\n\"\"\"Return type for `customerActivate` mutation.\"\"\"\ntype CustomerActivatePayload {\n  \"\"\"The customer object.\"\"\"\n  customer: Customer\n\n  \"\"\"A newly created customer access token object for the customer.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Return type for `customerAddressCreate` mutation.\"\"\"\ntype CustomerAddressCreatePayload {\n  \"\"\"The new customer address object.\"\"\"\n  customerAddress: MailingAddress\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Return type for `customerAddressDelete` mutation.\"\"\"\ntype CustomerAddressDeletePayload {\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"ID of the deleted customer address.\"\"\"\n  deletedCustomerAddressId: String\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Return type for `customerAddressUpdate` mutation.\"\"\"\ntype CustomerAddressUpdatePayload {\n  \"\"\"The customer\u2019s updated mailing address.\"\"\"\n  customerAddress: MailingAddress\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"The input fields to create a new customer.\"\"\"\ninput CustomerCreateInput {\n  \"\"\"The customer\u2019s first name.\"\"\"\n  firstName: String\n\n  \"\"\"The customer\u2019s last name.\"\"\"\n  lastName: String\n\n  \"\"\"The customer\u2019s email.\"\"\"\n  email: String!\n\n  \"A unique phone number for the customer.\\n\\nFormatted using E.164 standard. For example, _+16135551111_.\\n\"\n  phone: String\n\n  \"\"\"The login password used by the customer.\"\"\"\n  password: String!\n\n  \"\"\"\n  Indicates whether the customer has consented to be sent marketing material via email.\n  \"\"\"\n  acceptsMarketing: Boolean\n}\n\n\"\"\"Return type for `customerCreate` mutation.\"\"\"\ntype CustomerCreatePayload {\n  \"\"\"The created customer object.\"\"\"\n  customer: Customer\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Return type for `customerDefaultAddressUpdate` mutation.\"\"\"\ntype CustomerDefaultAddressUpdatePayload {\n  \"\"\"The updated customer object.\"\"\"\n  customer: Customer\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Possible error codes that can be returned by `CustomerUserError`.\"\"\"\nenum CustomerErrorCode {\n  \"\"\"The input value is blank.\"\"\"\n  BLANK\n\n  \"\"\"The input value is invalid.\"\"\"\n  INVALID\n\n  \"\"\"The input value is already taken.\"\"\"\n  TAKEN\n\n  \"\"\"The input value is too long.\"\"\"\n  TOO_LONG\n\n  \"\"\"The input value is too short.\"\"\"\n  TOO_SHORT\n\n  \"\"\"Unidentified customer.\"\"\"\n  UNIDENTIFIED_CUSTOMER\n\n  \"\"\"Customer is disabled.\"\"\"\n  CUSTOMER_DISABLED\n\n  \"\"\"Input password starts or ends with whitespace.\"\"\"\n  PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE\n\n  \"\"\"Input contains HTML tags.\"\"\"\n  CONTAINS_HTML_TAGS\n\n  \"\"\"Input contains URL.\"\"\"\n  CONTAINS_URL\n\n  \"\"\"Invalid activation token.\"\"\"\n  TOKEN_INVALID\n\n  \"\"\"Customer already enabled.\"\"\"\n  ALREADY_ENABLED\n\n  \"\"\"Address does not exist.\"\"\"\n  NOT_FOUND\n\n  \"\"\"Input email contains an invalid domain name.\"\"\"\n  BAD_DOMAIN\n\n  \"\"\"Multipass token is not valid.\"\"\"\n  INVALID_MULTIPASS_REQUEST\n}\n\n\"\"\"Return type for `customerRecover` mutation.\"\"\"\ntype CustomerRecoverPayload {\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"Return type for `customerResetByUrl` mutation.\"\"\"\ntype CustomerResetByUrlPayload {\n  \"\"\"The customer object which was reset.\"\"\"\n  customer: Customer\n\n  \"\"\"A newly created customer access token object for the customer.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"The input fields to reset a customer's password.\"\"\"\ninput CustomerResetInput {\n  \"\"\"The reset token required to reset the customer\u2019s password.\"\"\"\n  resetToken: String!\n\n  \"\"\"New password that will be set as part of the reset password process.\"\"\"\n  password: String!\n}\n\n\"\"\"Return type for `customerReset` mutation.\"\"\"\ntype CustomerResetPayload {\n  \"\"\"The customer object which was reset.\"\"\"\n  customer: Customer\n\n  \"\"\"A newly created customer access token object for the customer.\"\"\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"The input fields to update the Customer information.\"\"\"\ninput CustomerUpdateInput {\n  \"\"\"The customer\u2019s first name.\"\"\"\n  firstName: String\n\n  \"\"\"The customer\u2019s last name.\"\"\"\n  lastName: String\n\n  \"\"\"The customer\u2019s email.\"\"\"\n  email: String\n\n  \"A unique phone number for the customer.\\n\\nFormatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.\\n\"\n  phone: String\n\n  \"\"\"The login password used by the customer.\"\"\"\n  password: String\n\n  \"\"\"\n  Indicates whether the customer has consented to be sent marketing material via email.\n  \"\"\"\n  acceptsMarketing: Boolean\n}\n\n\"\"\"Return type for `customerUpdate` mutation.\"\"\"\ntype CustomerUpdatePayload {\n  \"\"\"The updated customer object.\"\"\"\n  customer: Customer\n\n  \"The newly created customer access token. If the customer's password is updated, all previous access tokens\\n(including the one used to perform this mutation) become invalid, and a new token is generated.\\n\"\n  customerAccessToken: CustomerAccessToken\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  customerUserErrors: [CustomerUserError!]!\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  userErrors: [UserError!]! @deprecated(reason: \"Use `customerUserErrors` instead.\")\n}\n\n\"\"\"\nRepresents an error that happens during execution of a customer mutation.\n\"\"\"\ntype CustomerUserError implements DisplayableError {\n  \"\"\"The error code.\"\"\"\n  code: CustomerErrorCode\n\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string.\\nFor example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is\\nrepresented as `\\\"2019-09-07T15:50:00Z`\\\".\\n\"\nscalar DateTime\n\n\"A signed decimal number, which supports arbitrary precision and is serialized as a string.\\n\\nExample values: `\\\"29.99\\\"`, `\\\"29.999\\\"`.\\n\"\nscalar Decimal\n\n\"\"\"A delivery address of the buyer that is interacting with the cart.\"\"\"\nunion DeliveryAddress = MailingAddress\n\n\"The input fields for delivery address preferences.\\n\"\ninput DeliveryAddressInput {\n  \"\"\"\n  A delivery address preference of a buyer that is interacting with the cart.\n  \"\"\"\n  deliveryAddress: MailingAddressInput\n\n  \"\"\"Defines what kind of address validation is requested.\"\"\"\n  deliveryAddressValidationStrategy: DeliveryAddressValidationStrategy = COUNTRY_CODE_ONLY\n\n  \"The ID of a customer address that is associated with the buyer that is interacting with the cart.\\n\"\n  customerAddressId: ID\n}\n\n\"Defines the types of available validation strategies for delivery addresses.\\n\"\nenum DeliveryAddressValidationStrategy {\n  \"\"\"Only the country code is validated.\"\"\"\n  COUNTRY_CODE_ONLY\n\n  \"Strict validation is performed, i.e. all fields in the address are validated\\naccording to Shopify's checkout rules. If the address fails validation, the cart will not be updated.\\n\"\n  STRICT\n}\n\n\"\"\"List of different delivery method types.\"\"\"\nenum DeliveryMethodType {\n  \"\"\"Shipping.\"\"\"\n  SHIPPING\n\n  \"\"\"Local Pickup.\"\"\"\n  PICK_UP\n\n  \"\"\"Retail.\"\"\"\n  RETAIL\n\n  \"\"\"Local Delivery.\"\"\"\n  LOCAL\n\n  \"\"\"Shipping to a Pickup Point.\"\"\"\n  PICKUP_POINT\n\n  \"\"\"None.\"\"\"\n  NONE\n}\n\n\"\"\"\nDigital wallet, such as Apple Pay, which can be used for accelerated checkouts.\n\"\"\"\nenum DigitalWallet {\n  \"\"\"Apple Pay.\"\"\"\n  APPLE_PAY\n\n  \"\"\"Android Pay.\"\"\"\n  ANDROID_PAY\n\n  \"\"\"Google Pay.\"\"\"\n  GOOGLE_PAY\n\n  \"\"\"Shopify Pay.\"\"\"\n  SHOPIFY_PAY\n}\n\n\"An amount discounting the line that has been allocated by a discount.\\n\"\ntype DiscountAllocation {\n  \"\"\"Amount of discount allocated.\"\"\"\n  allocatedAmount: MoneyV2!\n\n  \"\"\"The discount this allocated amount originated from.\"\"\"\n  discountApplication: DiscountApplication!\n}\n\n\"Discount applications capture the intentions of a discount source at\\nthe time of application.\\n\"\ninterface DiscountApplication {\n  \"\"\"\n  The method by which the discount's value is allocated to its entitled items.\n  \"\"\"\n  allocationMethod: DiscountApplicationAllocationMethod!\n\n  \"\"\"Which lines of targetType that the discount is allocated over.\"\"\"\n  targetSelection: DiscountApplicationTargetSelection!\n\n  \"\"\"The type of line that the discount is applicable towards.\"\"\"\n  targetType: DiscountApplicationTargetType!\n\n  \"\"\"The value of the discount application.\"\"\"\n  value: PricingValue!\n}\n\n\"\"\"\nThe method by which the discount's value is allocated onto its entitled lines.\n\"\"\"\nenum DiscountApplicationAllocationMethod {\n  \"\"\"The value is spread across all entitled lines.\"\"\"\n  ACROSS\n\n  \"\"\"The value is applied onto every entitled line.\"\"\"\n  EACH\n\n  \"\"\"The value is specifically applied onto a particular line.\"\"\"\n  ONE @deprecated(reason: \"Use ACROSS instead.\")\n}\n\n\"An auto-generated type for paginating through multiple DiscountApplications.\\n\"\ntype DiscountApplicationConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [DiscountApplicationEdge!]!\n\n  \"\"\"A list of the nodes contained in DiscountApplicationEdge.\"\"\"\n  nodes: [DiscountApplication!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one DiscountApplication and a cursor during pagination.\\n\"\ntype DiscountApplicationEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of DiscountApplicationEdge.\"\"\"\n  node: DiscountApplication!\n}\n\n\"The lines on the order to which the discount is applied, of the type defined by\\nthe discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of\\n`LINE_ITEM`, applies the discount on all line items that are entitled to the discount.\\nThe value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.\\n\"\nenum DiscountApplicationTargetSelection {\n  \"\"\"The discount is allocated onto all the lines.\"\"\"\n  ALL\n\n  \"\"\"The discount is allocated onto only the lines that it's entitled for.\"\"\"\n  ENTITLED\n\n  \"\"\"The discount is allocated onto explicitly chosen lines.\"\"\"\n  EXPLICIT\n}\n\n\"The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.\\n\"\nenum DiscountApplicationTargetType {\n  \"\"\"The discount applies onto line items.\"\"\"\n  LINE_ITEM\n\n  \"\"\"The discount applies onto shipping lines.\"\"\"\n  SHIPPING_LINE\n}\n\n\"Discount code applications capture the intentions of a discount code at\\nthe time that it is applied.\\n\"\ntype DiscountCodeApplication implements DiscountApplication {\n  \"\"\"\n  The method by which the discount's value is allocated to its entitled items.\n  \"\"\"\n  allocationMethod: DiscountApplicationAllocationMethod!\n\n  \"\"\"Specifies whether the discount code was applied successfully.\"\"\"\n  applicable: Boolean!\n\n  \"\"\"\n  The string identifying the discount code that was used at the time of application.\n  \"\"\"\n  code: String!\n\n  \"\"\"Which lines of targetType that the discount is allocated over.\"\"\"\n  targetSelection: DiscountApplicationTargetSelection!\n\n  \"\"\"The type of line that the discount is applicable towards.\"\"\"\n  targetType: DiscountApplicationTargetType!\n\n  \"\"\"The value of the discount application.\"\"\"\n  value: PricingValue!\n}\n\n\"\"\"Represents an error in the input of a mutation.\"\"\"\ninterface DisplayableError {\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"\"\"Represents a web address.\"\"\"\ntype Domain {\n  \"\"\"The host name of the domain (eg: `example.com`).\"\"\"\n  host: String!\n\n  \"\"\"Whether SSL is enabled or not.\"\"\"\n  sslEnabled: Boolean!\n\n  \"\"\"The URL of the domain (eg: `https://example.com`).\"\"\"\n  url: URL!\n}\n\n\"\"\"Represents a video hosted outside of Shopify.\"\"\"\ntype ExternalVideo implements Media & Node {\n  \"\"\"A word or phrase to share the nature or contents of a media.\"\"\"\n  alt: String\n\n  \"\"\"The embed URL of the video for the respective host.\"\"\"\n  embedUrl: URL!\n\n  \"\"\"The URL.\"\"\"\n  embeddedUrl: URL! @deprecated(reason: \"Use `originUrl` instead.\")\n\n  \"\"\"The host of the external video.\"\"\"\n  host: MediaHost!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The media content type.\"\"\"\n  mediaContentType: MediaContentType!\n\n  \"\"\"The origin URL of the video on the respective host.\"\"\"\n  originUrl: URL!\n\n  \"\"\"The presentation for a media.\"\"\"\n  presentation: MediaPresentation\n\n  \"\"\"The preview image for the media.\"\"\"\n  previewImage: Image\n}\n\n\"\"\"A filter that is supported on the parent field.\"\"\"\ntype Filter {\n  \"\"\"A unique identifier.\"\"\"\n  id: String!\n\n  \"\"\"A human-friendly string for this filter.\"\"\"\n  label: String!\n\n  \"Describes how to present the filter values.\\nReturns a value only for filters of type `LIST`. Returns null for other types.\\n\"\n  presentation: FilterPresentation\n\n  \"\"\"An enumeration that denotes the type of data this filter represents.\"\"\"\n  type: FilterType!\n\n  \"\"\"The list of values for this filter.\"\"\"\n  values: [FilterValue!]!\n}\n\n\"Defines how to present the filter values, specifies the presentation of the filter.\\n\"\nenum FilterPresentation {\n  \"\"\"Image presentation, filter values display an image.\"\"\"\n  IMAGE\n\n  \"\"\"Swatch presentation, filter values display color or image patterns.\"\"\"\n  SWATCH\n\n  \"\"\"Text presentation, no additional visual display for filter values.\"\"\"\n  TEXT\n}\n\n\"The type of data that the filter group represents.\\n\\nFor more information, refer to [Filter products in a collection with the Storefront API]\\n(https://shopify.dev/custom-storefronts/products-collections/filter-products).\\n\"\nenum FilterType {\n  \"\"\"A list of selectable values.\"\"\"\n  LIST\n\n  \"\"\"A range of prices.\"\"\"\n  PRICE_RANGE\n\n  \"\"\"A boolean value.\"\"\"\n  BOOLEAN\n}\n\n\"\"\"A selectable value within a filter.\"\"\"\ntype FilterValue {\n  \"\"\"The number of results that match this filter value.\"\"\"\n  count: Int!\n\n  \"\"\"A unique identifier.\"\"\"\n  id: String!\n\n  \"\"\"The visual representation when the filter's presentation is `IMAGE`.\"\"\"\n  image: MediaImage\n\n  \"An input object that can be used to filter by this value on the parent field.\\n\\nThe value is provided as a helper for building dynamic filtering UI. For\\nexample, if you have a list of selected `FilterValue` objects, you can combine\\ntheir respective `input` values to use in a subsequent query.\\n\"\n  input: JSON!\n\n  \"\"\"A human-friendly string for this filter value.\"\"\"\n  label: String!\n\n  \"\"\"The visual representation when the filter's presentation is `SWATCH`.\"\"\"\n  swatch: Swatch\n}\n\n\"\"\"Represents a single fulfillment in an order.\"\"\"\ntype Fulfillment {\n  \"\"\"List of the fulfillment's line items.\"\"\"\n  fulfillmentLineItems(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): FulfillmentLineItemConnection!\n\n  \"\"\"The name of the tracking company.\"\"\"\n  trackingCompany: String\n\n  \"Tracking information associated with the fulfillment,\\nsuch as the tracking number and tracking URL.\\n\"\n  trackingInfo(\n    \"\"\"Truncate the array result to this size.\"\"\"\n    first: Int\n  ): [FulfillmentTrackingInfo!]!\n}\n\n\"\"\"\nRepresents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item.\n\"\"\"\ntype FulfillmentLineItem {\n  \"\"\"The associated order's line item.\"\"\"\n  lineItem: OrderLineItem!\n\n  \"\"\"The amount fulfilled in this fulfillment.\"\"\"\n  quantity: Int!\n}\n\n\"An auto-generated type for paginating through multiple FulfillmentLineItems.\\n\"\ntype FulfillmentLineItemConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [FulfillmentLineItemEdge!]!\n\n  \"\"\"A list of the nodes contained in FulfillmentLineItemEdge.\"\"\"\n  nodes: [FulfillmentLineItem!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.\\n\"\ntype FulfillmentLineItemEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of FulfillmentLineItemEdge.\"\"\"\n  node: FulfillmentLineItem!\n}\n\n\"\"\"Tracking information associated with the fulfillment.\"\"\"\ntype FulfillmentTrackingInfo {\n  \"\"\"The tracking number of the fulfillment.\"\"\"\n  number: String\n\n  \"\"\"The URL to track the fulfillment.\"\"\"\n  url: URL\n}\n\n\"\"\"\nThe generic file resource lets you manage files in a merchant\u2019s store. Generic files include any file that doesn\u2019t fit into a designated type such as image or video. Example: PDF, JSON.\n\"\"\"\ntype GenericFile implements Node {\n  \"\"\"A word or phrase to indicate the contents of a file.\"\"\"\n  alt: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The MIME type of the file.\"\"\"\n  mimeType: String\n\n  \"\"\"The size of the original file in bytes.\"\"\"\n  originalFileSize: Int\n\n  \"\"\"The preview image for the file.\"\"\"\n  previewImage: Image\n\n  \"\"\"The URL of the file.\"\"\"\n  url: URL\n}\n\n\"\"\"The input fields used to specify a geographical location.\"\"\"\ninput GeoCoordinateInput {\n  \"\"\"The coordinate's latitude value.\"\"\"\n  latitude: Float!\n\n  \"\"\"The coordinate's longitude value.\"\"\"\n  longitude: Float!\n}\n\n\"A string containing HTML code. Refer to the [HTML spec](https://html.spec.whatwg.org/#elements-3) for a\\ncomplete list of HTML elements.\\n\\nExample value: `\\\"<p>Grey cotton knit sweater.</p>\\\"`\\n\"\nscalar HTML\n\n\"\"\"\nRepresents information about the metafields associated to the specified resource.\n\"\"\"\ninterface HasMetafields {\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n}\n\n\"\"\"\nThe input fields to identify a metafield on an owner resource by namespace and key.\n\"\"\"\ninput HasMetafieldsIdentifier {\n  \"\"\"\n  The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n  \"\"\"\n  namespace: String\n\n  \"\"\"The identifier for the metafield.\"\"\"\n  key: String!\n}\n\n\"\"\"Represents an image resource.\"\"\"\ntype Image {\n  \"\"\"A word or phrase to share the nature or contents of an image.\"\"\"\n  altText: String\n\n  \"\"\"\n  The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify.\n  \"\"\"\n  height: Int\n\n  \"\"\"A unique ID for the image.\"\"\"\n  id: ID\n\n  \"The location of the original image as a URL.\\n\\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.\\n\"\n  originalSrc: URL! @deprecated(reason: \"Use `url` instead.\")\n\n  \"\"\"The location of the image as a URL.\"\"\"\n  src: URL! @deprecated(reason: \"Use `url` instead.\")\n\n  \"The location of the transformed image as a URL.\\n\\nAll transformation arguments are considered \\\"best-effort\\\". If they can be applied to an image, they will be.\\nOtherwise any transformations which an image type doesn't support will be ignored.\\n\"\n  transformedSrc(\n    \"\"\"Image width in pixels between 1 and 5760.\"\"\"\n    maxWidth: Int\n\n    \"\"\"Image height in pixels between 1 and 5760.\"\"\"\n    maxHeight: Int\n\n    \"\"\"Crops the image according to the specified region.\"\"\"\n    crop: CropRegion\n\n    \"\"\"\n    Image size multiplier for high-resolution retina displays. Must be between 1 and 3.\n    \"\"\"\n    scale: Int = 1\n\n    \"\"\"\n    Best effort conversion of image into content type (SVG -> PNG, Anything -> JPG, Anything -> WEBP are supported).\n    \"\"\"\n    preferredContentType: ImageContentType\n  ): URL! @deprecated(reason: \"Use `url(transform:)` instead\")\n\n  \"The location of the image as a URL.\\n\\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\\n\\nAll transformation options are considered \\\"best-effort\\\". Any transformation that the original image type doesn't support will be ignored.\\n\\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).\\n\"\n  url(\n    \"\"\"A set of options to transform the original image.\"\"\"\n    transform: ImageTransformInput\n  ): URL!\n\n  \"\"\"\n  The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify.\n  \"\"\"\n  width: Int\n}\n\n\"An auto-generated type for paginating through multiple Images.\\n\"\ntype ImageConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [ImageEdge!]!\n\n  \"\"\"A list of the nodes contained in ImageEdge.\"\"\"\n  nodes: [Image!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"\"\"List of supported image content types.\"\"\"\nenum ImageContentType {\n  \"\"\"A PNG image.\"\"\"\n  PNG\n\n  \"\"\"A JPG image.\"\"\"\n  JPG\n\n  \"\"\"A WEBP image.\"\"\"\n  WEBP\n}\n\n\"An auto-generated type which holds one Image and a cursor during pagination.\\n\"\ntype ImageEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of ImageEdge.\"\"\"\n  node: Image!\n}\n\n\"The available options for transforming an image.\\n\\nAll transformation options are considered best effort. Any transformation that\\nthe original image type doesn't support will be ignored.\\n\"\ninput ImageTransformInput {\n  \"The region of the image to remain after cropping.\\nMust be used in conjunction with the `maxWidth` and/or `maxHeight` fields,\\nwhere the `maxWidth` and `maxHeight` aren't equal.\\nThe `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while\\na smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{\\nmaxWidth: 5, maxHeight: 10, crop: LEFT }` will result\\nin an image with a width of 5 and height of 10, where the right side of the image is removed.\\n\"\n  crop: CropRegion\n\n  \"Image width in pixels between 1 and 5760.\\n\"\n  maxWidth: Int\n\n  \"Image height in pixels between 1 and 5760.\\n\"\n  maxHeight: Int\n\n  \"Image size multiplier for high-resolution retina displays. Must be within 1..3.\\n\"\n  scale: Int = 1\n\n  \"Convert the source image into the preferred content type.\\nSupported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.\\n\"\n  preferredContentType: ImageContentType\n}\n\n\"\"\"\nProvide details about the contexts influenced by the @inContext directive on a field.\n\"\"\"\ntype InContextAnnotation {\n  description: String!\n  type: InContextAnnotationType!\n}\n\n\"\"\"\nThis gives information about the type of context that impacts a field. For example, for a query with @inContext(language: \"EN\"), the type would point to the name: LanguageCode and kind: ENUM.\n\"\"\"\ntype InContextAnnotationType {\n  kind: String!\n  name: String!\n}\n\n\"A [JSON](https://www.json.org/json-en.html) object.\\n\\nExample value:\\n`{\\n  \\\"product\\\": {\\n    \\\"id\\\": \\\"gid://shopify/Product/1346443542550\\\",\\n    \\\"title\\\": \\\"White T-shirt\\\",\\n    \\\"options\\\": [{\\n      \\\"name\\\": \\\"Size\\\",\\n      \\\"values\\\": [\\\"M\\\", \\\"L\\\"]\\n    }]\\n  }\\n}`\\n\"\nscalar JSON\n\n\"\"\"A language.\"\"\"\ntype Language {\n  \"\"\"\n  The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position.\n  \"\"\"\n  endonymName: String!\n\n  \"\"\"The ISO code.\"\"\"\n  isoCode: LanguageCode!\n\n  \"\"\"The name of the language in the current language.\"\"\"\n  name: String!\n}\n\n\"\"\"ISO 639-1 language codes supported by Shopify.\"\"\"\nenum LanguageCode {\n  \"\"\"Afrikaans.\"\"\"\n  AF\n\n  \"\"\"Akan.\"\"\"\n  AK\n\n  \"\"\"Amharic.\"\"\"\n  AM\n\n  \"\"\"Arabic.\"\"\"\n  AR\n\n  \"\"\"Assamese.\"\"\"\n  AS\n\n  \"\"\"Azerbaijani.\"\"\"\n  AZ\n\n  \"\"\"Belarusian.\"\"\"\n  BE\n\n  \"\"\"Bulgarian.\"\"\"\n  BG\n\n  \"\"\"Bambara.\"\"\"\n  BM\n\n  \"\"\"Bangla.\"\"\"\n  BN\n\n  \"\"\"Tibetan.\"\"\"\n  BO\n\n  \"\"\"Breton.\"\"\"\n  BR\n\n  \"\"\"Bosnian.\"\"\"\n  BS\n\n  \"\"\"Catalan.\"\"\"\n  CA\n\n  \"\"\"Chechen.\"\"\"\n  CE\n\n  \"\"\"Central Kurdish.\"\"\"\n  CKB\n\n  \"\"\"Czech.\"\"\"\n  CS\n\n  \"\"\"Welsh.\"\"\"\n  CY\n\n  \"\"\"Danish.\"\"\"\n  DA\n\n  \"\"\"German.\"\"\"\n  DE\n\n  \"\"\"Dzongkha.\"\"\"\n  DZ\n\n  \"\"\"Ewe.\"\"\"\n  EE\n\n  \"\"\"Greek.\"\"\"\n  EL\n\n  \"\"\"English.\"\"\"\n  EN\n\n  \"\"\"Esperanto.\"\"\"\n  EO\n\n  \"\"\"Spanish.\"\"\"\n  ES\n\n  \"\"\"Estonian.\"\"\"\n  ET\n\n  \"\"\"Basque.\"\"\"\n  EU\n\n  \"\"\"Persian.\"\"\"\n  FA\n\n  \"\"\"Fulah.\"\"\"\n  FF\n\n  \"\"\"Finnish.\"\"\"\n  FI\n\n  \"\"\"Filipino.\"\"\"\n  FIL\n\n  \"\"\"Faroese.\"\"\"\n  FO\n\n  \"\"\"French.\"\"\"\n  FR\n\n  \"\"\"Western Frisian.\"\"\"\n  FY\n\n  \"\"\"Irish.\"\"\"\n  GA\n\n  \"\"\"Scottish Gaelic.\"\"\"\n  GD\n\n  \"\"\"Galician.\"\"\"\n  GL\n\n  \"\"\"Gujarati.\"\"\"\n  GU\n\n  \"\"\"Manx.\"\"\"\n  GV\n\n  \"\"\"Hausa.\"\"\"\n  HA\n\n  \"\"\"Hebrew.\"\"\"\n  HE\n\n  \"\"\"Hindi.\"\"\"\n  HI\n\n  \"\"\"Croatian.\"\"\"\n  HR\n\n  \"\"\"Hungarian.\"\"\"\n  HU\n\n  \"\"\"Armenian.\"\"\"\n  HY\n\n  \"\"\"Interlingua.\"\"\"\n  IA\n\n  \"\"\"Indonesian.\"\"\"\n  ID\n\n  \"\"\"Igbo.\"\"\"\n  IG\n\n  \"\"\"Sichuan Yi.\"\"\"\n  II\n\n  \"\"\"Icelandic.\"\"\"\n  IS\n\n  \"\"\"Italian.\"\"\"\n  IT\n\n  \"\"\"Japanese.\"\"\"\n  JA\n\n  \"\"\"Javanese.\"\"\"\n  JV\n\n  \"\"\"Georgian.\"\"\"\n  KA\n\n  \"\"\"Kikuyu.\"\"\"\n  KI\n\n  \"\"\"Kazakh.\"\"\"\n  KK\n\n  \"\"\"Kalaallisut.\"\"\"\n  KL\n\n  \"\"\"Khmer.\"\"\"\n  KM\n\n  \"\"\"Kannada.\"\"\"\n  KN\n\n  \"\"\"Korean.\"\"\"\n  KO\n\n  \"\"\"Kashmiri.\"\"\"\n  KS\n\n  \"\"\"Kurdish.\"\"\"\n  KU\n\n  \"\"\"Cornish.\"\"\"\n  KW\n\n  \"\"\"Kyrgyz.\"\"\"\n  KY\n\n  \"\"\"Luxembourgish.\"\"\"\n  LB\n\n  \"\"\"Ganda.\"\"\"\n  LG\n\n  \"\"\"Lingala.\"\"\"\n  LN\n\n  \"\"\"Lao.\"\"\"\n  LO\n\n  \"\"\"Lithuanian.\"\"\"\n  LT\n\n  \"\"\"Luba-Katanga.\"\"\"\n  LU\n\n  \"\"\"Latvian.\"\"\"\n  LV\n\n  \"\"\"Malagasy.\"\"\"\n  MG\n\n  \"\"\"M\u0101ori.\"\"\"\n  MI\n\n  \"\"\"Macedonian.\"\"\"\n  MK\n\n  \"\"\"Malayalam.\"\"\"\n  ML\n\n  \"\"\"Mongolian.\"\"\"\n  MN\n\n  \"\"\"Marathi.\"\"\"\n  MR\n\n  \"\"\"Malay.\"\"\"\n  MS\n\n  \"\"\"Maltese.\"\"\"\n  MT\n\n  \"\"\"Burmese.\"\"\"\n  MY\n\n  \"\"\"Norwegian (Bokm\xE5l).\"\"\"\n  NB\n\n  \"\"\"North Ndebele.\"\"\"\n  ND\n\n  \"\"\"Nepali.\"\"\"\n  NE\n\n  \"\"\"Dutch.\"\"\"\n  NL\n\n  \"\"\"Norwegian Nynorsk.\"\"\"\n  NN\n\n  \"\"\"Norwegian.\"\"\"\n  NO\n\n  \"\"\"Oromo.\"\"\"\n  OM\n\n  \"\"\"Odia.\"\"\"\n  OR\n\n  \"\"\"Ossetic.\"\"\"\n  OS\n\n  \"\"\"Punjabi.\"\"\"\n  PA\n\n  \"\"\"Polish.\"\"\"\n  PL\n\n  \"\"\"Pashto.\"\"\"\n  PS\n\n  \"\"\"Portuguese (Brazil).\"\"\"\n  PT_BR\n\n  \"\"\"Portuguese (Portugal).\"\"\"\n  PT_PT\n\n  \"\"\"Quechua.\"\"\"\n  QU\n\n  \"\"\"Romansh.\"\"\"\n  RM\n\n  \"\"\"Rundi.\"\"\"\n  RN\n\n  \"\"\"Romanian.\"\"\"\n  RO\n\n  \"\"\"Russian.\"\"\"\n  RU\n\n  \"\"\"Kinyarwanda.\"\"\"\n  RW\n\n  \"\"\"Sanskrit.\"\"\"\n  SA\n\n  \"\"\"Sardinian.\"\"\"\n  SC\n\n  \"\"\"Sindhi.\"\"\"\n  SD\n\n  \"\"\"Northern Sami.\"\"\"\n  SE\n\n  \"\"\"Sango.\"\"\"\n  SG\n\n  \"\"\"Sinhala.\"\"\"\n  SI\n\n  \"\"\"Slovak.\"\"\"\n  SK\n\n  \"\"\"Slovenian.\"\"\"\n  SL\n\n  \"\"\"Shona.\"\"\"\n  SN\n\n  \"\"\"Somali.\"\"\"\n  SO\n\n  \"\"\"Albanian.\"\"\"\n  SQ\n\n  \"\"\"Serbian.\"\"\"\n  SR\n\n  \"\"\"Sundanese.\"\"\"\n  SU\n\n  \"\"\"Swedish.\"\"\"\n  SV\n\n  \"\"\"Swahili.\"\"\"\n  SW\n\n  \"\"\"Tamil.\"\"\"\n  TA\n\n  \"\"\"Telugu.\"\"\"\n  TE\n\n  \"\"\"Tajik.\"\"\"\n  TG\n\n  \"\"\"Thai.\"\"\"\n  TH\n\n  \"\"\"Tigrinya.\"\"\"\n  TI\n\n  \"\"\"Turkmen.\"\"\"\n  TK\n\n  \"\"\"Tongan.\"\"\"\n  TO\n\n  \"\"\"Turkish.\"\"\"\n  TR\n\n  \"\"\"Tatar.\"\"\"\n  TT\n\n  \"\"\"Uyghur.\"\"\"\n  UG\n\n  \"\"\"Ukrainian.\"\"\"\n  UK\n\n  \"\"\"Urdu.\"\"\"\n  UR\n\n  \"\"\"Uzbek.\"\"\"\n  UZ\n\n  \"\"\"Vietnamese.\"\"\"\n  VI\n\n  \"\"\"Wolof.\"\"\"\n  WO\n\n  \"\"\"Xhosa.\"\"\"\n  XH\n\n  \"\"\"Yiddish.\"\"\"\n  YI\n\n  \"\"\"Yoruba.\"\"\"\n  YO\n\n  \"\"\"Chinese (Simplified).\"\"\"\n  ZH_CN\n\n  \"\"\"Chinese (Traditional).\"\"\"\n  ZH_TW\n\n  \"\"\"Zulu.\"\"\"\n  ZU\n\n  \"\"\"Chinese.\"\"\"\n  ZH\n\n  \"\"\"Portuguese.\"\"\"\n  PT\n\n  \"\"\"Church Slavic.\"\"\"\n  CU\n\n  \"\"\"Volap\xFCk.\"\"\"\n  VO\n\n  \"\"\"Latin.\"\"\"\n  LA\n\n  \"\"\"Serbo-Croatian.\"\"\"\n  SH\n\n  \"\"\"Moldavian.\"\"\"\n  MO\n}\n\n\"\"\"Information about the localized experiences configured for the shop.\"\"\"\ntype Localization {\n  \"\"\"The list of countries with enabled localized experiences.\"\"\"\n  availableCountries: [Country!]!\n\n  \"\"\"The list of languages available for the active country.\"\"\"\n  availableLanguages: [Language!]!\n\n  \"\"\"\n  The country of the active localized experience. Use the `@inContext` directive to change this value.\n  \"\"\"\n  country: Country!\n\n  \"\"\"\n  The language of the active localized experience. Use the `@inContext` directive to change this value.\n  \"\"\"\n  language: Language!\n\n  \"\"\"\n  The market including the country of the active localized experience. Use the `@inContext` directive to change this value.\n  \"\"\"\n  market: Market!\n}\n\n\"\"\"Represents a location where product inventory is held.\"\"\"\ntype Location implements HasMetafields & Node {\n  \"\"\"The address of the location.\"\"\"\n  address: LocationAddress!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"The name of the location.\"\"\"\n  name: String!\n}\n\n\"Represents the address of a location.\\n\"\ntype LocationAddress {\n  \"\"\"The first line of the address for the location.\"\"\"\n  address1: String\n\n  \"\"\"The second line of the address for the location.\"\"\"\n  address2: String\n\n  \"\"\"The city of the location.\"\"\"\n  city: String\n\n  \"\"\"The country of the location.\"\"\"\n  country: String\n\n  \"\"\"The country code of the location.\"\"\"\n  countryCode: String\n\n  \"\"\"A formatted version of the address for the location.\"\"\"\n  formatted: [String!]!\n\n  \"\"\"The latitude coordinates of the location.\"\"\"\n  latitude: Float\n\n  \"\"\"The longitude coordinates of the location.\"\"\"\n  longitude: Float\n\n  \"\"\"The phone number of the location.\"\"\"\n  phone: String\n\n  \"\"\"The province of the location.\"\"\"\n  province: String\n\n  \"The code for the province, state, or district of the address of the location.\\n\"\n  provinceCode: String\n\n  \"\"\"The ZIP code of the location.\"\"\"\n  zip: String\n}\n\n\"An auto-generated type for paginating through multiple Locations.\\n\"\ntype LocationConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [LocationEdge!]!\n\n  \"\"\"A list of the nodes contained in LocationEdge.\"\"\"\n  nodes: [Location!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Location and a cursor during pagination.\\n\"\ntype LocationEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of LocationEdge.\"\"\"\n  node: Location!\n}\n\n\"\"\"The set of valid sort keys for the Location query.\"\"\"\nenum LocationSortKeys {\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"\"\"Sort by the `name` value.\"\"\"\n  NAME\n\n  \"\"\"Sort by the `city` value.\"\"\"\n  CITY\n\n  \"\"\"Sort by the `distance` value.\"\"\"\n  DISTANCE\n}\n\n\"\"\"Represents a mailing address for customers and shipping.\"\"\"\ntype MailingAddress implements Node {\n  \"\"\"\n  The first line of the address. Typically the street address or PO Box number.\n  \"\"\"\n  address1: String\n\n  \"The second line of the address. Typically the number of the apartment, suite, or unit.\\n\"\n  address2: String\n\n  \"\"\"The name of the city, district, village, or town.\"\"\"\n  city: String\n\n  \"\"\"The name of the customer's company or organization.\"\"\"\n  company: String\n\n  \"\"\"The name of the country.\"\"\"\n  country: String\n\n  \"The two-letter code for the country of the address.\\n\\nFor example, US.\\n\"\n  countryCode: String @deprecated(reason: \"Use `countryCodeV2` instead.\")\n\n  \"The two-letter code for the country of the address.\\n\\nFor example, US.\\n\"\n  countryCodeV2: CountryCode\n\n  \"\"\"The first name of the customer.\"\"\"\n  firstName: String\n\n  \"\"\"\n  A formatted version of the address, customized by the provided arguments.\n  \"\"\"\n  formatted(\n    \"\"\"Whether to include the customer's name in the formatted address.\"\"\"\n    withName: Boolean = false\n\n    \"\"\"Whether to include the customer's company in the formatted address.\"\"\"\n    withCompany: Boolean = true\n  ): [String!]!\n\n  \"\"\"A comma-separated list of the values for city, province, and country.\"\"\"\n  formattedArea: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The last name of the customer.\"\"\"\n  lastName: String\n\n  \"\"\"The latitude coordinate of the customer address.\"\"\"\n  latitude: Float\n\n  \"\"\"The longitude coordinate of the customer address.\"\"\"\n  longitude: Float\n\n  \"\"\"The full name of the customer, based on firstName and lastName.\"\"\"\n  name: String\n\n  \"A unique phone number for the customer.\\n\\nFormatted using E.164 standard. For example, _+16135551111_.\\n\"\n  phone: String\n\n  \"\"\"The region of the address, such as the province, state, or district.\"\"\"\n  province: String\n\n  \"The alphanumeric code for the region.\\n\\nFor example, ON.\\n\"\n  provinceCode: String\n\n  \"\"\"The zip or postal code of the address.\"\"\"\n  zip: String\n}\n\n\"An auto-generated type for paginating through multiple MailingAddresses.\\n\"\ntype MailingAddressConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [MailingAddressEdge!]!\n\n  \"\"\"A list of the nodes contained in MailingAddressEdge.\"\"\"\n  nodes: [MailingAddress!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one MailingAddress and a cursor during pagination.\\n\"\ntype MailingAddressEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of MailingAddressEdge.\"\"\"\n  node: MailingAddress!\n}\n\n\"\"\"The input fields to create or update a mailing address.\"\"\"\ninput MailingAddressInput {\n  \"The first line of the address. Typically the street address or PO Box number.\\n\"\n  address1: String\n\n  \"The second line of the address. Typically the number of the apartment, suite, or unit.\\n\"\n  address2: String\n\n  \"The name of the city, district, village, or town.\\n\"\n  city: String\n\n  \"The name of the customer's company or organization.\\n\"\n  company: String\n\n  \"\"\"The name of the country.\"\"\"\n  country: String\n\n  \"\"\"The first name of the customer.\"\"\"\n  firstName: String\n\n  \"\"\"The last name of the customer.\"\"\"\n  lastName: String\n\n  \"A unique phone number for the customer.\\n\\nFormatted using E.164 standard. For example, _+16135551111_.\\n\"\n  phone: String\n\n  \"\"\"The region of the address, such as the province, state, or district.\"\"\"\n  province: String\n\n  \"\"\"The zip or postal code of the address.\"\"\"\n  zip: String\n}\n\n\"Manual discount applications capture the intentions of a discount that was manually created.\\n\"\ntype ManualDiscountApplication implements DiscountApplication {\n  \"\"\"\n  The method by which the discount's value is allocated to its entitled items.\n  \"\"\"\n  allocationMethod: DiscountApplicationAllocationMethod!\n\n  \"\"\"The description of the application.\"\"\"\n  description: String\n\n  \"\"\"Which lines of targetType that the discount is allocated over.\"\"\"\n  targetSelection: DiscountApplicationTargetSelection!\n\n  \"\"\"The type of line that the discount is applicable towards.\"\"\"\n  targetType: DiscountApplicationTargetType!\n\n  \"\"\"The title of the application.\"\"\"\n  title: String!\n\n  \"\"\"The value of the discount application.\"\"\"\n  value: PricingValue!\n}\n\n\"\"\"\nA group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets).\n\"\"\"\ntype Market implements HasMetafields & Node {\n  \"A human-readable unique string for the market automatically generated from its title.\\n\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n}\n\n\"\"\"Represents a media interface.\"\"\"\ninterface Media {\n  \"\"\"A word or phrase to share the nature or contents of a media.\"\"\"\n  alt: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The media content type.\"\"\"\n  mediaContentType: MediaContentType!\n\n  \"\"\"The presentation for a media.\"\"\"\n  presentation: MediaPresentation\n\n  \"\"\"The preview image for the media.\"\"\"\n  previewImage: Image\n}\n\n\"An auto-generated type for paginating through multiple Media.\\n\"\ntype MediaConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [MediaEdge!]!\n\n  \"\"\"A list of the nodes contained in MediaEdge.\"\"\"\n  nodes: [Media!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"\"\"The possible content types for a media object.\"\"\"\nenum MediaContentType {\n  \"\"\"An externally hosted video.\"\"\"\n  EXTERNAL_VIDEO\n\n  \"\"\"A Shopify hosted image.\"\"\"\n  IMAGE\n\n  \"\"\"A 3d model.\"\"\"\n  MODEL_3D\n\n  \"\"\"A Shopify hosted video.\"\"\"\n  VIDEO\n}\n\n\"An auto-generated type which holds one Media and a cursor during pagination.\\n\"\ntype MediaEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of MediaEdge.\"\"\"\n  node: Media!\n}\n\n\"\"\"Host for a Media Resource.\"\"\"\nenum MediaHost {\n  \"\"\"Host for YouTube embedded videos.\"\"\"\n  YOUTUBE\n\n  \"\"\"Host for Vimeo embedded videos.\"\"\"\n  VIMEO\n}\n\n\"\"\"Represents a Shopify hosted image.\"\"\"\ntype MediaImage implements Media & Node {\n  \"\"\"A word or phrase to share the nature or contents of a media.\"\"\"\n  alt: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The image for the media.\"\"\"\n  image: Image\n\n  \"\"\"The media content type.\"\"\"\n  mediaContentType: MediaContentType!\n\n  \"\"\"The presentation for a media.\"\"\"\n  presentation: MediaPresentation\n\n  \"\"\"The preview image for the media.\"\"\"\n  previewImage: Image\n}\n\n\"\"\"A media presentation.\"\"\"\ntype MediaPresentation implements Node {\n  \"\"\"A JSON object representing a presentation view.\"\"\"\n  asJson(\n    \"\"\"The format to transform the settings.\"\"\"\n    format: MediaPresentationFormat!\n  ): JSON\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n}\n\n\"\"\"The possible formats for a media presentation.\"\"\"\nenum MediaPresentationFormat {\n  \"\"\"A model viewer presentation.\"\"\"\n  MODEL_VIEWER\n\n  \"\"\"A media image presentation.\"\"\"\n  IMAGE\n}\n\n\"A [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) representing a hierarchy\\nof hyperlinks (items).\\n\"\ntype Menu implements Node {\n  \"\"\"The menu's handle.\"\"\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The menu's child items.\"\"\"\n  items: [MenuItem!]!\n\n  \"\"\"The count of items on the menu.\"\"\"\n  itemsCount: Int!\n\n  \"\"\"The menu's title.\"\"\"\n  title: String!\n}\n\n\"\"\"A menu item within a parent menu.\"\"\"\ntype MenuItem implements Node {\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The menu item's child items.\"\"\"\n  items: [MenuItem!]!\n\n  \"\"\"The linked resource.\"\"\"\n  resource: MenuItemResource\n\n  \"\"\"The ID of the linked resource.\"\"\"\n  resourceId: ID\n\n  \"\"\"The menu item's tags to filter a collection.\"\"\"\n  tags: [String!]!\n\n  \"\"\"The menu item's title.\"\"\"\n  title: String!\n\n  \"\"\"The menu item's type.\"\"\"\n  type: MenuItemType!\n\n  \"\"\"The menu item's URL.\"\"\"\n  url: URL\n}\n\n\"The list of possible resources a `MenuItem` can reference.\\n\"\nunion MenuItemResource = Article | Blog | Collection | Metaobject | Page | Product | ShopPolicy\n\n\"\"\"A menu item type.\"\"\"\nenum MenuItemType {\n  \"\"\"A frontpage link.\"\"\"\n  FRONTPAGE\n\n  \"\"\"A collection link.\"\"\"\n  COLLECTION\n\n  \"\"\"A collection link.\"\"\"\n  COLLECTIONS\n\n  \"\"\"A product link.\"\"\"\n  PRODUCT\n\n  \"\"\"A catalog link.\"\"\"\n  CATALOG\n\n  \"\"\"A page link.\"\"\"\n  PAGE\n\n  \"\"\"A blog link.\"\"\"\n  BLOG\n\n  \"\"\"An article link.\"\"\"\n  ARTICLE\n\n  \"\"\"A search link.\"\"\"\n  SEARCH\n\n  \"\"\"A shop policy link.\"\"\"\n  SHOP_POLICY\n\n  \"\"\"An http link.\"\"\"\n  HTTP\n\n  \"\"\"A metaobject page link.\"\"\"\n  METAOBJECT\n}\n\n\"\"\"The merchandise to be purchased at checkout.\"\"\"\nunion Merchandise = ProductVariant\n\n\"Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are\\ncomprised of keys, values, and value types.\\n\"\ntype Metafield implements Node {\n  \"\"\"The date and time when the storefront metafield was created.\"\"\"\n  createdAt: DateTime!\n\n  \"\"\"The description of a metafield.\"\"\"\n  description: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The unique identifier for the metafield within its namespace.\"\"\"\n  key: String!\n\n  \"\"\"\n  The container for a group of metafields that the metafield is associated with.\n  \"\"\"\n  namespace: String!\n\n  \"\"\"The type of resource that the metafield is attached to.\"\"\"\n  parentResource: MetafieldParentResource!\n\n  \"\"\"\n  Returns a reference object if the metafield's type is a resource reference.\n  \"\"\"\n  reference: MetafieldReference\n\n  \"\"\"\n  A list of reference objects if the metafield's type is a resource reference list.\n  \"\"\"\n  references(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n  ): MetafieldReferenceConnection\n\n  \"The type name of the metafield.\\nRefer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).\\n\"\n  type: String!\n\n  \"\"\"The date and time when the metafield was last updated.\"\"\"\n  updatedAt: DateTime!\n\n  \"\"\"\n  The data stored in the metafield. Always stored as a string, regardless of the metafield's type.\n  \"\"\"\n  value: String!\n}\n\n\"\"\"\nPossible error codes that can be returned by `MetafieldDeleteUserError`.\n\"\"\"\nenum MetafieldDeleteErrorCode {\n  \"\"\"The owner ID is invalid.\"\"\"\n  INVALID_OWNER\n\n  \"\"\"Metafield not found.\"\"\"\n  METAFIELD_DOES_NOT_EXIST\n}\n\n\"\"\"An error that occurs during the execution of cart metafield deletion.\"\"\"\ntype MetafieldDeleteUserError implements DisplayableError {\n  \"\"\"The error code.\"\"\"\n  code: MetafieldDeleteErrorCode\n\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"A filter used to view a subset of products in a collection matching a specific metafield value.\\n\\nOnly the following metafield types are currently supported:\\n- `number_integer`\\n- `number_decimal`\\n- `single_line_text_field`\\n- `boolean` as of 2022-04.\\n\"\ninput MetafieldFilter {\n  \"\"\"The namespace of the metafield to filter on.\"\"\"\n  namespace: String!\n\n  \"\"\"The key of the metafield to filter on.\"\"\"\n  key: String!\n\n  \"\"\"The value of the metafield.\"\"\"\n  value: String!\n}\n\n\"\"\"A resource that the metafield belongs to.\"\"\"\nunion MetafieldParentResource = Article | Blog | Cart | Collection | Company | CompanyLocation | Customer | Location | Market | Order | Page | Product | ProductVariant | Shop\n\n\"Returns the resource which is being referred to by a metafield.\\n\"\nunion MetafieldReference = Collection | GenericFile | MediaImage | Metaobject | Model3d | Page | Product | ProductVariant | Video\n\n\"An auto-generated type for paginating through multiple MetafieldReferences.\\n\"\ntype MetafieldReferenceConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [MetafieldReferenceEdge!]!\n\n  \"\"\"A list of the nodes contained in MetafieldReferenceEdge.\"\"\"\n  nodes: [MetafieldReference!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one MetafieldReference and a cursor during pagination.\\n\"\ntype MetafieldReferenceEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of MetafieldReferenceEdge.\"\"\"\n  node: MetafieldReference!\n}\n\n\"\"\"An error that occurs during the execution of `MetafieldsSet`.\"\"\"\ntype MetafieldsSetUserError implements DisplayableError {\n  \"\"\"The error code.\"\"\"\n  code: MetafieldsSetUserErrorCode\n\n  \"\"\"The index of the array element that's causing the error.\"\"\"\n  elementIndex: Int\n\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"\"\"Possible error codes that can be returned by `MetafieldsSetUserError`.\"\"\"\nenum MetafieldsSetUserErrorCode {\n  \"\"\"The input value is blank.\"\"\"\n  BLANK\n\n  \"\"\"The input value isn't included in the list.\"\"\"\n  INCLUSION\n\n  \"\"\"\n  The input value should be less than or equal to the maximum value allowed.\n  \"\"\"\n  LESS_THAN_OR_EQUAL_TO\n\n  \"\"\"The input value needs to be blank.\"\"\"\n  PRESENT\n\n  \"\"\"The input value is too short.\"\"\"\n  TOO_SHORT\n\n  \"\"\"The input value is too long.\"\"\"\n  TOO_LONG\n\n  \"\"\"The owner ID is invalid.\"\"\"\n  INVALID_OWNER\n\n  \"\"\"The value is invalid for metafield type or for definition options.\"\"\"\n  INVALID_VALUE\n\n  \"\"\"The type is invalid.\"\"\"\n  INVALID_TYPE\n}\n\n\"\"\"An instance of a user-defined model based on a MetaobjectDefinition.\"\"\"\ntype Metaobject implements Node & OnlineStorePublishable {\n  \"\"\"Accesses a field of the object by key.\"\"\"\n  field(\n    \"\"\"The key of the field.\"\"\"\n    key: String!\n  ): MetaobjectField\n\n  \"All object fields with defined values.\\nOmitted object keys can be assumed null, and no guarantees are made about field order.\\n\"\n  fields: [MetaobjectField!]!\n\n  \"\"\"The unique handle of the metaobject. Useful as a custom ID.\"\"\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"\n  The URL used for viewing the metaobject on the shop's Online Store. Returns `null` if the metaobject definition doesn't have the `online_store` capability.\n  \"\"\"\n  onlineStoreUrl: URL\n\n  \"The metaobject's SEO information. Returns `null` if the metaobject definition\\ndoesn't have the `renderable` capability.\\n\"\n  seo: MetaobjectSEO\n\n  \"\"\"\n  The type of the metaobject. Defines the namespace of its associated metafields.\n  \"\"\"\n  type: String!\n\n  \"\"\"The date and time when the metaobject was last updated.\"\"\"\n  updatedAt: DateTime!\n}\n\n\"An auto-generated type for paginating through multiple Metaobjects.\\n\"\ntype MetaobjectConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [MetaobjectEdge!]!\n\n  \"\"\"A list of the nodes contained in MetaobjectEdge.\"\"\"\n  nodes: [Metaobject!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Metaobject and a cursor during pagination.\\n\"\ntype MetaobjectEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of MetaobjectEdge.\"\"\"\n  node: Metaobject!\n}\n\n\"\"\"Provides the value of a Metaobject field.\"\"\"\ntype MetaobjectField {\n  \"\"\"The field key.\"\"\"\n  key: String!\n\n  \"\"\"A referenced object if the field type is a resource reference.\"\"\"\n  reference: MetafieldReference\n\n  \"\"\"\n  A list of referenced objects if the field type is a resource reference list.\n  \"\"\"\n  references(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n  ): MetafieldReferenceConnection\n\n  \"The type name of the field.\\nSee the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).\\n\"\n  type: String!\n\n  \"\"\"The field value.\"\"\"\n  value: String\n}\n\n\"\"\"The input fields used to retrieve a metaobject by handle.\"\"\"\ninput MetaobjectHandleInput {\n  \"\"\"The handle of the metaobject.\"\"\"\n  handle: String!\n\n  \"\"\"The type of the metaobject.\"\"\"\n  type: String!\n}\n\n\"\"\"SEO information for a metaobject.\"\"\"\ntype MetaobjectSEO {\n  \"\"\"The meta description.\"\"\"\n  description: MetaobjectField\n\n  \"\"\"The SEO title.\"\"\"\n  title: MetaobjectField\n}\n\n\"\"\"Represents a Shopify hosted 3D model.\"\"\"\ntype Model3d implements Media & Node {\n  \"\"\"A word or phrase to share the nature or contents of a media.\"\"\"\n  alt: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The media content type.\"\"\"\n  mediaContentType: MediaContentType!\n\n  \"\"\"The presentation for a media.\"\"\"\n  presentation: MediaPresentation\n\n  \"\"\"The preview image for the media.\"\"\"\n  previewImage: Image\n\n  \"\"\"The sources for a 3d model.\"\"\"\n  sources: [Model3dSource!]!\n}\n\n\"\"\"Represents a source for a Shopify hosted 3d model.\"\"\"\ntype Model3dSource {\n  \"\"\"The filesize of the 3d model.\"\"\"\n  filesize: Int!\n\n  \"\"\"The format of the 3d model.\"\"\"\n  format: String!\n\n  \"\"\"The MIME type of the 3d model.\"\"\"\n  mimeType: String!\n\n  \"\"\"The URL of the 3d model.\"\"\"\n  url: String!\n}\n\n\"\"\"The input fields for a monetary value with currency.\"\"\"\ninput MoneyInput {\n  \"\"\"Decimal money amount.\"\"\"\n  amount: Decimal!\n\n  \"\"\"Currency of the money.\"\"\"\n  currencyCode: CurrencyCode!\n}\n\n\"A monetary value with currency.\\n\"\ntype MoneyV2 {\n  \"\"\"Decimal money amount.\"\"\"\n  amount: Decimal!\n\n  \"\"\"Currency of the money.\"\"\"\n  currencyCode: CurrencyCode!\n}\n\n\"\"\"\nThe schema\u2019s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.\n\"\"\"\ntype Mutation {\n  \"\"\"Updates the attributes on a cart.\"\"\"\n  cartAttributesUpdate(\n    \"\"\"\n    An array of key-value pairs that contains additional information about the cart.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    attributes: [AttributeInput!]!\n\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n  ): CartAttributesUpdatePayload\n\n  \"Updates customer information associated with a cart.\\nBuyer identity is used to determine\\n[international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)\\nand should match the customer's shipping address.\\n\"\n  cartBuyerIdentityUpdate(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"The customer associated with the cart. Used to determine\\n[international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).\\nBuyer identity should match the customer's shipping address.\\n\"\n    buyerIdentity: CartBuyerIdentityInput!\n  ): CartBuyerIdentityUpdatePayload\n\n  \"\"\"Creates a new cart.\"\"\"\n  cartCreate(\n    \"\"\"The fields used to create a cart.\"\"\"\n    input: CartInput\n  ): CartCreatePayload\n\n  \"\"\"Updates the discount codes applied to the cart.\"\"\"\n  cartDiscountCodesUpdate(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"\"\"\n    The case-insensitive discount codes that the customer added at checkout.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    discountCodes: [String!]\n  ): CartDiscountCodesUpdatePayload\n\n  \"\"\"Adds a merchandise line to the cart.\"\"\"\n  cartLinesAdd(\n    \"\"\"\n    A list of merchandise lines to add to the cart.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lines: [CartLineInput!]!\n\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n  ): CartLinesAddPayload\n\n  \"\"\"Removes one or more merchandise lines from the cart.\"\"\"\n  cartLinesRemove(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"\"\"\n    The merchandise line IDs to remove.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lineIds: [ID!]!\n  ): CartLinesRemovePayload\n\n  \"\"\"Updates one or more merchandise lines on a cart.\"\"\"\n  cartLinesUpdate(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"\"\"\n    The merchandise lines to update.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lines: [CartLineUpdateInput!]!\n  ): CartLinesUpdatePayload\n\n  \"\"\"Deletes a cart metafield.\"\"\"\n  cartMetafieldDelete(\n    \"\"\"The input fields used to delete a cart metafield.\"\"\"\n    input: CartMetafieldDeleteInput!\n  ): CartMetafieldDeletePayload\n\n  \"Sets cart metafield values. Cart metafield values will be set regardless if they were previously created or not.\\n\\nAllows a maximum of 25 cart metafields to be set at a time.\\n\"\n  cartMetafieldsSet(\n    \"\"\"\n    The list of Cart metafield values to set. Maximum of 25.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    metafields: [CartMetafieldsSetInput!]!\n  ): CartMetafieldsSetPayload\n\n  \"\"\"Updates the note on the cart.\"\"\"\n  cartNoteUpdate(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"\"\"The note on the cart.\"\"\"\n    note: String!\n  ): CartNoteUpdatePayload\n\n  \"\"\"Update the customer's payment method that will be used to checkout.\"\"\"\n  cartPaymentUpdate(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"\"\"The payment information for the cart that will be used at checkout.\"\"\"\n    payment: CartPaymentInput!\n  ): CartPaymentUpdatePayload\n\n  \"\"\"Update the selected delivery options for a delivery group.\"\"\"\n  cartSelectedDeliveryOptionsUpdate(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"\"\"\n    The selected delivery options.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!\n  ): CartSelectedDeliveryOptionsUpdatePayload\n\n  \"\"\"Submit the cart for checkout completion.\"\"\"\n  cartSubmitForCompletion(\n    \"\"\"The ID of the cart.\"\"\"\n    cartId: ID!\n\n    \"The attemptToken is used to guarantee an idempotent result.\\nIf more than one call uses the same attemptToken within a short period of time, only one will be accepted.\\n\"\n    attemptToken: String!\n  ): CartSubmitForCompletionPayload\n\n  \"\"\"\n  Updates the attributes of a checkout if `allowPartialAddresses` is `true`.\n  \"\"\"\n  checkoutAttributesUpdateV2(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"The checkout attributes to update.\"\"\"\n    input: CheckoutAttributesUpdateV2Input!\n  ): CheckoutAttributesUpdateV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"\n  Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card.\n  \"\"\"\n  checkoutCompleteFree(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutCompleteFreePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"\n  Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing).\n  \"\"\"\n  checkoutCompleteWithCreditCardV2(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"The credit card info to apply as a payment.\"\"\"\n    payment: CreditCardPaymentInputV2!\n  ): CheckoutCompleteWithCreditCardV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Completes a checkout with a tokenized payment.\"\"\"\n  checkoutCompleteWithTokenizedPaymentV3(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"The info to apply as a tokenized payment.\"\"\"\n    payment: TokenizedPaymentInputV3!\n  ): CheckoutCompleteWithTokenizedPaymentV3Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Creates a new checkout.\"\"\"\n  checkoutCreate(\n    \"\"\"The fields used to create a checkout.\"\"\"\n    input: CheckoutCreateInput!\n\n    \"\"\"The checkout queue token. Available only to selected stores.\"\"\"\n    queueToken: String\n  ): CheckoutCreatePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Associates a customer to the checkout.\"\"\"\n  checkoutCustomerAssociateV2(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"The customer access token of the customer to associate.\"\"\"\n    customerAccessToken: String!\n  ): CheckoutCustomerAssociateV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Disassociates the current checkout customer from the checkout.\"\"\"\n  checkoutCustomerDisassociateV2(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutCustomerDisassociateV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Applies a discount to an existing checkout using a discount code.\"\"\"\n  checkoutDiscountCodeApplyV2(\n    \"\"\"The discount code to apply to the checkout.\"\"\"\n    discountCode: String!\n\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutDiscountCodeApplyV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Removes the applied discounts from an existing checkout.\"\"\"\n  checkoutDiscountCodeRemove(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutDiscountCodeRemovePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Updates the email on an existing checkout.\"\"\"\n  checkoutEmailUpdateV2(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"The email to update the checkout with.\"\"\"\n    email: String!\n  ): CheckoutEmailUpdateV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Removes an applied gift card from the checkout.\"\"\"\n  checkoutGiftCardRemoveV2(\n    \"\"\"The ID of the Applied Gift Card to remove from the Checkout.\"\"\"\n    appliedGiftCardId: ID!\n\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutGiftCardRemoveV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Appends gift cards to an existing checkout.\"\"\"\n  checkoutGiftCardsAppend(\n    \"\"\"\n    A list of gift card codes to append to the checkout.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    giftCardCodes: [String!]!\n\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutGiftCardsAppendPayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Adds a list of line items to a checkout.\"\"\"\n  checkoutLineItemsAdd(\n    \"\"\"\n    A list of line item objects to add to the checkout.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lineItems: [CheckoutLineItemInput!]!\n\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutLineItemsAddPayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Removes line items from an existing checkout.\"\"\"\n  checkoutLineItemsRemove(\n    \"\"\"The checkout on which to remove line items.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"\n    Line item ids to remove.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lineItemIds: [ID!]!\n  ): CheckoutLineItemsRemovePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Sets a list of line items to a checkout.\"\"\"\n  checkoutLineItemsReplace(\n    \"\"\"\n    A list of line item objects to set on the checkout.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lineItems: [CheckoutLineItemInput!]!\n\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutLineItemsReplacePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Updates line items on a checkout.\"\"\"\n  checkoutLineItemsUpdate(\n    \"\"\"The checkout on which to update line items.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"\n    Line items to update.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    lineItems: [CheckoutLineItemUpdateInput!]!\n  ): CheckoutLineItemsUpdatePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Updates the shipping address of an existing checkout.\"\"\"\n  checkoutShippingAddressUpdateV2(\n    \"\"\"The shipping address to where the line items will be shipped.\"\"\"\n    shippingAddress: MailingAddressInput!\n\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n  ): CheckoutShippingAddressUpdateV2Payload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"\"\"Updates the shipping lines on an existing checkout.\"\"\"\n  checkoutShippingLineUpdate(\n    \"\"\"The ID of the checkout.\"\"\"\n    checkoutId: ID!\n\n    \"\"\"\n    A unique identifier to a Checkout\u2019s shipping provider, price, and title combination, enabling the customer to select the availableShippingRates.\n    \"\"\"\n    shippingRateHandle: String!\n  ): CheckoutShippingLineUpdatePayload @deprecated(reason: \"The Storefront GraphQL Checkout API is deprecated and will be removed in a future version. Please see https://shopify.dev/changelog/deprecation-of-checkout-apis for more information.\")\n\n  \"Creates a customer access token.\\nThe customer access token is required to modify the customer object in any way.\\n\"\n  customerAccessTokenCreate(\n    \"\"\"The fields used to create a customer access token.\"\"\"\n    input: CustomerAccessTokenCreateInput!\n  ): CustomerAccessTokenCreatePayload\n\n  \"Creates a customer access token using a\\n[multipass token](https://shopify.dev/api/multipass) instead of email and\\npassword. A customer record is created if the customer doesn't exist. If a customer\\nrecord already exists but the record is disabled, then the customer record is enabled.\\n\"\n  customerAccessTokenCreateWithMultipass(\n    \"\"\"\n    A valid [multipass token](https://shopify.dev/api/multipass) to be authenticated.\n    \"\"\"\n    multipassToken: String!\n  ): CustomerAccessTokenCreateWithMultipassPayload\n\n  \"\"\"Permanently destroys a customer access token.\"\"\"\n  customerAccessTokenDelete(\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n  ): CustomerAccessTokenDeletePayload\n\n  \"Renews a customer access token.\\n\\nAccess token renewal must happen *before* a token expires.\\nIf a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.\\n\"\n  customerAccessTokenRenew(\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n  ): CustomerAccessTokenRenewPayload\n\n  \"\"\"Activates a customer.\"\"\"\n  customerActivate(\n    \"\"\"Specifies the customer to activate.\"\"\"\n    id: ID!\n\n    \"\"\"The fields used to activate a customer.\"\"\"\n    input: CustomerActivateInput!\n  ): CustomerActivatePayload\n\n  \"\"\"\n  Activates a customer with the activation url received from `customerCreate`.\n  \"\"\"\n  customerActivateByUrl(\n    \"\"\"The customer activation URL.\"\"\"\n    activationUrl: URL!\n\n    \"\"\"A new password set during activation.\"\"\"\n    password: String!\n  ): CustomerActivateByUrlPayload\n\n  \"\"\"Creates a new address for a customer.\"\"\"\n  customerAddressCreate(\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n\n    \"\"\"The customer mailing address to create.\"\"\"\n    address: MailingAddressInput!\n  ): CustomerAddressCreatePayload\n\n  \"\"\"Permanently deletes the address of an existing customer.\"\"\"\n  customerAddressDelete(\n    \"\"\"Specifies the address to delete.\"\"\"\n    id: ID!\n\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n  ): CustomerAddressDeletePayload\n\n  \"\"\"Updates the address of an existing customer.\"\"\"\n  customerAddressUpdate(\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n\n    \"\"\"Specifies the customer address to update.\"\"\"\n    id: ID!\n\n    \"\"\"The customer\u2019s mailing address.\"\"\"\n    address: MailingAddressInput!\n  ): CustomerAddressUpdatePayload\n\n  \"\"\"Creates a new customer.\"\"\"\n  customerCreate(\n    \"\"\"The fields used to create a new customer.\"\"\"\n    input: CustomerCreateInput!\n  ): CustomerCreatePayload\n\n  \"\"\"Updates the default address of an existing customer.\"\"\"\n  customerDefaultAddressUpdate(\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n\n    \"\"\"ID of the address to set as the new default for the customer.\"\"\"\n    addressId: ID!\n  ): CustomerDefaultAddressUpdatePayload\n\n  \"Sends a reset password email to the customer. The reset password\\nemail contains a reset password URL and token that you can pass to\\nthe [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or\\n[`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the\\ncustomer password.\\n\\nThis mutation is throttled by IP. With private access,\\nyou can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.\\nThe header is case-sensitive and must be sent as `Shopify-Storefront-Buyer-IP`.\\n\\nMake sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this\\nmutation presents a security risk.\\n\"\n  customerRecover(\n    \"\"\"The email address of the customer to recover.\"\"\"\n    email: String!\n  ): CustomerRecoverPayload\n\n  \"\\\"Resets a customer\u2019s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation.\\\"\\n\"\n  customerReset(\n    \"\"\"Specifies the customer to reset.\"\"\"\n    id: ID!\n\n    \"\"\"The fields used to reset a customer\u2019s password.\"\"\"\n    input: CustomerResetInput!\n  ): CustomerResetPayload\n\n  \"\\\"Resets a customer\u2019s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation.\\\"\\n\"\n  customerResetByUrl(\n    \"\"\"The customer's reset password url.\"\"\"\n    resetUrl: URL!\n\n    \"\"\"New password that will be set as part of the reset password process.\"\"\"\n    password: String!\n  ): CustomerResetByUrlPayload\n\n  \"\"\"Updates an existing customer.\"\"\"\n  customerUpdate(\n    \"\"\"The access token used to identify the customer.\"\"\"\n    customerAccessToken: String!\n\n    \"\"\"The customer object input.\"\"\"\n    customer: CustomerUpdateInput!\n  ): CustomerUpdatePayload\n}\n\n\"An object with an ID field to support global identification, in accordance with the\\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.\\n\"\ninterface Node {\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n}\n\n\"\"\"\nRepresents a resource that can be published to the Online Store sales channel.\n\"\"\"\ninterface OnlineStorePublishable {\n  \"\"\"\n  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.\n  \"\"\"\n  onlineStoreUrl: URL\n}\n\n\"\"\"\nAn order is a customer\u2019s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.\n\"\"\"\ntype Order implements HasMetafields & Node {\n  \"\"\"The address associated with the payment method.\"\"\"\n  billingAddress: MailingAddress\n\n  \"\"\"\n  The reason for the order's cancellation. Returns `null` if the order wasn't canceled.\n  \"\"\"\n  cancelReason: OrderCancelReason\n\n  \"\"\"\n  The date and time when the order was canceled. Returns null if the order wasn't canceled.\n  \"\"\"\n  canceledAt: DateTime\n\n  \"\"\"The code of the currency used for the payment.\"\"\"\n  currencyCode: CurrencyCode!\n\n  \"\"\"\n  The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes aren't included unless the order is a taxes-included order.\n  \"\"\"\n  currentSubtotalPrice: MoneyV2!\n\n  \"\"\"The total cost of duties for the order, including refunds.\"\"\"\n  currentTotalDuties: MoneyV2\n\n  \"\"\"\n  The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed.\n  \"\"\"\n  currentTotalPrice: MoneyV2!\n\n  \"\"\"\n  The total of all taxes applied to the order, excluding taxes for returned line items.\n  \"\"\"\n  currentTotalTax: MoneyV2!\n\n  \"\"\"A list of the custom attributes added to the order.\"\"\"\n  customAttributes: [Attribute!]!\n\n  \"\"\"The locale code in which this specific order happened.\"\"\"\n  customerLocale: String\n\n  \"\"\"The unique URL that the customer can use to access the order.\"\"\"\n  customerUrl: URL\n\n  \"\"\"Discounts that have been applied on the order.\"\"\"\n  discountApplications(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): DiscountApplicationConnection!\n\n  \"\"\"Whether the order has had any edits applied or not.\"\"\"\n  edited: Boolean!\n\n  \"\"\"The customer's email address.\"\"\"\n  email: String\n\n  \"\"\"The financial status of the order.\"\"\"\n  financialStatus: OrderFinancialStatus\n\n  \"\"\"The fulfillment status for the order.\"\"\"\n  fulfillmentStatus: OrderFulfillmentStatus!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"List of the order\u2019s line items.\"\"\"\n  lineItems(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): OrderLineItemConnection!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"Unique identifier for the order that appears on the order.\\nFor example, _#1000_ or _Store1001.\\n\"\n  name: String!\n\n  \"\"\"\n  A unique numeric identifier for the order for use by shop owner and customer.\n  \"\"\"\n  orderNumber: Int!\n\n  \"\"\"The total cost of duties charged at checkout.\"\"\"\n  originalTotalDuties: MoneyV2\n\n  \"\"\"The total price of the order before any applied edits.\"\"\"\n  originalTotalPrice: MoneyV2!\n\n  \"\"\"The customer's phone number for receiving SMS notifications.\"\"\"\n  phone: String\n\n  \"The date and time when the order was imported.\\nThis value can be set to dates in the past when importing from other systems.\\nIf no value is provided, it will be auto-generated based on current date and time.\\n\"\n  processedAt: DateTime!\n\n  \"\"\"The address to where the order will be shipped.\"\"\"\n  shippingAddress: MailingAddress\n\n  \"The discounts that have been allocated onto the shipping line by discount applications.\\n\"\n  shippingDiscountAllocations: [DiscountAllocation!]!\n\n  \"\"\"The unique URL for the order's status page.\"\"\"\n  statusUrl: URL!\n\n  \"\"\"Price of the order before shipping and taxes.\"\"\"\n  subtotalPrice: MoneyV2\n\n  \"\"\"Price of the order before duties, shipping and taxes.\"\"\"\n  subtotalPriceV2: MoneyV2 @deprecated(reason: \"Use `subtotalPrice` instead.\")\n\n  \"\"\"List of the order\u2019s successful fulfillments.\"\"\"\n  successfulFulfillments(\n    \"\"\"Truncate the array result to this size.\"\"\"\n    first: Int\n  ): [Fulfillment!]\n\n  \"\"\"\n  The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).\n  \"\"\"\n  totalPrice: MoneyV2!\n\n  \"\"\"\n  The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).\n  \"\"\"\n  totalPriceV2: MoneyV2! @deprecated(reason: \"Use `totalPrice` instead.\")\n\n  \"\"\"The total amount that has been refunded.\"\"\"\n  totalRefunded: MoneyV2!\n\n  \"\"\"The total amount that has been refunded.\"\"\"\n  totalRefundedV2: MoneyV2! @deprecated(reason: \"Use `totalRefunded` instead.\")\n\n  \"\"\"The total cost of shipping.\"\"\"\n  totalShippingPrice: MoneyV2!\n\n  \"\"\"The total cost of shipping.\"\"\"\n  totalShippingPriceV2: MoneyV2! @deprecated(reason: \"Use `totalShippingPrice` instead.\")\n\n  \"\"\"The total cost of taxes.\"\"\"\n  totalTax: MoneyV2\n\n  \"\"\"The total cost of taxes.\"\"\"\n  totalTaxV2: MoneyV2 @deprecated(reason: \"Use `totalTax` instead.\")\n}\n\n\"\"\"Represents the reason for the order's cancellation.\"\"\"\nenum OrderCancelReason {\n  \"\"\"The customer wanted to cancel the order.\"\"\"\n  CUSTOMER\n\n  \"\"\"Payment was declined.\"\"\"\n  DECLINED\n\n  \"\"\"The order was fraudulent.\"\"\"\n  FRAUD\n\n  \"\"\"There was insufficient inventory.\"\"\"\n  INVENTORY\n\n  \"\"\"Staff made an error.\"\"\"\n  STAFF\n\n  \"\"\"The order was canceled for an unlisted reason.\"\"\"\n  OTHER\n}\n\n\"An auto-generated type for paginating through multiple Orders.\\n\"\ntype OrderConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [OrderEdge!]!\n\n  \"\"\"A list of the nodes contained in OrderEdge.\"\"\"\n  nodes: [Order!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"The total count of Orders.\"\"\"\n  totalCount: UnsignedInt64!\n}\n\n\"An auto-generated type which holds one Order and a cursor during pagination.\\n\"\ntype OrderEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of OrderEdge.\"\"\"\n  node: Order!\n}\n\n\"\"\"Represents the order's current financial status.\"\"\"\nenum OrderFinancialStatus {\n  \"\"\"Displayed as **Pending**.\"\"\"\n  PENDING\n\n  \"\"\"Displayed as **Authorized**.\"\"\"\n  AUTHORIZED\n\n  \"\"\"Displayed as **Partially paid**.\"\"\"\n  PARTIALLY_PAID\n\n  \"\"\"Displayed as **Partially refunded**.\"\"\"\n  PARTIALLY_REFUNDED\n\n  \"\"\"Displayed as **Voided**.\"\"\"\n  VOIDED\n\n  \"\"\"Displayed as **Paid**.\"\"\"\n  PAID\n\n  \"\"\"Displayed as **Refunded**.\"\"\"\n  REFUNDED\n}\n\n\"\"\"\nRepresents the order's aggregated fulfillment status for display purposes.\n\"\"\"\nenum OrderFulfillmentStatus {\n  \"\"\"\n  Displayed as **Unfulfilled**. None of the items in the order have been fulfilled.\n  \"\"\"\n  UNFULFILLED\n\n  \"\"\"\n  Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled.\n  \"\"\"\n  PARTIALLY_FULFILLED\n\n  \"\"\"\n  Displayed as **Fulfilled**. All of the items in the order have been fulfilled.\n  \"\"\"\n  FULFILLED\n\n  \"\"\"\n  Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by \"UNFULFILLED\" status.\n  \"\"\"\n  RESTOCKED\n\n  \"\"\"\n  Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by \"IN_PROGRESS\" status.\n  \"\"\"\n  PENDING_FULFILLMENT\n\n  \"\"\"\n  Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by \"UNFULFILLED\" status.\n  \"\"\"\n  OPEN\n\n  \"\"\"\n  Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service.\n  \"\"\"\n  IN_PROGRESS\n\n  \"\"\"\n  Displayed as **On hold**. All of the unfulfilled items in this order are on hold.\n  \"\"\"\n  ON_HOLD\n\n  \"\"\"\n  Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time.\n  \"\"\"\n  SCHEDULED\n}\n\n\"\"\"\nRepresents a single line in an order. There is one line item for each distinct product variant.\n\"\"\"\ntype OrderLineItem {\n  \"\"\"\n  The number of entries associated to the line item minus the items that have been removed.\n  \"\"\"\n  currentQuantity: Int!\n\n  \"\"\"List of custom attributes associated to the line item.\"\"\"\n  customAttributes: [Attribute!]!\n\n  \"\"\"\n  The discounts that have been allocated onto the order line item by discount applications.\n  \"\"\"\n  discountAllocations: [DiscountAllocation!]!\n\n  \"\"\"\n  The total price of the line item, including discounts, and displayed in the presentment currency.\n  \"\"\"\n  discountedTotalPrice: MoneyV2!\n\n  \"\"\"\n  The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it's displayed in the presentment currency.\n  \"\"\"\n  originalTotalPrice: MoneyV2!\n\n  \"\"\"The number of products variants associated to the line item.\"\"\"\n  quantity: Int!\n\n  \"\"\"The title of the product combined with title of the variant.\"\"\"\n  title: String!\n\n  \"\"\"The product variant object associated to the line item.\"\"\"\n  variant: ProductVariant\n}\n\n\"An auto-generated type for paginating through multiple OrderLineItems.\\n\"\ntype OrderLineItemConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [OrderLineItemEdge!]!\n\n  \"\"\"A list of the nodes contained in OrderLineItemEdge.\"\"\"\n  nodes: [OrderLineItem!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one OrderLineItem and a cursor during pagination.\\n\"\ntype OrderLineItemEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of OrderLineItemEdge.\"\"\"\n  node: OrderLineItem!\n}\n\n\"\"\"The set of valid sort keys for the Order query.\"\"\"\nenum OrderSortKeys {\n  \"\"\"Sort by the `processed_at` value.\"\"\"\n  PROCESSED_AT\n\n  \"\"\"Sort by the `total_price` value.\"\"\"\n  TOTAL_PRICE\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"\"\"\nShopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store.\n\"\"\"\ntype Page implements HasMetafields & Node & OnlineStorePublishable & Trackable {\n  \"\"\"The description of the page, complete with HTML formatting.\"\"\"\n  body: HTML!\n\n  \"\"\"Summary of the page body.\"\"\"\n  bodySummary: String!\n\n  \"\"\"The timestamp of the page creation.\"\"\"\n  createdAt: DateTime!\n\n  \"\"\"\n  A human-friendly unique string for the page automatically generated from its title.\n  \"\"\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.\n  \"\"\"\n  onlineStoreUrl: URL\n\n  \"\"\"The page's SEO information.\"\"\"\n  seo: SEO\n\n  \"\"\"The title of the page.\"\"\"\n  title: String!\n\n  \"\"\"\n  A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.\n  \"\"\"\n  trackingParameters: String\n\n  \"\"\"The timestamp of the latest page update.\"\"\"\n  updatedAt: DateTime!\n}\n\n\"An auto-generated type for paginating through multiple Pages.\\n\"\ntype PageConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [PageEdge!]!\n\n  \"\"\"A list of the nodes contained in PageEdge.\"\"\"\n  nodes: [Page!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Page and a cursor during pagination.\\n\"\ntype PageEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of PageEdge.\"\"\"\n  node: Page!\n}\n\n\"Returns information about pagination in a connection, in accordance with the\\n[Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).\\nFor more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).\\n\"\ntype PageInfo {\n  \"\"\"The cursor corresponding to the last node in edges.\"\"\"\n  endCursor: String\n\n  \"\"\"Whether there are more pages to fetch following the current page.\"\"\"\n  hasNextPage: Boolean!\n\n  \"\"\"Whether there are any pages prior to the current page.\"\"\"\n  hasPreviousPage: Boolean!\n\n  \"\"\"The cursor corresponding to the first node in edges.\"\"\"\n  startCursor: String\n}\n\n\"\"\"The set of valid sort keys for the Page query.\"\"\"\nenum PageSortKeys {\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `updated_at` value.\"\"\"\n  UPDATED_AT\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"\"\"A payment applied to a checkout.\"\"\"\ntype Payment implements Node {\n  \"\"\"The amount of the payment.\"\"\"\n  amount: MoneyV2!\n\n  \"\"\"The amount of the payment.\"\"\"\n  amountV2: MoneyV2! @deprecated(reason: \"Use `amount` instead.\")\n\n  \"\"\"The billing address for the payment.\"\"\"\n  billingAddress: MailingAddress\n\n  \"\"\"The checkout to which the payment belongs.\"\"\"\n  checkout: Checkout!\n\n  \"\"\"The credit card used for the payment in the case of direct payments.\"\"\"\n  creditCard: CreditCard\n\n  \"\"\"\n  A message describing a processing error during asynchronous processing.\n  \"\"\"\n  errorMessage: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"A client-side generated token to identify a payment and perform idempotent operations.\\nFor more information, refer to\\n[Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).\\n\"\n  idempotencyKey: String\n\n  \"\"\"\n  The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow.\n  \"\"\"\n  nextActionUrl: URL\n\n  \"\"\"Whether the payment is still processing asynchronously.\"\"\"\n  ready: Boolean!\n\n  \"\"\"\n  A flag to indicate if the payment is to be done in test mode for gateways that support it.\n  \"\"\"\n  test: Boolean!\n\n  \"\"\"\n  The actual transaction recorded by Shopify after having processed the payment with the gateway.\n  \"\"\"\n  transaction: Transaction\n}\n\n\"\"\"Settings related to payments.\"\"\"\ntype PaymentSettings {\n  \"\"\"List of the card brands which the shop accepts.\"\"\"\n  acceptedCardBrands: [CardBrand!]!\n\n  \"\"\"The url pointing to the endpoint to vault credit cards.\"\"\"\n  cardVaultUrl: URL!\n\n  \"\"\"The country where the shop is located.\"\"\"\n  countryCode: CountryCode!\n\n  \"\"\"The three-letter code for the shop's primary currency.\"\"\"\n  currencyCode: CurrencyCode!\n\n  \"A list of enabled currencies (ISO 4217 format) that the shop accepts.\\nMerchants can enable currencies from their Shopify Payments settings in the Shopify admin.\\n\"\n  enabledPresentmentCurrencies: [CurrencyCode!]!\n\n  \"\"\"The shop\u2019s Shopify Payments account ID.\"\"\"\n  shopifyPaymentsAccountId: String\n\n  \"\"\"List of the digital wallets which the shop supports.\"\"\"\n  supportedDigitalWallets: [DigitalWallet!]!\n}\n\n\"\"\"The valid values for the types of payment token.\"\"\"\nenum PaymentTokenType {\n  \"\"\"Apple Pay token type.\"\"\"\n  APPLE_PAY\n\n  \"\"\"Vault payment token type.\"\"\"\n  VAULT\n\n  \"\"\"Shopify Pay token type.\"\"\"\n  SHOPIFY_PAY\n\n  \"\"\"Google Pay token type.\"\"\"\n  GOOGLE_PAY\n\n  \"\"\"Stripe token type.\"\"\"\n  STRIPE_VAULT_TOKEN\n}\n\n\"\"\"Decides the distribution of results.\"\"\"\nenum PredictiveSearchLimitScope {\n  \"\"\"Return results up to limit across all types.\"\"\"\n  ALL\n\n  \"\"\"Return results up to limit per type.\"\"\"\n  EACH\n}\n\n\"A predictive search result represents a list of products, collections, pages, articles, and query suggestions\\nthat matches the predictive search query.\\n\"\ntype PredictiveSearchResult {\n  \"\"\"The articles that match the search query.\"\"\"\n  articles: [Article!]!\n\n  \"\"\"The articles that match the search query.\"\"\"\n  collections: [Collection!]!\n\n  \"\"\"The pages that match the search query.\"\"\"\n  pages: [Page!]!\n\n  \"\"\"The products that match the search query.\"\"\"\n  products: [Product!]!\n\n  \"\"\"The query suggestions that are relevant to the search query.\"\"\"\n  queries: [SearchQuerySuggestion!]!\n}\n\n\"\"\"The types of search items to perform predictive search on.\"\"\"\nenum PredictiveSearchType {\n  \"\"\"Returns matching collections.\"\"\"\n  COLLECTION\n\n  \"\"\"Returns matching products.\"\"\"\n  PRODUCT\n\n  \"\"\"Returns matching pages.\"\"\"\n  PAGE\n\n  \"\"\"Returns matching articles.\"\"\"\n  ARTICLE\n\n  \"\"\"Returns matching query strings.\"\"\"\n  QUERY\n}\n\n\"\"\"\nThe preferred delivery methods such as shipping, local pickup or through pickup points.\n\"\"\"\nenum PreferenceDeliveryMethodType {\n  \"\"\"\n  A delivery method used to send items directly to a buyer\u2019s specified address.\n  \"\"\"\n  SHIPPING\n\n  \"\"\"\n  A delivery method used to let buyers receive items directly from a specific location within an area.\n  \"\"\"\n  PICK_UP\n\n  \"\"\"\n  A delivery method used to let buyers collect purchases at designated locations like parcel lockers.\n  \"\"\"\n  PICKUP_POINT\n}\n\n\"The input fields for a filter used to view a subset of products in a collection matching a specific price range.\\n\"\ninput PriceRangeFilter {\n  \"\"\"The minimum price in the range. Defaults to zero.\"\"\"\n  min: Float = 0\n\n  \"\"\"The maximum price in the range. Empty indicates no max price.\"\"\"\n  max: Float\n}\n\n\"\"\"The value of the percentage pricing object.\"\"\"\ntype PricingPercentageValue {\n  \"\"\"The percentage value of the object.\"\"\"\n  percentage: Float!\n}\n\n\"\"\"The price value (fixed or percentage) for a discount application.\"\"\"\nunion PricingValue = MoneyV2 | PricingPercentageValue\n\n\"A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.\\nFor example, a digital download (such as a movie, music or ebook file) also\\nqualifies as a product, as do services (such as equipment rental, work for hire,\\ncustomization of another product or an extended warranty).\\n\"\ntype Product implements HasMetafields & Node & OnlineStorePublishable & Trackable {\n  \"\"\"Indicates if at least one product variant is available for sale.\"\"\"\n  availableForSale: Boolean!\n\n  \"\"\"List of collections a product belongs to.\"\"\"\n  collections(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): CollectionConnection!\n\n  \"\"\"The compare at price of the product across all variants.\"\"\"\n  compareAtPriceRange: ProductPriceRange!\n\n  \"\"\"The date and time when the product was created.\"\"\"\n  createdAt: DateTime!\n\n  \"\"\"\n  Stripped description of the product, single line with HTML tags removed.\n  \"\"\"\n  description(\n    \"\"\"Truncates string after the given length.\"\"\"\n    truncateAt: Int\n  ): String!\n\n  \"\"\"The description of the product, complete with HTML formatting.\"\"\"\n  descriptionHtml: HTML!\n\n  \"The featured image for the product.\\n\\nThis field is functionally equivalent to `images(first: 1)`.\\n\"\n  featuredImage: Image\n\n  \"A human-friendly unique string for the Product automatically generated from its title.\\nThey are used by the Liquid templating language to refer to objects.\\n\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"List of images associated with the product.\"\"\"\n  images(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ProductImageSortKeys = POSITION\n  ): ImageConnection!\n\n  \"\"\"Whether the product is a gift card.\"\"\"\n  isGiftCard: Boolean!\n\n  \"\"\"The media associated with the product.\"\"\"\n  media(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ProductMediaSortKeys = POSITION\n  ): MediaConnection!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.\n  \"\"\"\n  onlineStoreUrl: URL\n\n  \"\"\"List of product options.\"\"\"\n  options(\n    \"\"\"Truncate the array result to this size.\"\"\"\n    first: Int\n  ): [ProductOption!]!\n\n  \"\"\"The price range.\"\"\"\n  priceRange: ProductPriceRange!\n\n  \"\"\"\n  A categorization that a product can be tagged with, commonly used for filtering and searching.\n  \"\"\"\n  productType: String!\n\n  \"\"\"The date and time when the product was published to the channel.\"\"\"\n  publishedAt: DateTime!\n\n  \"\"\"Whether the product can only be purchased with a selling plan.\"\"\"\n  requiresSellingPlan: Boolean!\n\n  \"\"\"\n  A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans.\n  \"\"\"\n  sellingPlanGroups(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): SellingPlanGroupConnection!\n\n  \"\"\"The product's SEO information.\"\"\"\n  seo: SEO!\n\n  \"A comma separated list of tags that have been added to the product.\\nAdditional access scope required for private apps: unauthenticated_read_product_tags.\\n\"\n  tags: [String!]!\n\n  \"\"\"The product\u2019s title.\"\"\"\n  title: String!\n\n  \"\"\"The total quantity of inventory in stock for this Product.\"\"\"\n  totalInventory: Int\n\n  \"\"\"\n  A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.\n  \"\"\"\n  trackingParameters: String\n\n  \"The date and time when the product was last modified.\\nA product's `updatedAt` value can change for different reasons. For example, if an order\\nis placed for a product that has inventory tracking set up, then the inventory adjustment\\nis counted as an update.\\n\"\n  updatedAt: DateTime!\n\n  \"Find a product\u2019s variant based on its selected options.\\nThis is useful for converting a user\u2019s selection of product options into a single matching variant.\\nIf there is not a variant for the selected options, `null` will be returned.\\n\"\n  variantBySelectedOptions(\n    \"\"\"\n    The input fields used for a selected option.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    selectedOptions: [SelectedOptionInput!]!\n\n    \"\"\"Whether to ignore unknown product options.\"\"\"\n    ignoreUnknownOptions: Boolean = false\n\n    \"\"\"Whether to perform case insensitive match on option names and values.\"\"\"\n    caseInsensitiveMatch: Boolean = false\n  ): ProductVariant\n\n  \"\"\"List of the product\u2019s variants.\"\"\"\n  variants(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ProductVariantSortKeys = POSITION\n  ): ProductVariantConnection!\n\n  \"\"\"The product\u2019s vendor name.\"\"\"\n  vendor: String!\n}\n\n\"\"\"The set of valid sort keys for the ProductCollection query.\"\"\"\nenum ProductCollectionSortKeys {\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `price` value.\"\"\"\n  PRICE\n\n  \"\"\"Sort by the `best-selling` value.\"\"\"\n  BEST_SELLING\n\n  \"\"\"Sort by the `created` value.\"\"\"\n  CREATED\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"\"\"Sort by the `manual` value.\"\"\"\n  MANUAL\n\n  \"\"\"Sort by the `collection-default` value.\"\"\"\n  COLLECTION_DEFAULT\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"An auto-generated type for paginating through multiple Products.\\n\"\ntype ProductConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [ProductEdge!]!\n\n  \"\"\"A list of available filters.\"\"\"\n  filters: [Filter!]!\n\n  \"\"\"A list of the nodes contained in ProductEdge.\"\"\"\n  nodes: [Product!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one Product and a cursor during pagination.\\n\"\ntype ProductEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of ProductEdge.\"\"\"\n  node: Product!\n}\n\n\"The input fields for a filter used to view a subset of products in a collection.\\nBy default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app.\\nLearn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).\\n\"\ninput ProductFilter {\n  \"\"\"Filter on if the product is available for sale.\"\"\"\n  available: Boolean\n\n  \"\"\"A variant option to filter on.\"\"\"\n  variantOption: VariantOptionFilter\n\n  \"\"\"The product type to filter on.\"\"\"\n  productType: String\n\n  \"\"\"The product vendor to filter on.\"\"\"\n  productVendor: String\n\n  \"\"\"A range of prices to filter with-in.\"\"\"\n  price: PriceRangeFilter\n\n  \"\"\"A product metafield to filter on.\"\"\"\n  productMetafield: MetafieldFilter\n\n  \"\"\"A variant metafield to filter on.\"\"\"\n  variantMetafield: MetafieldFilter\n\n  \"\"\"A product tag to filter on.\"\"\"\n  tag: String\n}\n\n\"\"\"The set of valid sort keys for the ProductImage query.\"\"\"\nenum ProductImageSortKeys {\n  \"\"\"Sort by the `created_at` value.\"\"\"\n  CREATED_AT\n\n  \"\"\"Sort by the `position` value.\"\"\"\n  POSITION\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"\"\"The set of valid sort keys for the ProductMedia query.\"\"\"\nenum ProductMediaSortKeys {\n  \"\"\"Sort by the `position` value.\"\"\"\n  POSITION\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"Product property names like \\\"Size\\\", \\\"Color\\\", and \\\"Material\\\" that the customers can select.\\nVariants are selected based on permutations of these options.\\n255 characters limit each.\\n\"\ntype ProductOption implements Node {\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The product option\u2019s name.\"\"\"\n  name: String!\n\n  \"\"\"The corresponding value to the product option name.\"\"\"\n  values: [String!]! @deprecated(reason: \"Use `optionValues` instead.\")\n}\n\n\"\"\"The price range of the product.\"\"\"\ntype ProductPriceRange {\n  \"\"\"The highest variant's price.\"\"\"\n  maxVariantPrice: MoneyV2!\n\n  \"\"\"The lowest variant's price.\"\"\"\n  minVariantPrice: MoneyV2!\n}\n\n\"The recommendation intent that is used to generate product recommendations.\\nYou can use intent to generate product recommendations according to different strategies.\\n\"\nenum ProductRecommendationIntent {\n  \"\"\"\n  Offer customers a mix of products that are similar or complementary to a product for which recommendations are to be fetched. An example is substitutable products that display in a You may also like section.\n  \"\"\"\n  RELATED\n\n  \"\"\"\n  Offer customers products that are complementary to a product for which recommendations are to be fetched. An example is add-on products that display in a Pair it with section.\n  \"\"\"\n  COMPLEMENTARY\n}\n\n\"\"\"The set of valid sort keys for the Product query.\"\"\"\nenum ProductSortKeys {\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `product_type` value.\"\"\"\n  PRODUCT_TYPE\n\n  \"\"\"Sort by the `vendor` value.\"\"\"\n  VENDOR\n\n  \"\"\"Sort by the `updated_at` value.\"\"\"\n  UPDATED_AT\n\n  \"\"\"Sort by the `created_at` value.\"\"\"\n  CREATED_AT\n\n  \"\"\"Sort by the `best_selling` value.\"\"\"\n  BEST_SELLING\n\n  \"\"\"Sort by the `price` value.\"\"\"\n  PRICE\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"A product variant represents a different version of a product, such as differing sizes or differing colors.\\n\"\ntype ProductVariant implements HasMetafields & Node {\n  \"\"\"Indicates if the product variant is available for sale.\"\"\"\n  availableForSale: Boolean!\n\n  \"\"\"\n  The barcode (for example, ISBN, UPC, or GTIN) associated with the variant.\n  \"\"\"\n  barcode: String\n\n  \"\"\"\n  The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.\n  \"\"\"\n  compareAtPrice: MoneyV2\n\n  \"\"\"\n  The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.\n  \"\"\"\n  compareAtPriceV2: MoneyV2 @deprecated(reason: \"Use `compareAtPrice` instead.\")\n\n  \"\"\"\n  Whether a product is out of stock but still available for purchase (used for backorders).\n  \"\"\"\n  currentlyNotInStock: Boolean!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"\n  Image associated with the product variant. This field falls back to the product image if no image is available.\n  \"\"\"\n  image: Image\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"The product variant\u2019s price.\"\"\"\n  price: MoneyV2!\n\n  \"\"\"The product variant\u2019s price.\"\"\"\n  priceV2: MoneyV2! @deprecated(reason: \"Use `price` instead.\")\n\n  \"\"\"The product object that the product variant belongs to.\"\"\"\n  product: Product!\n\n  \"\"\"The total sellable quantity of the variant for online sales channels.\"\"\"\n  quantityAvailable: Int\n\n  \"\"\"A list of quantity breaks for the product variant.\"\"\"\n  quantityPriceBreaks(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n  ): QuantityPriceBreakConnection!\n\n  \"\"\"The quantity rule for the product variant in a given context.\"\"\"\n  quantityRule: QuantityRule!\n\n  \"\"\"\n  Whether a customer needs to provide a shipping address when placing an order for the product variant.\n  \"\"\"\n  requiresShipping: Boolean!\n\n  \"\"\"List of product options applied to the variant.\"\"\"\n  selectedOptions: [SelectedOption!]!\n\n  \"\"\"\n  Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing.\n  \"\"\"\n  sellingPlanAllocations(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): SellingPlanAllocationConnection!\n\n  \"\"\"The SKU (stock keeping unit) associated with the variant.\"\"\"\n  sku: String\n\n  \"\"\"The in-store pickup availability of this variant by location.\"\"\"\n  storeAvailability(\n    \"\"\"Used to sort results based on proximity to the provided location.\"\"\"\n    near: GeoCoordinateInput\n\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): StoreAvailabilityConnection!\n\n  \"\"\"Whether tax is charged when the product variant is sold.\"\"\"\n  taxable: Boolean!\n\n  \"\"\"The product variant\u2019s title.\"\"\"\n  title: String!\n\n  \"\"\"\n  The unit price value for the variant based on the variant's measurement.\n  \"\"\"\n  unitPrice: MoneyV2\n\n  \"\"\"The unit price measurement for the variant.\"\"\"\n  unitPriceMeasurement: UnitPriceMeasurement\n\n  \"\"\"\n  The weight of the product variant in the unit system specified with `weight_unit`.\n  \"\"\"\n  weight: Float\n\n  \"\"\"Unit of measurement for weight.\"\"\"\n  weightUnit: WeightUnit!\n}\n\n\"An auto-generated type for paginating through multiple ProductVariants.\\n\"\ntype ProductVariantConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [ProductVariantEdge!]!\n\n  \"\"\"A list of the nodes contained in ProductVariantEdge.\"\"\"\n  nodes: [ProductVariant!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one ProductVariant and a cursor during pagination.\\n\"\ntype ProductVariantEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of ProductVariantEdge.\"\"\"\n  node: ProductVariant!\n}\n\n\"\"\"The set of valid sort keys for the ProductVariant query.\"\"\"\nenum ProductVariantSortKeys {\n  \"\"\"Sort by the `title` value.\"\"\"\n  TITLE\n\n  \"\"\"Sort by the `sku` value.\"\"\"\n  SKU\n\n  \"\"\"Sort by the `position` value.\"\"\"\n  POSITION\n\n  \"\"\"Sort by the `id` value.\"\"\"\n  ID\n\n  \"Sort by relevance to the search terms when the `query` parameter is specified on the connection.\\nDon't use this sort key when no search query is specified.\\n\"\n  RELEVANCE\n}\n\n\"\"\"\nRepresents information about the buyer that is interacting with the cart.\n\"\"\"\ntype PurchasingCompany {\n  \"\"\"The company associated to the order or draft order.\"\"\"\n  company: Company!\n\n  \"\"\"The company contact associated to the order or draft order.\"\"\"\n  contact: CompanyContact\n\n  \"\"\"The company location associated to the order or draft order.\"\"\"\n  location: CompanyLocation!\n}\n\n\"Quantity price breaks lets you offer different rates that are based on the\\namount of a specific variant being ordered.\\n\"\ntype QuantityPriceBreak {\n  \"Minimum quantity required to reach new quantity break price.\\n\"\n  minimumQuantity: Int!\n\n  \"The price of variant after reaching the minimum quanity.\\n\"\n  price: MoneyV2!\n}\n\n\"An auto-generated type for paginating through multiple QuantityPriceBreaks.\\n\"\ntype QuantityPriceBreakConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [QuantityPriceBreakEdge!]!\n\n  \"\"\"A list of the nodes contained in QuantityPriceBreakEdge.\"\"\"\n  nodes: [QuantityPriceBreak!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one QuantityPriceBreak and a cursor during pagination.\\n\"\ntype QuantityPriceBreakEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of QuantityPriceBreakEdge.\"\"\"\n  node: QuantityPriceBreak!\n}\n\n\"The quantity rule for the product variant in a given context.\\n\"\ntype QuantityRule {\n  \"The value that specifies the quantity increment between minimum and maximum of the rule.\\nOnly quantities divisible by this value will be considered valid.\\n\\nThe increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum\\nmust be divisible by this value.\\n\"\n  increment: Int!\n\n  \"An optional value that defines the highest allowed quantity purchased by the customer.\\nIf defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.\\n\"\n  maximum: Int\n\n  \"The value that defines the lowest allowed quantity purchased by the customer.\\nThe minimum must be a multiple of the quantity rule's increment.\\n\"\n  minimum: Int!\n}\n\n\"\"\"\nThe schema\u2019s entry-point for queries. This acts as the public, top-level API from which all queries must start.\n\"\"\"\ntype QueryRoot {\n  \"\"\"Fetch a specific Article by its ID.\"\"\"\n  article(\n    \"\"\"The ID of the `Article`.\"\"\"\n    id: ID!\n  ): Article\n\n  \"\"\"List of the shop's articles.\"\"\"\n  articles(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ArticleSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| author |\\n| blog_title |\\n| created_at |\\n| tag |\\n| tag_not |\\n| updated_at |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): ArticleConnection!\n\n  \"\"\"Fetch a specific `Blog` by one of its unique attributes.\"\"\"\n  blog(\n    \"\"\"The handle of the `Blog`.\"\"\"\n    handle: String\n\n    \"\"\"The ID of the `Blog`.\"\"\"\n    id: ID\n  ): Blog\n\n  \"\"\"Find a blog by its handle.\"\"\"\n  blogByHandle(\n    \"\"\"The handle of the blog.\"\"\"\n    handle: String!\n  ): Blog @deprecated(reason: \"Use `blog` instead.\")\n\n  \"\"\"List of the shop's blogs.\"\"\"\n  blogs(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: BlogSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| created_at |\\n| handle |\\n| title |\\n| updated_at |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): BlogConnection!\n\n  \"Retrieve a cart by its ID. For more information, refer to\\n[Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).\\n\"\n  cart(\n    \"\"\"The ID of the cart.\"\"\"\n    id: ID!\n  ): Cart\n\n  \"A poll for the status of the cart checkout completion and order creation.\\n\"\n  cartCompletionAttempt(\n    \"\"\"The ID of the attempt.\"\"\"\n    attemptId: String!\n  ): CartCompletionAttemptResult\n\n  \"\"\"Fetch a specific `Collection` by one of its unique attributes.\"\"\"\n  collection(\n    \"\"\"The ID of the `Collection`.\"\"\"\n    id: ID\n\n    \"\"\"The handle of the `Collection`.\"\"\"\n    handle: String\n  ): Collection\n\n  \"\"\"Find a collection by its handle.\"\"\"\n  collectionByHandle(\n    \"\"\"The handle of the collection.\"\"\"\n    handle: String!\n  ): Collection @deprecated(reason: \"Use `collection` instead.\")\n\n  \"\"\"List of the shop\u2019s collections.\"\"\"\n  collections(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: CollectionSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| collection_type |\\n| title |\\n| updated_at |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): CollectionConnection!\n\n  \"The customer associated with the given access token. Tokens are obtained by using the\\n[`customerAccessTokenCreate` mutation](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).\\n\"\n  customer(\n    \"\"\"The customer access token.\"\"\"\n    customerAccessToken: String!\n  ): Customer\n\n  \"\"\"Returns the localized experiences configured for the shop.\"\"\"\n  localization: Localization!\n\n  \"List of the shop's locations that support in-store pickup.\\n\\nWhen sorting by distance, you must specify a location via the `near` argument.\\n\\n\"\n  locations(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: LocationSortKeys = ID\n\n    \"\"\"Used to sort results based on proximity to the provided location.\"\"\"\n    near: GeoCoordinateInput\n  ): LocationConnection!\n\n  \"\"\"\n  Retrieve a [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) by its handle.\n  \"\"\"\n  menu(\n    \"\"\"The navigation menu's handle.\"\"\"\n    handle: String!\n  ): Menu\n\n  \"\"\"Fetch a specific Metaobject by one of its unique identifiers.\"\"\"\n  metaobject(\n    \"\"\"The ID of the metaobject.\"\"\"\n    id: ID\n\n    \"\"\"The handle and type of the metaobject.\"\"\"\n    handle: MetaobjectHandleInput\n  ): Metaobject\n\n  \"\"\"All active metaobjects for the shop.\"\"\"\n  metaobjects(\n    \"\"\"The type of metaobject to retrieve.\"\"\"\n    type: String!\n\n    \"\"\"The key of a field to sort with. Supports \"id\" and \"updated_at\".\"\"\"\n    sortKey: String\n\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): MetaobjectConnection!\n\n  \"\"\"Returns a specific node by ID.\"\"\"\n  node(\n    \"\"\"The ID of the Node to return.\"\"\"\n    id: ID!\n  ): Node\n\n  \"\"\"Returns the list of nodes with the given IDs.\"\"\"\n  nodes(\n    \"\"\"\n    The IDs of the Nodes to return.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    ids: [ID!]!\n  ): [Node]!\n\n  \"\"\"Fetch a specific `Page` by one of its unique attributes.\"\"\"\n  page(\n    \"\"\"The handle of the `Page`.\"\"\"\n    handle: String\n\n    \"\"\"The ID of the `Page`.\"\"\"\n    id: ID\n  ): Page\n\n  \"\"\"Find a page by its handle.\"\"\"\n  pageByHandle(\n    \"\"\"The handle of the page.\"\"\"\n    handle: String!\n  ): Page @deprecated(reason: \"Use `page` instead.\")\n\n  \"\"\"List of the shop's pages.\"\"\"\n  pages(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: PageSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| created_at |\\n| handle |\\n| title |\\n| updated_at |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): PageConnection!\n\n  \"\"\"List of the predictive search results.\"\"\"\n  predictiveSearch(\n    \"\"\"\n    Limits the number of results based on `limit_scope`. The value can range from 1 to 10, and the default is 10.\n    \"\"\"\n    limit: Int\n\n    \"\"\"Decides the distribution of results.\"\"\"\n    limitScope: PredictiveSearchLimitScope\n\n    \"\"\"The search query.\"\"\"\n    query: String!\n\n    \"\"\"\n    Specifies the list of resource fields to use for search. The default fields searched on are TITLE, PRODUCT_TYPE, VARIANT_TITLE, and VENDOR. For the best search experience, you should search on the default field set.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    searchableFields: [SearchableField!]\n\n    \"\"\"\n    The types of resources to search for.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    types: [PredictiveSearchType!]\n\n    \"\"\"\n    Specifies how unavailable products are displayed in the search results.\n    \"\"\"\n    unavailableProducts: SearchUnavailableProductsType\n  ): PredictiveSearchResult\n\n  \"\"\"Fetch a specific `Product` by one of its unique attributes.\"\"\"\n  product(\n    \"\"\"The ID of the `Product`.\"\"\"\n    id: ID\n\n    \"\"\"The handle of the `Product`.\"\"\"\n    handle: String\n  ): Product\n\n  \"\"\"Find a product by its handle.\"\"\"\n  productByHandle(\n    \"A unique string that identifies the product. Handles are automatically\\ngenerated based on the product's title, and are always lowercase. Whitespace\\nand special characters are replaced with a hyphen: `-`. If there are\\nmultiple consecutive whitespace or special characters, then they're replaced\\nwith a single hyphen. Whitespace or special characters at the beginning are\\nremoved. If a duplicate product title is used, then the handle is\\nauto-incremented by one. For example, if you had two products called\\n`Potion`, then their handles would be `potion` and `potion-1`. After a\\nproduct has been created, changing the product title doesn't update the handle.\\n\"\n    handle: String!\n  ): Product @deprecated(reason: \"Use `product` instead.\")\n\n  \"Find recommended products related to a given `product_id`.\\nTo learn more about how recommendations are generated, see\\n[*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).\\n\"\n  productRecommendations(\n    \"\"\"The id of the product.\"\"\"\n    productId: ID!\n\n    \"\"\"\n    The recommendation intent that is used to generate product recommendations. You can use intent to generate product recommendations on various pages across the channels, according to different strategies.\n    \"\"\"\n    intent: ProductRecommendationIntent = RELATED\n  ): [Product!]\n\n  \"Tags added to products.\\nAdditional access scope required: unauthenticated_read_product_tags.\\n\"\n  productTags(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int!\n  ): StringConnection!\n\n  \"\"\"\n  List of product types for the shop's products that are published to your app.\n  \"\"\"\n  productTypes(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int!\n  ): StringConnection!\n\n  \"\"\"\n  List of the shop\u2019s products. For storefront search, use [`search` query](https://shopify.dev/docs/api/storefront/latest/queries/search).\n  \"\"\"\n  products(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: ProductSortKeys = ID\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| available_for_sale |\\n| created_at |\\n| product_type |\\n| tag |\\n| tag_not |\\n| title |\\n| updated_at |\\n| variants.price |\\n| vendor |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): ProductConnection!\n\n  \"\"\"\n  The list of public Storefront API versions, including supported, release candidate and unstable versions.\n  \"\"\"\n  publicApiVersions: [ApiVersion!]!\n\n  \"\"\"List of the search results.\"\"\"\n  search(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"\"\"Sort the underlying list by the given key.\"\"\"\n    sortKey: SearchSortKeys = RELEVANCE\n\n    \"\"\"The search query.\"\"\"\n    query: String!\n\n    \"\"\"\n    Specifies whether to perform a partial word match on the last search term.\n    \"\"\"\n    prefix: SearchPrefixQueryType\n\n    \"\"\"\n    Returns a subset of products matching all product filters.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    productFilters: [ProductFilter!]\n\n    \"\"\"\n    The types of resources to search for.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    types: [SearchType!]\n\n    \"\"\"\n    Specifies how unavailable products or variants are displayed in the search results.\n    \"\"\"\n    unavailableProducts: SearchUnavailableProductsType\n  ): SearchResultItemConnection!\n\n  \"\"\"The shop associated with the storefront access token.\"\"\"\n  shop: Shop!\n\n  \"\"\"A list of redirects for a shop.\"\"\"\n  urlRedirects(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n\n    \"Apply one or multiple filters to the query.\\n| name | description | acceptable_values | default_value | example_use |\\n| ---- | ---- | ---- | ---- | ---- |\\n| created_at |\\n| path |\\n| target |\\nRefer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.\\n\"\n    query: String\n  ): UrlRedirectConnection!\n}\n\n\"\"\"SEO information.\"\"\"\ntype SEO {\n  \"\"\"The meta description.\"\"\"\n  description: String\n\n  \"\"\"The SEO title.\"\"\"\n  title: String\n}\n\n\"Script discount applications capture the intentions of a discount that\\nwas created by a Shopify Script.\\n\"\ntype ScriptDiscountApplication implements DiscountApplication {\n  \"\"\"\n  The method by which the discount's value is allocated to its entitled items.\n  \"\"\"\n  allocationMethod: DiscountApplicationAllocationMethod!\n\n  \"\"\"Which lines of targetType that the discount is allocated over.\"\"\"\n  targetSelection: DiscountApplicationTargetSelection!\n\n  \"\"\"The type of line that the discount is applicable towards.\"\"\"\n  targetType: DiscountApplicationTargetType!\n\n  \"\"\"The title of the application as defined by the Script.\"\"\"\n  title: String!\n\n  \"\"\"The value of the discount application.\"\"\"\n  value: PricingValue!\n}\n\n\"\"\"\nSpecifies whether to perform a partial word match on the last search term.\n\"\"\"\nenum SearchPrefixQueryType {\n  \"\"\"Perform a partial word match on the last search term.\"\"\"\n  LAST\n\n  \"\"\"Don't perform a partial word match on the last search term.\"\"\"\n  NONE\n}\n\n\"\"\"A search query suggestion.\"\"\"\ntype SearchQuerySuggestion implements Trackable {\n  \"\"\"The text of the search query suggestion with highlighted HTML tags.\"\"\"\n  styledText: String!\n\n  \"\"\"The text of the search query suggestion.\"\"\"\n  text: String!\n\n  \"\"\"\n  A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.\n  \"\"\"\n  trackingParameters: String\n}\n\n\"A search result that matches the search query.\\n\"\nunion SearchResultItem = Article | Page | Product\n\n\"An auto-generated type for paginating through multiple SearchResultItems.\\n\"\ntype SearchResultItemConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [SearchResultItemEdge!]!\n\n  \"\"\"A list of the nodes contained in SearchResultItemEdge.\"\"\"\n  nodes: [SearchResultItem!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"A list of available filters.\"\"\"\n  productFilters: [Filter!]!\n\n  \"\"\"The total number of results.\"\"\"\n  totalCount: Int!\n}\n\n\"An auto-generated type which holds one SearchResultItem and a cursor during pagination.\\n\"\ntype SearchResultItemEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of SearchResultItemEdge.\"\"\"\n  node: SearchResultItem!\n}\n\n\"\"\"The set of valid sort keys for the search query.\"\"\"\nenum SearchSortKeys {\n  \"\"\"Sort by the `price` value.\"\"\"\n  PRICE\n\n  \"\"\"Sort by relevance to the search terms.\"\"\"\n  RELEVANCE\n}\n\n\"\"\"The types of search items to perform search within.\"\"\"\nenum SearchType {\n  \"\"\"Returns matching products.\"\"\"\n  PRODUCT\n\n  \"\"\"Returns matching pages.\"\"\"\n  PAGE\n\n  \"\"\"Returns matching articles.\"\"\"\n  ARTICLE\n}\n\n\"\"\"Specifies whether to display results for unavailable products.\"\"\"\nenum SearchUnavailableProductsType {\n  \"\"\"Show unavailable products in the order that they're found.\"\"\"\n  SHOW\n\n  \"\"\"Exclude unavailable products.\"\"\"\n  HIDE\n\n  \"\"\"\n  Show unavailable products after all other matching results. This is the default.\n  \"\"\"\n  LAST\n}\n\n\"\"\"Specifies the list of resource fields to search.\"\"\"\nenum SearchableField {\n  \"\"\"Author of the page or article.\"\"\"\n  AUTHOR\n\n  \"\"\"\n  Body of the page or article or product description or collection description.\n  \"\"\"\n  BODY\n\n  \"\"\"Product type.\"\"\"\n  PRODUCT_TYPE\n\n  \"\"\"Tag associated with the product or article.\"\"\"\n  TAG\n\n  \"\"\"Title of the page or article or product title or collection title.\"\"\"\n  TITLE\n\n  \"\"\"Variant barcode.\"\"\"\n  VARIANTS_BARCODE\n\n  \"\"\"Variant SKU.\"\"\"\n  VARIANTS_SKU\n\n  \"\"\"Variant title.\"\"\"\n  VARIANTS_TITLE\n\n  \"\"\"Product vendor.\"\"\"\n  VENDOR\n}\n\n\"Properties used by customers to select a product variant.\\nProducts can have multiple options, like different sizes or colors.\\n\"\ntype SelectedOption {\n  \"\"\"The product option\u2019s name.\"\"\"\n  name: String!\n\n  \"\"\"The product option\u2019s value.\"\"\"\n  value: String!\n}\n\n\"\"\"The input fields required for a selected option.\"\"\"\ninput SelectedOptionInput {\n  \"\"\"The product option\u2019s name.\"\"\"\n  name: String!\n\n  \"\"\"The product option\u2019s value.\"\"\"\n  value: String!\n}\n\n\"\"\"Represents how products and variants can be sold and purchased.\"\"\"\ntype SellingPlan {\n  \"\"\"The initial payment due for the purchase.\"\"\"\n  checkoutCharge: SellingPlanCheckoutCharge!\n\n  \"\"\"The description of the selling plan.\"\"\"\n  description: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"\n  The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.\n  \"\"\"\n  name: String!\n\n  \"\"\"\n  The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.\n  \"\"\"\n  options: [SellingPlanOption!]!\n\n  \"\"\"\n  The price adjustments that a selling plan makes when a variant is purchased with a selling plan.\n  \"\"\"\n  priceAdjustments: [SellingPlanPriceAdjustment!]!\n\n  \"\"\"\n  Whether purchasing the selling plan will result in multiple deliveries.\n  \"\"\"\n  recurringDeliveries: Boolean!\n}\n\n\"\"\"\nRepresents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan.\n\"\"\"\ntype SellingPlanAllocation {\n  \"\"\"The checkout charge amount due for the purchase.\"\"\"\n  checkoutChargeAmount: MoneyV2!\n\n  \"\"\"\n  A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.\n  \"\"\"\n  priceAdjustments: [SellingPlanAllocationPriceAdjustment!]!\n\n  \"\"\"The remaining balance charge amount due for the purchase.\"\"\"\n  remainingBalanceChargeAmount: MoneyV2!\n\n  \"\"\"\n  A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.\n  \"\"\"\n  sellingPlan: SellingPlan!\n}\n\n\"An auto-generated type for paginating through multiple SellingPlanAllocations.\\n\"\ntype SellingPlanAllocationConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [SellingPlanAllocationEdge!]!\n\n  \"\"\"A list of the nodes contained in SellingPlanAllocationEdge.\"\"\"\n  nodes: [SellingPlanAllocation!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.\\n\"\ntype SellingPlanAllocationEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of SellingPlanAllocationEdge.\"\"\"\n  node: SellingPlanAllocation!\n}\n\n\"\"\"\nThe resulting prices for variants when they're purchased with a specific selling plan.\n\"\"\"\ntype SellingPlanAllocationPriceAdjustment {\n  \"\"\"\n  The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.\n  \"\"\"\n  compareAtPrice: MoneyV2!\n\n  \"\"\"\n  The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.\n  \"\"\"\n  perDeliveryPrice: MoneyV2!\n\n  \"\"\"\n  The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.\n  \"\"\"\n  price: MoneyV2!\n\n  \"\"\"\n  The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.\n  \"\"\"\n  unitPrice: MoneyV2\n}\n\n\"\"\"The initial payment due for the purchase.\"\"\"\ntype SellingPlanCheckoutCharge {\n  \"\"\"The charge type for the checkout charge.\"\"\"\n  type: SellingPlanCheckoutChargeType!\n\n  \"\"\"The charge value for the checkout charge.\"\"\"\n  value: SellingPlanCheckoutChargeValue!\n}\n\n\"\"\"The percentage value of the price used for checkout charge.\"\"\"\ntype SellingPlanCheckoutChargePercentageValue {\n  \"\"\"The percentage value of the price used for checkout charge.\"\"\"\n  percentage: Float!\n}\n\n\"\"\"The checkout charge when the full amount isn't charged at checkout.\"\"\"\nenum SellingPlanCheckoutChargeType {\n  \"\"\"The checkout charge is a percentage of the product or variant price.\"\"\"\n  PERCENTAGE\n\n  \"\"\"The checkout charge is a fixed price amount.\"\"\"\n  PRICE\n}\n\n\"\"\"The portion of the price to be charged at checkout.\"\"\"\nunion SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue\n\n\"An auto-generated type for paginating through multiple SellingPlans.\\n\"\ntype SellingPlanConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [SellingPlanEdge!]!\n\n  \"\"\"A list of the nodes contained in SellingPlanEdge.\"\"\"\n  nodes: [SellingPlan!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one SellingPlan and a cursor during pagination.\\n\"\ntype SellingPlanEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of SellingPlanEdge.\"\"\"\n  node: SellingPlan!\n}\n\n\"\"\"\nA fixed amount that's deducted from the original variant price. For example, $10.00 off.\n\"\"\"\ntype SellingPlanFixedAmountPriceAdjustment {\n  \"\"\"The money value of the price adjustment.\"\"\"\n  adjustmentAmount: MoneyV2!\n}\n\n\"\"\"\nA fixed price adjustment for a variant that's purchased with a selling plan.\n\"\"\"\ntype SellingPlanFixedPriceAdjustment {\n  \"\"\"A new price of the variant when it's purchased with the selling plan.\"\"\"\n  price: MoneyV2!\n}\n\n\"\"\"\nRepresents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans.\n\"\"\"\ntype SellingPlanGroup {\n  \"\"\"\n  A display friendly name for the app that created the selling plan group.\n  \"\"\"\n  appName: String\n\n  \"\"\"The name of the selling plan group.\"\"\"\n  name: String!\n\n  \"\"\"\n  Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product.\n  \"\"\"\n  options: [SellingPlanGroupOption!]!\n\n  \"\"\"\n  A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.\n  \"\"\"\n  sellingPlans(\n    \"\"\"Returns up to the first `n` elements from the list.\"\"\"\n    first: Int\n\n    \"\"\"Returns the elements that come after the specified cursor.\"\"\"\n    after: String\n\n    \"\"\"Returns up to the last `n` elements from the list.\"\"\"\n    last: Int\n\n    \"\"\"Returns the elements that come before the specified cursor.\"\"\"\n    before: String\n\n    \"\"\"Reverse the order of the underlying list.\"\"\"\n    reverse: Boolean = false\n  ): SellingPlanConnection!\n}\n\n\"An auto-generated type for paginating through multiple SellingPlanGroups.\\n\"\ntype SellingPlanGroupConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [SellingPlanGroupEdge!]!\n\n  \"\"\"A list of the nodes contained in SellingPlanGroupEdge.\"\"\"\n  nodes: [SellingPlanGroup!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.\\n\"\ntype SellingPlanGroupEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of SellingPlanGroupEdge.\"\"\"\n  node: SellingPlanGroup!\n}\n\n\"\"\"\nRepresents an option on a selling plan group that's available in the drop-down list in the storefront.\n\nIndividual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.\n\"\"\"\ntype SellingPlanGroupOption {\n  \"\"\"The name of the option. For example, 'Delivery every'.\"\"\"\n  name: String!\n\n  \"\"\"\n  The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'.\n  \"\"\"\n  values: [String!]!\n}\n\n\"\"\"An option provided by a Selling Plan.\"\"\"\ntype SellingPlanOption {\n  \"\"\"The name of the option (ie \"Delivery every\").\"\"\"\n  name: String\n\n  \"\"\"The value of the option (ie \"Month\").\"\"\"\n  value: String\n}\n\n\"\"\"\nA percentage amount that's deducted from the original variant price. For example, 10% off.\n\"\"\"\ntype SellingPlanPercentagePriceAdjustment {\n  \"\"\"The percentage value of the price adjustment.\"\"\"\n  adjustmentPercentage: Int!\n}\n\n\"\"\"\nRepresents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.\n\"\"\"\ntype SellingPlanPriceAdjustment {\n  \"\"\"\n  The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.\n  \"\"\"\n  adjustmentValue: SellingPlanPriceAdjustmentValue!\n\n  \"\"\"\n  The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.\n  \"\"\"\n  orderCount: Int\n}\n\n\"\"\"\nRepresents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments.\n\"\"\"\nunion SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment\n\n\"\"\"A shipping rate to be applied to a checkout.\"\"\"\ntype ShippingRate {\n  \"\"\"Human-readable unique identifier for this shipping rate.\"\"\"\n  handle: String!\n\n  \"\"\"Price of this shipping rate.\"\"\"\n  price: MoneyV2!\n\n  \"\"\"Price of this shipping rate.\"\"\"\n  priceV2: MoneyV2! @deprecated(reason: \"Use `price` instead.\")\n\n  \"\"\"Title of this shipping rate.\"\"\"\n  title: String!\n}\n\n\"\"\"\nShop represents a collection of the general settings and information about the shop.\n\"\"\"\ntype Shop implements HasMetafields & Node {\n  \"\"\"The shop's branding configuration.\"\"\"\n  brand: Brand\n\n  \"\"\"A description of the shop.\"\"\"\n  description: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Returns a metafield found by namespace and key.\"\"\"\n  metafield(\n    \"\"\"\n    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.\n    \"\"\"\n    namespace: String\n\n    \"\"\"The identifier for the metafield.\"\"\"\n    key: String!\n  ): Metafield\n\n  \"\"\"\n  The metafields associated with the resource matching the supplied list of namespaces and keys.\n  \"\"\"\n  metafields(\n    \"\"\"\n    The list of metafields to retrieve by namespace and key.\n    \n    The input must not contain more than `250` values.\n    \"\"\"\n    identifiers: [HasMetafieldsIdentifier!]!\n  ): [Metafield]!\n\n  \"\"\"\n  A string representing the way currency is formatted when the currency isn\u2019t specified.\n  \"\"\"\n  moneyFormat: String!\n\n  \"\"\"The shop\u2019s name.\"\"\"\n  name: String!\n\n  \"\"\"Settings related to payments.\"\"\"\n  paymentSettings: PaymentSettings!\n\n  \"\"\"The primary domain of the shop\u2019s Online Store.\"\"\"\n  primaryDomain: Domain!\n\n  \"\"\"The shop\u2019s privacy policy.\"\"\"\n  privacyPolicy: ShopPolicy\n\n  \"\"\"The shop\u2019s refund policy.\"\"\"\n  refundPolicy: ShopPolicy\n\n  \"\"\"The shop\u2019s shipping policy.\"\"\"\n  shippingPolicy: ShopPolicy\n\n  \"\"\"Countries that the shop ships to.\"\"\"\n  shipsToCountries: [CountryCode!]!\n\n  \"\"\"The shop\u2019s subscription policy.\"\"\"\n  subscriptionPolicy: ShopPolicyWithDefault\n\n  \"\"\"The shop\u2019s terms of service.\"\"\"\n  termsOfService: ShopPolicy\n}\n\n\"The input fields for submitting Shop Pay payment method information for checkout.\\n\"\ninput ShopPayWalletContentInput {\n  \"\"\"The customer's billing address.\"\"\"\n  billingAddress: MailingAddressInput!\n\n  \"\"\"Session token for transaction.\"\"\"\n  sessionToken: String!\n}\n\n\"\"\"\nPolicy that a merchant has configured for their store, such as their refund or privacy policy.\n\"\"\"\ntype ShopPolicy implements Node {\n  \"\"\"Policy text, maximum size of 64kb.\"\"\"\n  body: String!\n\n  \"\"\"Policy\u2019s handle.\"\"\"\n  handle: String!\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"Policy\u2019s title.\"\"\"\n  title: String!\n\n  \"\"\"Public URL to the policy.\"\"\"\n  url: URL!\n}\n\n\"A policy for the store that comes with a default value, such as a subscription policy.\\nIf the merchant hasn't configured a policy for their store, then the policy will return the default value.\\nOtherwise, the policy will return the merchant-configured value.\\n\"\ntype ShopPolicyWithDefault {\n  \"\"\"The text of the policy. Maximum size: 64KB.\"\"\"\n  body: String!\n\n  \"\"\"The handle of the policy.\"\"\"\n  handle: String!\n\n  \"\"\"The unique ID of the policy. A default policy doesn't have an ID.\"\"\"\n  id: ID\n\n  \"\"\"The title of the policy.\"\"\"\n  title: String!\n\n  \"\"\"Public URL to the policy.\"\"\"\n  url: URL!\n}\n\n\"The availability of a product variant at a particular location.\\nLocal pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.\\n\"\ntype StoreAvailability {\n  \"\"\"Whether the product variant is in-stock at this location.\"\"\"\n  available: Boolean!\n\n  \"\"\"The location where this product variant is stocked at.\"\"\"\n  location: Location!\n\n  \"\"\"\n  Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours).\n  \"\"\"\n  pickUpTime: String!\n\n  \"\"\"The quantity of the product variant in-stock at this location.\"\"\"\n  quantityAvailable: Int!\n}\n\n\"An auto-generated type for paginating through multiple StoreAvailabilities.\\n\"\ntype StoreAvailabilityConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [StoreAvailabilityEdge!]!\n\n  \"\"\"A list of the nodes contained in StoreAvailabilityEdge.\"\"\"\n  nodes: [StoreAvailability!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one StoreAvailability and a cursor during pagination.\\n\"\ntype StoreAvailabilityEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of StoreAvailabilityEdge.\"\"\"\n  node: StoreAvailability!\n}\n\n\"An auto-generated type for paginating through a list of Strings.\\n\"\ntype StringConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [StringEdge!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one String and a cursor during pagination.\\n\"\ntype StringEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of StringEdge.\"\"\"\n  node: String!\n}\n\n\"\"\"An error that occurred during cart submit for completion.\"\"\"\ntype SubmissionError {\n  \"\"\"The error code.\"\"\"\n  code: SubmissionErrorCode!\n\n  \"\"\"The error message.\"\"\"\n  message: String\n}\n\n\"\"\"The code of the error that occurred during cart submit for completion.\"\"\"\nenum SubmissionErrorCode {\n  ERROR\n  NO_DELIVERY_GROUP_SELECTED\n  BUYER_IDENTITY_EMAIL_IS_INVALID\n  BUYER_IDENTITY_EMAIL_REQUIRED\n  BUYER_IDENTITY_PHONE_IS_INVALID\n  DELIVERY_ADDRESS1_INVALID\n  DELIVERY_ADDRESS1_REQUIRED\n  DELIVERY_ADDRESS1_TOO_LONG\n  DELIVERY_ADDRESS2_INVALID\n  DELIVERY_ADDRESS2_REQUIRED\n  DELIVERY_ADDRESS2_TOO_LONG\n  DELIVERY_CITY_INVALID\n  DELIVERY_CITY_REQUIRED\n  DELIVERY_CITY_TOO_LONG\n  DELIVERY_COMPANY_INVALID\n  DELIVERY_COMPANY_REQUIRED\n  DELIVERY_COMPANY_TOO_LONG\n  DELIVERY_COUNTRY_REQUIRED\n  DELIVERY_FIRST_NAME_INVALID\n  DELIVERY_FIRST_NAME_REQUIRED\n  DELIVERY_FIRST_NAME_TOO_LONG\n  DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY\n  DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE\n  DELIVERY_LAST_NAME_INVALID\n  DELIVERY_LAST_NAME_REQUIRED\n  DELIVERY_LAST_NAME_TOO_LONG\n  DELIVERY_NO_DELIVERY_AVAILABLE\n  DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE\n  DELIVERY_OPTIONS_PHONE_NUMBER_INVALID\n  DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED\n  DELIVERY_PHONE_NUMBER_INVALID\n  DELIVERY_PHONE_NUMBER_REQUIRED\n  DELIVERY_POSTAL_CODE_INVALID\n  DELIVERY_POSTAL_CODE_REQUIRED\n  DELIVERY_ZONE_NOT_FOUND\n  DELIVERY_ZONE_REQUIRED_FOR_COUNTRY\n  DELIVERY_ADDRESS_REQUIRED\n  MERCHANDISE_NOT_APPLICABLE\n  MERCHANDISE_LINE_LIMIT_REACHED\n  MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE\n  MERCHANDISE_OUT_OF_STOCK\n  MERCHANDISE_PRODUCT_NOT_PUBLISHED\n  PAYMENTS_ADDRESS1_INVALID\n  PAYMENTS_ADDRESS1_REQUIRED\n  PAYMENTS_ADDRESS1_TOO_LONG\n  PAYMENTS_ADDRESS2_INVALID\n  PAYMENTS_ADDRESS2_REQUIRED\n  PAYMENTS_ADDRESS2_TOO_LONG\n  PAYMENTS_CITY_INVALID\n  PAYMENTS_CITY_REQUIRED\n  PAYMENTS_CITY_TOO_LONG\n  PAYMENTS_COMPANY_INVALID\n  PAYMENTS_COMPANY_REQUIRED\n  PAYMENTS_COMPANY_TOO_LONG\n  PAYMENTS_COUNTRY_REQUIRED\n  PAYMENTS_CREDIT_CARD_BASE_EXPIRED\n  PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED\n  PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT\n  PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED\n  PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK\n  PAYMENTS_CREDIT_CARD_GENERIC\n  PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK\n  PAYMENTS_CREDIT_CARD_MONTH_INCLUSION\n  PAYMENTS_CREDIT_CARD_NAME_INVALID\n  PAYMENTS_CREDIT_CARD_NUMBER_INVALID\n  PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT\n  PAYMENTS_CREDIT_CARD_SESSION_ID\n  PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK\n  PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE\n  PAYMENTS_CREDIT_CARD_YEAR_EXPIRED\n  PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR\n  PAYMENTS_FIRST_NAME_INVALID\n  PAYMENTS_FIRST_NAME_REQUIRED\n  PAYMENTS_FIRST_NAME_TOO_LONG\n  PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY\n  PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE\n  PAYMENTS_LAST_NAME_INVALID\n  PAYMENTS_LAST_NAME_REQUIRED\n  PAYMENTS_LAST_NAME_TOO_LONG\n  PAYMENTS_METHOD_UNAVAILABLE\n  PAYMENTS_METHOD_REQUIRED\n  PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT\n  PAYMENTS_PHONE_NUMBER_INVALID\n  PAYMENTS_PHONE_NUMBER_REQUIRED\n  PAYMENTS_POSTAL_CODE_INVALID\n  PAYMENTS_POSTAL_CODE_REQUIRED\n  PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED\n  PAYMENTS_WALLET_CONTENT_MISSING\n  PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND\n  PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY\n  TAXES_MUST_BE_DEFINED\n  TAXES_LINE_ID_NOT_FOUND\n  TAXES_DELIVERY_GROUP_ID_NOT_FOUND\n}\n\n\"\"\"Cart submit for checkout completion is successful.\"\"\"\ntype SubmitAlreadyAccepted {\n  \"\"\"\n  The ID of the cart completion attempt that will be used for polling for the result.\n  \"\"\"\n  attemptId: String!\n}\n\n\"\"\"Cart submit for checkout completion failed.\"\"\"\ntype SubmitFailed {\n  \"\"\"The URL of the checkout for the cart.\"\"\"\n  checkoutUrl: URL\n\n  \"\"\"The list of errors that occurred from executing the mutation.\"\"\"\n  errors: [SubmissionError!]!\n}\n\n\"\"\"Cart submit for checkout completion is already accepted.\"\"\"\ntype SubmitSuccess {\n  \"\"\"\n  The ID of the cart completion attempt that will be used for polling for the result.\n  \"\"\"\n  attemptId: String!\n}\n\n\"\"\"Cart submit for checkout completion is throttled.\"\"\"\ntype SubmitThrottled {\n  \"UTC date time string that indicates the time after which clients should make their next\\npoll request. Any poll requests sent before this time will be ignored. Use this value to schedule the\\nnext poll request.\\n\"\n  pollAfter: DateTime!\n}\n\n\"\"\"Color and image for visual representation.\"\"\"\ntype Swatch {\n  \"\"\"The swatch color.\"\"\"\n  color: Color\n\n  \"\"\"The swatch image.\"\"\"\n  image: MediaImage\n}\n\n\"Specifies the fields required to complete a checkout with\\na tokenized payment.\\n\"\ninput TokenizedPaymentInputV3 {\n  \"\"\"The amount and currency of the payment.\"\"\"\n  paymentAmount: MoneyInput!\n\n  \"\"\"\n  A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).\n  \"\"\"\n  idempotencyKey: String!\n\n  \"\"\"The billing address for the payment.\"\"\"\n  billingAddress: MailingAddressInput!\n\n  \"\"\"\n  A simple string or JSON containing the required payment data for the tokenized payment.\n  \"\"\"\n  paymentData: String!\n\n  \"\"\"\n  Whether to execute the payment in test mode, if possible. Test mode isn't supported in production stores. Defaults to `false`.\n  \"\"\"\n  test: Boolean = false\n\n  \"\"\"Public Hash Key used for AndroidPay payments only.\"\"\"\n  identifier: String\n\n  \"\"\"The type of payment token.\"\"\"\n  type: PaymentTokenType!\n}\n\n\"\"\"\nRepresents a resource that you can track the origin of the search traffic.\n\"\"\"\ninterface Trackable {\n  \"\"\"\n  A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.\n  \"\"\"\n  trackingParameters: String\n}\n\n\"\"\"An object representing exchange of money for a product or service.\"\"\"\ntype Transaction {\n  \"\"\"The amount of money that the transaction was for.\"\"\"\n  amount: MoneyV2!\n\n  \"\"\"The amount of money that the transaction was for.\"\"\"\n  amountV2: MoneyV2! @deprecated(reason: \"Use `amount` instead.\")\n\n  \"\"\"The kind of the transaction.\"\"\"\n  kind: TransactionKind!\n\n  \"\"\"The status of the transaction.\"\"\"\n  status: TransactionStatus! @deprecated(reason: \"Use `statusV2` instead.\")\n\n  \"\"\"The status of the transaction.\"\"\"\n  statusV2: TransactionStatus\n\n  \"\"\"Whether the transaction was done in test mode or not.\"\"\"\n  test: Boolean!\n}\n\n\"\"\"The different kinds of order transactions.\"\"\"\nenum TransactionKind {\n  \"\"\"An authorization and capture performed together in a single step.\"\"\"\n  SALE\n\n  \"\"\"\n  A transfer of the money that was reserved during the authorization stage.\n  \"\"\"\n  CAPTURE\n\n  \"An amount reserved against the cardholder's funding source.\\nMoney does not change hands until the authorization is captured.\\n\"\n  AUTHORIZATION\n\n  \"\"\"An authorization for a payment taken with an EMV credit card reader.\"\"\"\n  EMV_AUTHORIZATION\n\n  \"\"\"Money returned to the customer when they have paid too much.\"\"\"\n  CHANGE\n}\n\n\"\"\"Transaction statuses describe the status of a transaction.\"\"\"\nenum TransactionStatus {\n  \"\"\"The transaction is pending.\"\"\"\n  PENDING\n\n  \"\"\"The transaction succeeded.\"\"\"\n  SUCCESS\n\n  \"\"\"The transaction failed.\"\"\"\n  FAILURE\n\n  \"\"\"There was an error while processing the transaction.\"\"\"\n  ERROR\n}\n\n\"Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and\\n[RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.\\n\\nFor example, `\\\"https://johns-apparel.myshopify.com\\\"` is a valid URL. It includes a scheme (`https`) and a host\\n(`johns-apparel.myshopify.com`).\\n\"\nscalar URL\n\n\"The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).\\n\"\ntype UnitPriceMeasurement {\n  \"\"\"The type of unit of measurement for the unit price measurement.\"\"\"\n  measuredType: UnitPriceMeasurementMeasuredType\n\n  \"\"\"The quantity unit for the unit price measurement.\"\"\"\n  quantityUnit: UnitPriceMeasurementMeasuredUnit\n\n  \"\"\"The quantity value for the unit price measurement.\"\"\"\n  quantityValue: Float!\n\n  \"\"\"The reference unit for the unit price measurement.\"\"\"\n  referenceUnit: UnitPriceMeasurementMeasuredUnit\n\n  \"\"\"The reference value for the unit price measurement.\"\"\"\n  referenceValue: Int!\n}\n\n\"\"\"The accepted types of unit of measurement.\"\"\"\nenum UnitPriceMeasurementMeasuredType {\n  \"\"\"Unit of measurements representing volumes.\"\"\"\n  VOLUME\n\n  \"\"\"Unit of measurements representing weights.\"\"\"\n  WEIGHT\n\n  \"\"\"Unit of measurements representing lengths.\"\"\"\n  LENGTH\n\n  \"\"\"Unit of measurements representing areas.\"\"\"\n  AREA\n}\n\n\"\"\"The valid units of measurement for a unit price measurement.\"\"\"\nenum UnitPriceMeasurementMeasuredUnit {\n  \"\"\"1000 milliliters equals 1 liter.\"\"\"\n  ML\n\n  \"\"\"100 centiliters equals 1 liter.\"\"\"\n  CL\n\n  \"\"\"Metric system unit of volume.\"\"\"\n  L\n\n  \"\"\"1 cubic meter equals 1000 liters.\"\"\"\n  M3\n\n  \"\"\"1000 milligrams equals 1 gram.\"\"\"\n  MG\n\n  \"\"\"Metric system unit of weight.\"\"\"\n  G\n\n  \"\"\"1 kilogram equals 1000 grams.\"\"\"\n  KG\n\n  \"\"\"1000 millimeters equals 1 meter.\"\"\"\n  MM\n\n  \"\"\"100 centimeters equals 1 meter.\"\"\"\n  CM\n\n  \"\"\"Metric system unit of length.\"\"\"\n  M\n\n  \"\"\"Metric system unit of area.\"\"\"\n  M2\n}\n\n\"\"\"Systems of weights and measures.\"\"\"\nenum UnitSystem {\n  \"\"\"Imperial system of weights and measures.\"\"\"\n  IMPERIAL_SYSTEM\n\n  \"\"\"Metric system of weights and measures.\"\"\"\n  METRIC_SYSTEM\n}\n\n\"An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.\\n\\nExample value: `\\\"50\\\"`.\\n\"\nscalar UnsignedInt64\n\n\"\"\"A redirect on the online store.\"\"\"\ntype UrlRedirect implements Node {\n  \"\"\"The ID of the URL redirect.\"\"\"\n  id: ID!\n\n  \"\"\"\n  The old path to be redirected from. When the user visits this path, they'll be redirected to the target location.\n  \"\"\"\n  path: String!\n\n  \"\"\"The target location where the user will be redirected to.\"\"\"\n  target: String!\n}\n\n\"An auto-generated type for paginating through multiple UrlRedirects.\\n\"\ntype UrlRedirectConnection {\n  \"\"\"A list of edges.\"\"\"\n  edges: [UrlRedirectEdge!]!\n\n  \"\"\"A list of the nodes contained in UrlRedirectEdge.\"\"\"\n  nodes: [UrlRedirect!]!\n\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n}\n\n\"An auto-generated type which holds one UrlRedirect and a cursor during pagination.\\n\"\ntype UrlRedirectEdge {\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n\n  \"\"\"The item at the end of UrlRedirectEdge.\"\"\"\n  node: UrlRedirect!\n}\n\n\"\"\"Represents an error in the input of a mutation.\"\"\"\ntype UserError implements DisplayableError {\n  \"\"\"The path to the input field that caused the error.\"\"\"\n  field: [String!]\n\n  \"\"\"The error message.\"\"\"\n  message: String!\n}\n\n\"\"\"\nThe input fields for a filter used to view a subset of products in a collection matching a specific variant option.\n\"\"\"\ninput VariantOptionFilter {\n  \"\"\"The name of the variant option to filter on.\"\"\"\n  name: String!\n\n  \"\"\"The value of the variant option to filter on.\"\"\"\n  value: String!\n}\n\n\"\"\"Represents a Shopify hosted video.\"\"\"\ntype Video implements Media & Node {\n  \"\"\"A word or phrase to share the nature or contents of a media.\"\"\"\n  alt: String\n\n  \"\"\"A globally-unique ID.\"\"\"\n  id: ID!\n\n  \"\"\"The media content type.\"\"\"\n  mediaContentType: MediaContentType!\n\n  \"\"\"The presentation for a media.\"\"\"\n  presentation: MediaPresentation\n\n  \"\"\"The preview image for the media.\"\"\"\n  previewImage: Image\n\n  \"\"\"The sources for a video.\"\"\"\n  sources: [VideoSource!]!\n}\n\n\"\"\"Represents a source for a Shopify hosted video.\"\"\"\ntype VideoSource {\n  \"\"\"The format of the video source.\"\"\"\n  format: String!\n\n  \"\"\"The height of the video.\"\"\"\n  height: Int!\n\n  \"\"\"The video MIME type.\"\"\"\n  mimeType: String!\n\n  \"\"\"The URL of the video.\"\"\"\n  url: String!\n\n  \"\"\"The width of the video.\"\"\"\n  width: Int!\n}\n\n\"\"\"Units of measurement for weight.\"\"\"\nenum WeightUnit {\n  \"\"\"1 kilogram equals 1000 grams.\"\"\"\n  KILOGRAMS\n\n  \"\"\"Metric system unit of mass.\"\"\"\n  GRAMS\n\n  \"\"\"1 pound equals 16 ounces.\"\"\"\n  POUNDS\n\n  \"\"\"Imperial system unit of mass.\"\"\"\n  OUNCES\n}";
export default schema;