import {useCurrentURL} from '@quilted/quilt/navigation';
import {useFormatMoney} from '@lemonmade/shopify-quilt';

import {Title} from '~/shared/head.ts';

import type {ProductDetailsQueryData} from './ProductDetailsQuery.graphql';
import {ThemeColor} from '@quilted/quilt/browser';

export function ProductDetails({
  product,
}: {
  product: Required<ProductDetailsQueryData.Product>;
}) {
  const formatMoney = useFormatMoney();

  const selectedVariant =
    product.variantBySelectedOptions ?? product.variants.nodes[0]!;
  const selectedOptions = new Map(
    selectedVariant.selectedOptions.map(({name, value}) => [name, value]),
  );

  return (
    <div class="Page" id="page_ProductDetails">
      <Title>{product.title}</Title>
      {product.themeColor && <ThemeColor value={product.themeColor.value} />}

      <div class="ProductDetails">
        {product.featuredImage && (
          <div class="ProductDetails_Image">
            <img
              src={product.featuredImage.url}
              alt={product.featuredImage.altText ?? ''}
            />
          </div>
        )}

        <form class="ProductDetails_Content" action="/buy-it-now" method="post">
          <input
            type="hidden"
            name="lines[0][merchandiseId]"
            value={selectedVariant.id}
          />

          <h2 class="Heading">{product.title}</h2>
          <p class="TextBlock">{product.vendor}</p>

          {product.options.map((option) => (
            <ProductDetailsOption
              option={option}
              defaultValue={selectedOptions.get(option.name)}
            />
          ))}

          <div>{formatMoney(selectedVariant.price)}</div>

          <button class="Button" type="submit">
            Buy it now
          </button>

          <div
            dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
          ></div>

          <pre style={{marginTop: '2rem'}}>
            {JSON.stringify(product, null, 2)}
          </pre>
        </form>
      </div>
    </div>
  );
}

function ProductDetailsOption({
  option,
  defaultValue,
}: {
  option: ProductDetailsQueryData.Product.Options;
  defaultValue?: string;
}) {
  const currentURL = useCurrentURL();

  const name = `${option.name[0]!.toLowerCase()}${option.name.slice(1)}`;

  if (option.values.length < 2) {
    return (
      <input
        type="hidden"
        name={`options[${option.name}]`}
        value={option.values[0]}
        selected
      />
    );
  }

  return (
    <fieldset>
      <legend>{option.name}</legend>

      {option.values.map((value) => {
        const targetURL = new URL(currentURL);
        targetURL.searchParams.set(name, value);

        return (
          <label for={`option:${option.name}:${value}`}>
            <input
              key={value}
              id={`option:${option.name}:${value}`}
              name={`options[${option.name}]`}
              type="radio"
              value={value}
              checked={value === defaultValue}
              hx-get={targetURL.href.slice(targetURL.origin.length)}
              hx-params="none"
              hx-replace-url="true"
              hx-target="#page_ProductDetails"
              hx-indicator="#page_ProductDetails"
              hx-swap="outerHTML"
            ></input>
            {value}
          </label>
        );
      })}
    </fieldset>
  );
}

export default ProductDetails;
