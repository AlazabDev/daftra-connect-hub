---
title: Default module
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# Default module

Base URLs:

* <a href="https://{{subdomain}}.daftra.com/api2">Production: https://{{subdomain}}.daftra.com/api2</a>

* <a href="">Cloud Mock: </a>

* <a href="https://{{subdomain}}.daftra.com/v2/api/entity">v2: https://{{subdomain}}.daftra.com/v2/api/entity</a>

# Authentication

- HTTP Authentication, scheme: bearer

# Authorization

## POST Generate Access Token

POST /v2/oauth/token

> Body Parameters

```yaml
client_secret: jCfy6cMh1X6NTxR3OWLuvEFa0si5uZKr05UeoAEs
client_id: "1"
grant_type: password
username: "{{username}}"
password: "{{password}}"

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|body|body|object| no |none|
|» client_secret|body|string| yes |none|
|» client_id|body|string| yes |none|
|» grant_type|body|string| yes |none|
|» username|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "token_type": "string",
  "expires_in": 0,
  "access_token": "string",
  "refresh_token": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» token_type|string|false|none||none|
|» expires_in|integer|false|none||none|
|» access_token|string|false|none||none|
|» refresh_token|string|false|none||none|

# Endpoints v1/Site

## GET GET Site Info

GET /site_info{format}

Get current site info

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Site": {
      "id": 44,
      "business_name": "Communication Techniques for",
      "first_name": "ERNBKB",
      "last_name": "Team",
      "subdomain": "hrizam.daftara.com",
      "site_logo": "5a5b5b9c3b59c_5964b28344347_genie3.png",
      "invoice_logo": null,
      "address1": "abozabal",
      "address2": "hhy",
      "city": "khanka",
      "state": "qlyuopia",
      "postal_code": "13758",
      "phone1": "1022415830",
      "phone2": "1022415830",
      "country_code": "SA",
      "timezone": "13",
      "date_format": "3",
      "currency_code": "USD",
      "language_code": 41,
      "email": "example@example.com",
      "staff_id": -1,
      "currencyFormat": "$%s",
      "numberFormat": [
        2,
        ".",
        ","
      ],
      "SITE_HASH": "db4715bd"
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Site|object|false|none||none|
|»»» id|integer(int32)|false|none||current site id|
|»»» business_name|string|false|none||business name of the owner|
|»»» first_name|string|false|none||First name of the owner|
|»»» last_name|string|false|none||Last name of the owner|
|»»» subdomain|string|false|none||subdomin of the site|
|»»» site_logo|string|false|none||default site logo|
|»»» invoice_logo|string|false|none||default invoice logo|
|»»» address1|string|false|none||address1 of the owner|
|»»» address2|string|false|none||address2 of the owner|
|»»» city|string|false|none||city of the owner|
|»»» state|string|false|none||state of the owner|
|»»» postal_code|string|false|none||postal code of the owner|
|»»» phone1|string|false|none||phone1 of the owner|
|»»» phone2|string|false|none||phone2 of the owner|
|»»» country_code|string|false|none||countey code of the owner|
|»»» timezone|integer|false|none||timezone of the owner [GET General Listing API with model `Timezone`](/15115384e0)|
|»»» date_format|integer|false|none||date format of the site [GET General Listing API with model `dateFormats`](/15115384e0)|
|»»» currency_code|string|false|none||default currency code|
|»»» language_code|string|false|none||default language code|
|»»» email|string(email)|false|none||owner email|
|»»» staff_id|integer|false|none||current staff id ```Equals -1 if access the api from different domain via ``` [APIKEY](#section/Authentication/APIKEY) get it from [GET STAFF](/15115376e0)|
|»»» is_super_admin|boolean¦null|false|none||if the current staff is super admin ```note that if the current staff is not super admin this parameter is not returned```|
|»»» currencyFormat|string|false|none||default currency format|
|»»» numberFormat|[string]|false|none||Array of three indcies that specify default number format `0 => how many decimals` `1 => decimalpoint symbol` `2 => separator symbol`|
|»»» SITE_HASH|string|false|none||current site hash|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Invoices

## GET GET All Invoices

GET /invoices{format}

Returns a paginated list of the account's invoices and debit notes (and advance payments when that feature is enabled), most recent first.

The list supports rich filtering and sorting through the query parameters below.

By default each item contains the invoice header and its client only. Pass `recursive=1` to also receive the nested line items, payments, taxes, documents and custom fields.

Results are paginated (20 per page by default).

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|page|query|integer| no |Page number to return. Defaults to 1.|
|limit|query|integer| no |Number of records per page. Defaults to 20. No maximum is enforced — very large values return very large responses.|
|recursive|query|integer| no |Association depth. Defaults to 0.|
|keywords|query|string| no |Free-text search across client name, client number, email, invoice number and order number.|
|client_id|query|integer| no |Filter by client id.|
|type|query|integer| no |Filter by document type. This endpoint returns Invoices and Debit Notes (and Advance Payments when that feature is enabled); this value narrows within that set.|
|client_type|query|integer| no |Filter by client type (individual or business).|
|payment_status|query|integer| no |Filter by payment status. In addition to the standard status ids, these special values are supported:|
|draft|query|boolean| no |Set to 1 to return only draft invoices.|
|follow_up_status|query|integer| no |Filter by follow-up status id.|
|currency_code|query|string| no |Filter by currency code (for example, USD).|
|no|query|string| no |Filter by invoice or order number (partial match).|
|item|query|string| no |Return invoices that contain a matching item.|
|tags|query|array[string]| no |Filter by tag id(s).|
|po_number|query|string| no |Filter by purchase-order number. Available when PO numbers are enabled for the account.|
|external_source|query|array[string]| no |Filter by creation source (for example, api or salla).|
|custom_field|query|string| no |Filter by a custom-field value. Combine with custom_field_label to target a specific field.|
|custom_field_label|query|string| no |Custom-field label to match together with custom_field.|
|subscription_id|query|integer| no |Filter by parent/subscription invoice id.|
|work_order_id|query|integer| no |Filter by linked work-order id. Available with the Work Orders plugin.|
|source_type|query|integer| no |Filter by the source document type. Use together with source_id.|
|source_id|query|integer| no |Filter by the source document id. Use together with source_type.|
|order_source_id|query|integer| no |Filter by order source id.|
|shipping_option_id|query|integer| no |Filter by shipping option id.|
|summary_total_from|query|number| no |Return invoices whose total is at least this amount.|
|summary_total_to|query|number| no |Return invoices whose total is at most this amount.|
|date_from|query|string| no |Invoice date range start (YYYY-MM-DD).|
|date_to|query|string| no |Invoice date range end (YYYY-MM-DD).|
|due_date_from|query|string| no |Due-date range start (YYYY-MM-DD).|
|due_date_to|query|string| no |Due-date range end (YYYY-MM-DD).|
|created_from|query|string| no |Created-date range start (YYYY-MM-DD).|
|created_to|query|string| no |Created-date range end (YYYY-MM-DD).|
|einvoice_status|query|integer| no |Filter by electronic-invoice status. Available when e-invoicing is enabled.|
|requisition_delivery_status|query|array[string]| no |Filter by requisition delivery status. Available when requisitions are enabled.|
|staff_id|query|array[string]| no |Filter by the staff member who created the invoice. Available with the Staff plugin and view-all permission.|
|pos_shift_id|query|integer| no |Filter by POS shift id. Available with the POS plugin.|
|sort|query|string| no |Field name to sort by. Defaults to invoice date.|
|direction|query|string| no |Sort direction: ASC or DESC. Defaults to DESC.|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

#### Description

**recursive**: Association depth. Defaults to 0.

| Value | Meaning |
|---|---|
| -1 | Invoice header only |
| 0 | Header + client (default) |
| 1 | Also include line items, payments, taxes, documents and custom fields |

**type**: Filter by document type. This endpoint returns Invoices and Debit Notes (and Advance Payments when that feature is enabled); this value narrows within that set.

| Value | Meaning |
|---|---|
| 0 | Invoice |
| 16 | Debit Note |
| 19 | Advance Payment |

**payment_status**: Filter by payment status. In addition to the standard status ids, these special values are supported:

| Value | Meaning |
|---|---|
| -1 | Draft |
| -2 | Due |
| -3 | Overdue |
| 3 | Subscriptions |
| 4 | Overpaid / credit |

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Invoice": {}
    }
  ],
  "pagination": {
    "prev": "string",
    "next": "string",
    "page": 2,
    "page_count": 5,
    "total_results": 98
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Invoice|any|false|none||none|

*oneOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*xor*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|object|false|none||none|
|»» prev|string¦null|false|none||none|
|»» next|string¦null|false|none||none|
|»» page|integer|false|none||none|
|»» page_count|integer|false|none||none|
|»» total_results|integer|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Invoice

POST /invoices{format}

Creates an invoice. Only `Invoice.client_id` is required; most other fields are optional and several are filled in automatically when omitted. A successful create returns HTTP 202 with the new invoice id and number.

> Body Parameters

```json
{
    "Invoice": {
        "staff_id": 0,
        "subscription_id": 26,
        "store_id": 0,
        "no": "0700000AAAAA0001",
        "po_number": "26",
        "name": "Darrel Gusikowski-Koch",
        "branch_id": 1,
        "client_id": 15,
        "is_offline": true,
        "currency_code": "USD",
        "client_business_name": "Example Client",
        "client_first_name": "Example",
        "client_last_name": "Client",
        "client_email": "client@example.com",
        "client_address1": "Florida West Damionworth Warren County 19902 Schmitt Wells Suite 780",
        "client_address2": "West Virginia South Sandrine Union County 681 Huels Branch Apt. 308",
        "client_postal_code": "29515-2869",
        "client_city": "Santiagocester",
        "client_state": "Vermont",
        "client_country_code": "EG",
        "date": "2018-11-07",
        "draft": false,
        "discount": 0,
        "discount_amount": 0,
        "deposit": 0,
        "deposit_type": 0,
        "notes": "fugiat Ut",
        "html_notes": "voluptate nulla",
        "invoice_layout_id": 1,
        "estimate_id": 0,
        "shipping_options": 2,
        "shipping_amount": null,
        "client_active_secondary_address": false,
        "client_secondary_name": "Steven Zulauf",
        "client_secondary_address1": "Wyoming Lake Leilani Franklin County 39823 Jefferson Street Suite 706",
        "client_secondary_address2": "Oregon Dibbertbury Hamilton County 8594 Clark Street Suite 780",
        "client_secondary_city": "North Shyanne",
        "client_secondary_state": "Florida",
        "client_secondary_postal_code": "00967",
        "client_secondary_country_code": "CC",
        "follow_up_status": null,
        "work_order_id": null,
        "requisition_delivery_status": 2,
        "pos_shift_id": null,
        "qr_code_url": "https://yoursite.daftra.com/qr/?d64=QVE1TmIyaGhiV1ZrSUVGemFISmhaZ0lJTVRFMU16WTJRMUlERkRJd01qSXRNVEF0TWpoVU1EQTZNREU2TVRWYUJBRXdCUUV3",
        "invoice_html_url": "https://yoursite.daftra.com/invoices/preview/2621?hash=c06543fe13bd4850b521733687c53259",
        "invoice_pdf_url": "https://yoursite.daftra.com/invoices/view/2621.pdf?hash=c06543fe13bd4850b521733687c53259"
    },
    "InvoiceItem": [
        {
            "item": "occaecat",
            "description": "Arto vesco sumptus cinis laudantium subito spoliatio admoveo. Vulticulus cruciamentum eveniet denuo tabgo. Usitas ultio vinum alius teres adfectus confero utilis.",
            "unit_price": 77.59,
            "quantity": 1,
            "tax1": null,
            "tax2": null,
            "product_id": 12,
            "col_3": null,
            "col_4": null,
            "col_5": null,
            "discount": 0,
            "discount_type": 2,
            "store_id": 0,
            "lot": [
                586865858
            ],
            "expiry_date": [
                "2024-09-29"
            ],
            "serials": []
        }
    ],
    "Payment": [
        {
            "payment_method": "ad elit Ut dolor adipisicing",
            "amount": 561.89,
            "transaction_id": "payment",
            "treasury_id": -16127808,
            "date": "2025-03-24 21:22:32",
            "staff_id": -86060770
        },
        {
            "payment_method": "ad elit Ut dolor adipisicing",
            "amount": 561.89,
            "transaction_id": "payment",
            "treasury_id": -16127808,
            "date": "2025-03-24 21:22:32",
            "staff_id": -86060770
        }
    ],
    "InvoiceCustomField": {},
    "Deposit": {},
    "InvoiceReminder": {},
    "Document": {},
    "DocumentTitle": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» Invoice|body|object| yes |Invoice header. `client_id` is the only required field; most other fields are optional and several are filled automatically when omitted (currency, language, date format, store).|
|»» staff_id|body|integer| yes |The staff member who created the invoice. `0` means the account owner.|
|»» subscription_id|body|integer| yes |The parent invoice this one follows (for example, the invoice being refunded). Leave null if the invoice has no parent.|
|»» store_id|body|integer| yes |The store / warehouse used for stock deduction. Optional — when omitted, the primary store is used. A store can also be set per line item via `InvoiceItem.store_id`.|
|»» no|body|string| yes |Invoice number. Auto-generated when omitted, but can be overridden.|
|»» po_number|body|string| yes |Purchase order number.|
|»» name|body|string| yes |Used for templates and subscriptions only.|
|»» branch_id|body|integer| yes |The branch for this invoice. The branch must be active. Get the id from the General Listing API (Branch).|
|»» client_id|body|integer| yes |The client this invoice belongs to. **Required.** Get the id from the Clients API.|
|»» is_offline|body|boolean| yes |Whether the client is offline (0 or 1).|
|»» currency_code|body|string| yes |Currency code (for example, `USD`). Optional — defaults to the account currency.|
|»» client_business_name|body|string| yes |Client's business name.|
|»» client_first_name|body|string| yes |Client's first name.|
|»» client_last_name|body|string| yes |Client's last name.|
|»» client_email|body|string| yes |Client's email. Required only when the client's invoicing method is email; otherwise it must be a valid email when provided.|
|»» client_address1|body|string| yes |Client's address line 1.|
|»» client_address2|body|string| yes |Client's address line 2.|
|»» client_postal_code|body|string| yes |Client's postal code.|
|»» client_city|body|string| yes |Client's city.|
|»» client_state|body|string| yes |Client's state.|
|»» client_country_code|body|string| yes |Client's ISO ALPHA-2 country code.|
|»» date|body|string| yes |Invoice date (YYYY-MM-DD). Must fall within an open financial period.|
|»» draft|body|boolean| yes |`0` = final, `1` = draft.|
|»» discount|body|integer| yes |Percentage discount, from 0 to 100. Mutually exclusive with `discount_amount` (set the other to 0). Cannot exceed the account/staff maximum discount.|
|»» discount_amount|body|integer| yes |Fixed discount amount. Mutually exclusive with `discount` (set the other to 0). Cannot exceed the account/staff maximum discount.|
|»» deposit|body|integer| yes |Deposit amount.|
|»» deposit_type|body|integer| yes |Deposit type.|
|»» notes|body|string| yes |Notes shown to the client (up to 80000 characters).|
|»» html_notes|body|string| yes |HTML notes for templates.|
|»» invoice_layout_id|body|integer| yes |Layout used to render the invoice. The default layout is used when omitted.|
|»» estimate_id|body|integer| yes |The estimate this invoice was created from.|
|»» shipping_options|body|integer| yes |Controls how shipping / client details are shown.|
|»» shipping_amount|body|null| yes |Shipping amount.|
|»» client_active_secondary_address|body|boolean| yes |Whether the secondary address is active (0 or 1).|
|»» client_secondary_name|body|string| yes |Secondary contact name.|
|»» client_secondary_address1|body|string| yes |Secondary address line 1.|
|»» client_secondary_address2|body|string| yes |Secondary address line 2.|
|»» client_secondary_city|body|string| yes |Secondary city.|
|»» client_secondary_state|body|string| yes |Secondary state.|
|»» client_secondary_postal_code|body|string| yes |Secondary postal code.|
|»» client_secondary_country_code|body|string| yes |Secondary ISO ALPHA-2 country code.|
|»» follow_up_status|body|null| yes |Follow-up status id.|
|»» work_order_id|body|null| yes |Linked work order id.|
|»» requisition_delivery_status|body|integer| yes |Requisition delivery status.|
|»» pos_shift_id|body|null| yes |POS session id. When set, the store is taken from the POS session.|
|»» qr_code_url|body|string| yes |none|
|»» invoice_html_url|body|string| yes |none|
|»» invoice_pdf_url|body|string| yes |none|
|»» type|body|integer| no |The invoice document type. Defaults to `0` (Invoice).|
|»» client_currency_code|body|string| no |Optional client-side currency code.|
|»» issue_date|body|string(date)| no |Optional issue date (YYYY-MM-DD).|
|»» due_after|body|integer| no |Number of days until the invoice is due (0 or more). Optional.|
|»» terms|body|string| no |Terms and conditions text (up to 80000 characters).|
|»» order_source_id|body|integer¦null| no |Order source. Required only when "order source required" is enabled in your settings.|
|»» language_id|body|integer| no |Invoice language. Defaults to the account language.|
|»» date_format|body|string| no |Date format. Defaults to the account date format.|
|»» cost_center_id|body|integer¦null| no |Cost center used for journal distribution.|
|»» sales_person_id|body|integer¦null| no |Sales person assigned to the invoice. Use `-2` to assign multiple sales persons.|
|»» terminal_id|body|string| no |POS terminal id. Links the invoice to a POS shift.|
|»» unique_id|body|string| no |Optional client-supplied reference. When present, the server recalculates item offers and discounts.|
|»» source_type|body|integer¦null| no |The source document that generated this invoice. Use together with `source_id` (the id of that source). Leave empty if there is no source.|
|»» source_id|body|integer¦null| no |The id of the source document referenced by `source_type`.|
|» InvoiceItem|body|[object]| yes |Invoice line items. Normally provided when creating an invoice.|
|»» item|body|string| no |Line label / name. Optional when creating via the API.|
|»» description|body|string| no |Detailed line description.|
|»» unit_price|body|number| no |Unit price. Enter the number only, with no currency symbol.|
|»» quantity|body|integer| no |Quantity. Decimal values are allowed.|
|»» tax1|body|null| no |Primary tax id applied to the line.|
|»» tax2|body|null| no |Secondary (stacked) tax id applied to the line.|
|»» product_id|body|integer| no |Product id. When branch management is enabled, the product must exist in the current branch.|
|»» col_3|body|null| no |none|
|»» col_4|body|null| no |none|
|»» col_5|body|null| no |none|
|»» discount|body|integer| no |Line discount. Cannot exceed the maximum discount.|
|»» discount_type|body|integer| no |Discount type.|
|»» store_id|body|integer| no |Store / warehouse for this line's stock deduction.|
|»» lot|body|[integer]| no |Lot / batch numbers for tracked products.|
|»» expiry_date|body|[string]| no |Expiry dates matching `lot`, for tracked products.|
|»» serials|body|[string]| no |Serial numbers for serialized products.|
|» Payment|body|[object]| yes |Optional payments recorded together with the invoice.|
|»» payment_method|body|string| yes |Payment method. **Required.** Must be one of your account's active payment methods.|
|»» amount|body|number| yes |Payment amount.|
|»» transaction_id|body|string| yes |External transaction reference.|
|»» treasury_id|body|integer| yes |Treasury that receives the payment. When omitted, a default treasury is chosen automatically.|
|»» date|body|string| yes |Payment date. Defaults to today when omitted.|
|»» staff_id|body|integer| yes |Staff member who recorded the payment. Defaults to `0` (owner).|
|»» email|body|string(email)| no |Required only when `payment_method` is `paypal` or `stripe`.|
|» InvoiceCustomField|body|object| yes |Custom field values defined for invoices.|
|» Deposit|body|object| yes |Deposit details.|
|» InvoiceReminder|body|object| yes |Invoice reminder configuration.|
|» Document|body|object| yes |Attachment(s) stored with the invoice.|
|» DocumentTitle|body|object| yes |Attachment title(s).|

#### Description

**»» deposit_type**: Deposit type.

| Value | Meaning |
|---|---|
| 1 | Unpaid |
| 2 | Paid |

`0` means not set.

**»» shipping_options**: Controls how shipping / client details are shown.

| Value | Meaning |
|---|---|
| (empty) | Auto |
| 1 | Hide shipping options |
| 2 | Show main client details |
| 3 | Show secondary client details |

**»» requisition_delivery_status**: Requisition delivery status.

| Value | Meaning |
|---|---|
| 1 | Pending |
| 2 | Not All Available |
| 3 | Accepted |
| 4 | Cancelled |
| 5 | Modified |

**»» type**: The invoice document type. Defaults to `0` (Invoice).

| Value | Meaning |
|---|---|
| 0 | Invoice |
| 1 | Template |
| 2 | Subscription |
| 3 | Estimate |
| 5 | Credit Note |
| 6 | Refund Receipt |
| 7 | Resellers |
| 8 | Booking |
| 9 | Temp Invoice |
| 10 | Insurance Invoice |
| 11 | Insurance Refund |
| 12 | Sales Order |
| 13 | Temp Booking |
| 14 | Reservation Order |
| 15 | Shop Front |
| 16 | Debit Note |
| 17 | Contract Installment |
| 18 | Lease Contract |
| 19 | Advance Payment |

**»» source_type**: The source document that generated this invoice. Use together with `source_id` (the id of that source). Leave empty if there is no source.

| Value | Meaning |
|---|---|
| 0 | Invoice |
| 1 | Template |
| 2 | Subscription |
| 3 | Estimate |
| 5 | Credit Note |
| 6 | Refund Receipt |
| 7 | Resellers |
| 8 | Booking |
| 9 | Temp Invoice |
| 10 | Insurance Invoice |
| 11 | Insurance Refund |
| 12 | Sales Order |
| 13 | Temp Booking |
| 14 | Reservation Order |
| 16 | Debit Note |
| 17 | Contract Installment |
| 18 | Lease Contract |
| 19 | Advance Payment |

**»» discount_type**: Discount type.

| Value | Meaning |
|---|---|
| 1 | Percentage |
| 2 | Value |

#### Enum

|Name|Value|
|---|---|
|»» type|0|
|»» type|1|
|»» type|2|
|»» type|3|
|»» type|5|
|»» type|6|
|»» type|7|
|»» type|8|
|»» type|9|
|»» type|10|
|»» type|11|
|»» type|12|
|»» type|13|
|»» type|14|
|»» type|15|
|»» type|16|
|»» type|17|
|»» type|18|
|»» type|19|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Invoice

GET /invoices/{id}{format}

Returns a single **standard invoice** by id, with full nested detail — line items, payments, taxes, documents, custom fields and the client — in one response (no `recursive` flag needed).

Only standard invoices (document type Invoice) are returned here; an id belonging to another document type (estimate, credit note, debit note, refund, …) returns **404 Invoice not found** — use that type's own single-resource endpoint instead.

Requires permission to view the invoice (all-invoices access, or being the invoice's own staff, plus invoice-details access).

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Invoice": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Invoice|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Invoices

PUT /invoices/{id}{format}

Edit an existing **standard invoice** by id. Send via `PUT /invoices/{id}` (or `POST /invoices/{id}`) with the full invoice payload — submitted line items, payments and custom fields replace the existing ones.

The invoice **cannot be edited** (returns 400 or 404) when it: is on a different branch than it was created on; has a valid (accepted) electronic invoice; has related credit charges, installment agreements or membership/credit renewals; falls in a closed financial period (non-draft); is tied to a closed POS shift; has a received requisition; or is selected in a production plan.

Requires edit permission — all-invoices edit access, or being the invoice's own staff with edit-own access.

> Body Parameters

```json
{
  "Invoice": {
    "client_id": 15,
    "type": 0,
    "store_id": 0,
    "staff_id": 0,
    "subscription_id": 0,
    "no": "0700000AAAAA0001",
    "po_number": "string",
    "name": "string",
    "branch_id": 0,
    "is_offline": true,
    "currency_code": "USD",
    "client_currency_code": "string",
    "date": "2026-06-17",
    "issue_date": "2019-08-24",
    "due_after": 0,
    "draft": false,
    "discount": 0,
    "discount_amount": 0,
    "deposit": 0,
    "deposit_type": 1,
    "shipping_options": 0,
    "shipping_amount": 0.1,
    "notes": "string",
    "terms": "string",
    "html_notes": "string",
    "invoice_layout_id": 0,
    "estimate_id": 0,
    "order_source_id": 0,
    "language_id": 0,
    "date_format": "string",
    "cost_center_id": 0,
    "sales_person_id": 0,
    "terminal_id": "string",
    "unique_id": "string",
    "pos_shift_id": 0,
    "follow_up_status": 0,
    "work_order_id": 0,
    "requisition_delivery_status": 0,
    "source_type": 0,
    "source_id": 0,
    "client_business_name": "string",
    "client_first_name": "string",
    "client_last_name": "string",
    "client_email": "user@example.com",
    "client_address1": "string",
    "client_address2": "string",
    "client_postal_code": "string",
    "client_city": "string",
    "client_state": "string",
    "client_country_code": "EG",
    "client_active_secondary_address": true,
    "client_secondary_name": "string",
    "client_secondary_address1": "string",
    "client_secondary_address2": "string",
    "client_secondary_city": "string",
    "client_secondary_state": "string",
    "client_secondary_postal_code": "string",
    "client_secondary_country_code": "string"
  },
  "InvoiceItem": [
    {
      "item": "string",
      "description": "string",
      "unit_price": 0,
      "quantity": 0,
      "tax1": 0,
      "tax2": 0,
      "product_id": 0,
      "discount": 0,
      "discount_type": 0,
      "store_id": 0,
      "lot": [
        "string"
      ],
      "expiry_date": [
        "2019-08-24"
      ],
      "serials": [
        "string"
      ]
    }
  ],
  "Payment": [
    {
      "payment_method": "string",
      "amount": 0,
      "transaction_id": "string",
      "treasury_id": 0,
      "date": "string",
      "staff_id": 0,
      "email": "user@example.com"
    }
  ],
  "InvoiceCustomField": {},
  "Deposit": {},
  "InvoiceReminder": {},
  "Document": {},
  "DocumentTitle": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» Invoice|body|object| yes |Invoice header. `client_id` is the only required field; most other fields are optional and several are filled automatically when omitted (currency, language, date format, store).|
|»» client_id|body|integer(int64)| yes |The client this invoice belongs to. **Required.** Get the id from the Clients API.|
|»» type|body|integer| no |The invoice document type. Defaults to `0` (Invoice).|
|»» store_id|body|integer(int64)| no |The store / warehouse used for stock deduction. Optional — when omitted, the primary store is used. A store can also be set per line item via `InvoiceItem.store_id`.|
|»» staff_id|body|integer(int64)| no |The staff member who created the invoice. `0` means the account owner.|
|»» subscription_id|body|integer(int64)¦null| no |The parent invoice this one follows (for example, the invoice being refunded). Leave null if the invoice has no parent.|
|»» no|body|string¦null| no |Invoice number. Auto-generated when omitted, but can be overridden.|
|»» po_number|body|string¦null| no |Purchase order number.|
|»» name|body|string¦null| no |Used for templates and subscriptions only.|
|»» branch_id|body|integer| no |The branch for this invoice. The branch must be active. Get the id from the General Listing API (Branch).|
|»» is_offline|body|boolean| no |Whether the client is offline (0 or 1).|
|»» currency_code|body|string| no |Currency code (for example, `USD`). Optional — defaults to the account currency.|
|»» client_currency_code|body|string| no |Optional client-side currency code.|
|»» date|body|string(date)| no |Invoice date (YYYY-MM-DD). Must fall within an open financial period.|
|»» issue_date|body|string(date)| no |Optional issue date (YYYY-MM-DD).|
|»» due_after|body|integer| no |Number of days until the invoice is due (0 or more). Optional.|
|»» draft|body|boolean| no |`0` = final, `1` = draft.|
|»» discount|body|number(double)| no |Percentage discount, from 0 to 100. Mutually exclusive with `discount_amount` (set the other to 0). Cannot exceed the account/staff maximum discount.|
|»» discount_amount|body|number(double)| no |Fixed discount amount. Mutually exclusive with `discount` (set the other to 0). Cannot exceed the account/staff maximum discount.|
|»» deposit|body|number(double)| no |Deposit amount.|
|»» deposit_type|body|integer| no |Deposit type.|
|»» shipping_options|body|integer| no |Controls how shipping / client details are shown.|
|»» shipping_amount|body|number(double)¦null| no |Shipping amount.|
|»» notes|body|string| no |Notes shown to the client (up to 80000 characters).|
|»» terms|body|string| no |Terms and conditions text (up to 80000 characters).|
|»» html_notes|body|string| no |HTML notes for templates.|
|»» invoice_layout_id|body|integer(int64)¦null| no |Layout used to render the invoice. The default layout is used when omitted.|
|»» estimate_id|body|integer(int64)¦null| no |The estimate this invoice was created from.|
|»» order_source_id|body|integer¦null| no |Order source. Required only when "order source required" is enabled in your settings.|
|»» language_id|body|integer| no |Invoice language. Defaults to the account language.|
|»» date_format|body|string| no |Date format. Defaults to the account date format.|
|»» cost_center_id|body|integer¦null| no |Cost center used for journal distribution.|
|»» sales_person_id|body|integer¦null| no |Sales person assigned to the invoice. Use `-2` to assign multiple sales persons.|
|»» terminal_id|body|string| no |POS terminal id. Links the invoice to a POS shift.|
|»» unique_id|body|string| no |Optional client-supplied reference. When present, the server recalculates item offers and discounts.|
|»» pos_shift_id|body|integer¦null| no |POS session id. When set, the store is taken from the POS session.|
|»» follow_up_status|body|integer¦null| no |Follow-up status id.|
|»» work_order_id|body|integer¦null| no |Linked work order id.|
|»» requisition_delivery_status|body|integer¦null| no |Requisition delivery status.|
|»» source_type|body|integer¦null| no |The source document that generated this invoice. Use together with `source_id` (the id of that source). Leave empty if there is no source.|
|»» source_id|body|integer¦null| no |The id of the source document referenced by `source_type`.|
|»» client_business_name|body|string| no |Client's business name.|
|»» client_first_name|body|string| no |Client's first name.|
|»» client_last_name|body|string| no |Client's last name.|
|»» client_email|body|string(email)| no |Client's email. Required only when the client's invoicing method is email; otherwise it must be a valid email when provided.|
|»» client_address1|body|string| no |Client's address line 1.|
|»» client_address2|body|string| no |Client's address line 2.|
|»» client_postal_code|body|string| no |Client's postal code.|
|»» client_city|body|string| no |Client's city.|
|»» client_state|body|string| no |Client's state.|
|»» client_country_code|body|string| no |Client's ISO ALPHA-2 country code.|
|»» client_active_secondary_address|body|boolean| no |Whether the secondary address is active (0 or 1).|
|»» client_secondary_name|body|string| no |Secondary contact name.|
|»» client_secondary_address1|body|string| no |Secondary address line 1.|
|»» client_secondary_address2|body|string| no |Secondary address line 2.|
|»» client_secondary_city|body|string| no |Secondary city.|
|»» client_secondary_state|body|string| no |Secondary state.|
|»» client_secondary_postal_code|body|string| no |Secondary postal code.|
|»» client_secondary_country_code|body|string| no |Secondary ISO ALPHA-2 country code.|
|» InvoiceItem|body|[object]| no |Invoice line items. Normally provided when creating an invoice.|
|»» item|body|string| no |Line label / name. Optional when creating via the API.|
|»» description|body|string| no |Detailed line description.|
|»» unit_price|body|number| no |Unit price. Enter the number only, with no currency symbol.|
|»» quantity|body|number| no |Quantity. Decimal values are allowed.|
|»» tax1|body|integer¦null| no |Primary tax id applied to the line.|
|»» tax2|body|integer¦null| no |Secondary (stacked) tax id applied to the line.|
|»» product_id|body|integer| no |Product id. When branch management is enabled, the product must exist in the current branch.|
|»» discount|body|number| no |Line discount. Cannot exceed the maximum discount.|
|»» discount_type|body|integer| no |Discount type.|
|»» store_id|body|integer| no |Store / warehouse for this line's stock deduction.|
|»» lot|body|[string]| no |Lot / batch numbers for tracked products.|
|»» expiry_date|body|[string]| no |Expiry dates matching `lot`, for tracked products.|
|»» serials|body|[string]| no |Serial numbers for serialized products.|
|» Payment|body|[object]| no |Optional payments recorded together with the invoice.|
|»» payment_method|body|string| yes |Payment method. **Required.** Must be one of your account's active payment methods.|
|»» amount|body|number| no |Payment amount.|
|»» transaction_id|body|string| no |External transaction reference.|
|»» treasury_id|body|integer| no |Treasury that receives the payment. When omitted, a default treasury is chosen automatically.|
|»» date|body|string| no |Payment date. Defaults to today when omitted.|
|»» staff_id|body|integer| no |Staff member who recorded the payment. Defaults to `0` (owner).|
|»» email|body|string(email)| no |Required only when `payment_method` is `paypal` or `stripe`.|
|» InvoiceCustomField|body|object| no |Custom field values defined for invoices.|
|» Deposit|body|object| no |Deposit details.|
|» InvoiceReminder|body|object| no |Invoice reminder configuration.|
|» Document|body|object| no |Attachment(s) stored with the invoice.|
|» DocumentTitle|body|object| no |Attachment title(s).|

#### Description

**»» type**: The invoice document type. Defaults to `0` (Invoice).

| Value | Meaning |
|---|---|
| 0 | Invoice |
| 1 | Template |
| 2 | Subscription |
| 3 | Estimate |
| 5 | Credit Note |
| 6 | Refund Receipt |
| 7 | Resellers |
| 8 | Booking |
| 9 | Temp Invoice |
| 10 | Insurance Invoice |
| 11 | Insurance Refund |
| 12 | Sales Order |
| 13 | Temp Booking |
| 14 | Reservation Order |
| 15 | Shop Front |
| 16 | Debit Note |
| 17 | Contract Installment |
| 18 | Lease Contract |
| 19 | Advance Payment |

**»» deposit_type**: Deposit type.

| Value | Meaning |
|---|---|
| 1 | Unpaid |
| 2 | Paid |

`0` means not set.

**»» shipping_options**: Controls how shipping / client details are shown.

| Value | Meaning |
|---|---|
| (empty) | Auto |
| 1 | Hide shipping options |
| 2 | Show main client details |
| 3 | Show secondary client details |

**»» requisition_delivery_status**: Requisition delivery status.

| Value | Meaning |
|---|---|
| 1 | Pending |
| 2 | Not All Available |
| 3 | Accepted |
| 4 | Cancelled |
| 5 | Modified |

**»» source_type**: The source document that generated this invoice. Use together with `source_id` (the id of that source). Leave empty if there is no source.

| Value | Meaning |
|---|---|
| 0 | Invoice |
| 1 | Template |
| 2 | Subscription |
| 3 | Estimate |
| 5 | Credit Note |
| 6 | Refund Receipt |
| 7 | Resellers |
| 8 | Booking |
| 9 | Temp Invoice |
| 10 | Insurance Invoice |
| 11 | Insurance Refund |
| 12 | Sales Order |
| 13 | Temp Booking |
| 14 | Reservation Order |
| 16 | Debit Note |
| 17 | Contract Installment |
| 18 | Lease Contract |
| 19 | Advance Payment |

**»» discount_type**: Discount type.

| Value | Meaning |
|---|---|
| 1 | Percentage |
| 2 | Value |

#### Enum

|Name|Value|
|---|---|
|»» type|0|
|»» type|1|
|»» type|2|
|»» type|3|
|»» type|5|
|»» type|6|
|»» type|7|
|»» type|8|
|»» type|9|
|»» type|10|
|»» type|11|
|»» type|12|
|»» type|13|
|»» type|14|
|»» type|15|
|»» type|16|
|»» type|17|
|»» type|18|
|»» type|19|
|»» deposit_type|1|
|»» deposit_type|2|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Invoices

DELETE /invoices/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Bulk Add Invoices

POST /invoices/add_bulk.json

Creates multiple invoices in a single request. The request body is a **JSON array**; each element has the exact same shape as the body of **Add New Invoice** (an object with an `Invoice` member plus optional `InvoiceItem`, `Payment`, etc.).

Invoices are created **one by one and the operation is not atomic** — if one element fails validation the others are still created. The response is a **JSON array** with one result object per submitted invoice, in the same order as the request. A successful element carries the new invoice `id` and number; a failed element carries an error result with a message, so you must inspect each element to confirm it succeeded.

Per-element fields and defaulting behaviour are identical to **Add New Invoice** — see that endpoint for the full field reference.

> Body Parameters

```json
[
  {
    "Invoice": {
      "client_id": 7,
      "staff_id": 1,
      "branch_id": 1,
      "client_email": "test@test.tesdttt",
      "store_id": 1,
      "type": 0,
      "currency_code": "USD",
      "date": "2026-06-17",
      "draft": false,
      "discount": 0,
      "discount_amount": 0,
      "deposit": 0,
      "notes": "Thanks for your business"
    },
    "InvoiceItem": [
      {
        "item": "Consulting service",
        "description": "Monthly retainer",
        "unit_price": 100.0,
        "quantity": 2,
        "tax1": null,
        "tax2": null,
        "product_id": 3,
        "discount": 0,
        "discount_type": 2,
        "store_id": 0,
        "lot": [],
        "expiry_date": [],
        "serials": []
      }
    ],
    "Payment": [
      {
        "payment_method": "cash",
        "amount": 200.0
      }
    ],
    "InvoiceCustomField": {},
    "Deposit": {},
    "InvoiceReminder": {},
    "Document": {},
    "DocumentTitle": {}
  },
  {
    "Invoice": {
      "client_id": 6,
      "client_email": "test@test.tesdttt",
      "staff_id": 1,
      "branch_id": 1,
      "store_id": 1,
      "type": 0,
      "currency_code": "USD",
      "date": "2026-06-17",
      "draft": false,
      "discount": 0,
      "discount_amount": 0,
      "deposit": 0,
      "notes": "Thanks for your business"
    },
    "InvoiceItem": [
      {
        "item": "Consulting service",
        "description": "Monthly retainer",
        "unit_price": 100.0,
        "quantity": 2,
        "tax1": null,
        "tax2": null,
        "product_id": 2,
        "discount": 0,
        "discount_type": 2,
        "store_id": 0,
        "lot": [],
        "expiry_date": [],
        "serials": []
      }
    ],
    "Payment": [
      {
        "payment_method": "cash",
        "amount": 200.0
      }
    ],
    "InvoiceCustomField": {},
    "Deposit": {},
    "InvoiceReminder": {},
    "Document": {},
    "DocumentTitle": {}
  }
]
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|send|query|string| yes |none|
|client_id|query|string| yes |none|
|terminal_id|query|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|array[object]| yes |none|

> Response Examples

> 200 Response

```json
[
  {
    "result": "successful",
    "code": 202,
    "id": 2415,
    "invoice_number": "0700000AAAAA0001",
    "invoice_pos_html": "string"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

*One result object per submitted invoice, in request order. Successful items carry the created invoice id/number; failed items carry an error result.*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» id|integer|false|none||The new invoice id.|
|» invoice_number|string|false|none||The generated invoice number.|
|» invoice_pos_html|string|false|none||Rendered POS receipt HTML. Returned only for POS contexts.|

# Endpoints v1/Estimates

## GET GET All Estimates

GET /estimates{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Estimate": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Estimate|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Estimate

POST /estimates{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Estimate

GET /estimates/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Estimate": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Estimate|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Estimates

PUT /estimates/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Estimates

DELETE /estimates/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Credit Notes

## GET GET All Credit Notes

GET /credit_notes{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "CreditNote": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» CreditNote|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Credit Note

POST /credit_notes{format}

> Body Parameters

```json
{
  "CreditNote": null,
  "InvoiceItem": [
    {
      "invoice_id": 0,
      "item": "string",
      "description": "string",
      "unit_price": 0.1,
      "quantity": 0,
      "tax1": 0,
      "tax2": 0,
      "product_id": 0,
      "col_3": null,
      "col_4": null,
      "col_5": null,
      "discount": 0.1,
      "discount_type": "1 => Percentage",
      "store_id": 0
    }
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Credit Note

GET /credit_notes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "CreditNote": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» CreditNote|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Credit Notes

PUT /credit_notes/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Credit Notes

DELETE /credit_notes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Refund Receipts

## GET GET All Refund Receipts

GET /refund_receipts{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "RefundReceipt": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» RefundReceipt|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Refund Receipt

POST /refund_receipts{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Refund Receipt

GET /refund_receipts/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "RefundReceipt": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» RefundReceipt|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Refund Receipts

PUT /refund_receipts/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Refund Receipts

DELETE /refund_receipts/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Clients

## GET GET All Clients

GET /clients{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|integer| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Client": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Client|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Client

POST /clients{format}

> Body Parameters

```json
{
    "Client": {
        "is_offline": true,
        "client_number": "0000715",
        "staff_id": 0,
        "business_name": "John Smith",
        "first_name": "",
        "last_name": "",
        "email": "Julianne.Auer16@hotmail.com",
        "password": "gZFpvP16RucMOTo",
        "address1": "53399 W 11th Street",
        "address2": "Suite 556",
        "city": "Williamsonburgh",
        "state": "New York",
        "postal_code": "27840-6665",
        "phone1": "(543) 267-2492",
        "phone2": "(840) 200-8978",
        "country_code": "HT",
        "notes": "reprehenderit",
        "active_secondary_address": true,
        "secondary_name": "Kristin Sawayn",
        "secondary_address1": "87198 Torp Centers",
        "secondary_address2": "voluptate officia tempor",
        "secondary_city": "Santinoworth",
        "secondary_state": "Idaho",
        "secondary_postal_code": "51894-7338",
        "secondary_country_code": "MK",
        "default_currency_code": "PLN",
        "follow_up_status": null,
        "category": "in pariatur anim id",
        "group_price_id": 298,
        "timezone": 83142592,
        "bn1": "eiusmod proident irure",
        "bn1_label": "adipisicing nostrud esse",
        "bn2_label": "est occaecat laborum reprehenderit",
        "bn2": "ex",
        "starting_balance": null,
        "type": 2,
        "birth_date": "2018-05-10",
        "gender": 2,
        "map_location": "31.287550225000018,30.075630726558106,5",
        "credit_limit": "aute labore",
        "credit_period": "sint culpa",
        "branch_id": 1
    }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Client

GET /clients/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Client": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Client|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Clients

PUT /clients/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Clients

DELETE /clients/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Suppliers

## GET GET All Suppliers

GET /suppliers{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Supplier": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Supplier|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Supplier

POST /suppliers{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Supplier

GET /suppliers/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Supplier": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Supplier|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Suppliers

PUT /suppliers/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Suppliers

DELETE /suppliers/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Work Orders

## GET GET All Work Orders

GET /work_orders{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "WorkOrder": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» WorkOrder|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Work Order

POST /work_orders{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Work Order

GET /work_orders/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Edit Work Orders

PUT /work_orders/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Work Orders

DELETE /work_orders/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Client Appointments

## GET GET All Client Appointments

GET /client_appointments{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "ClientAppointment": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» ClientAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Client Appointment

POST /client_appointments{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Client Appointment

GET /client_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "ClientAppointment": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» ClientAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Client Appointments

PUT /client_appointments/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Client Appointments

DELETE /client_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Invoice Appointments

## GET GET All Invoice Appointments

GET /invoice_appointments{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "InvoiceAppointment": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» InvoiceAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Invoice Appointment

POST /invoice_appointments{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Invoice Appointment

GET /invoice_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "InvoiceAppointment": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» InvoiceAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Invoice Appointments

PUT /invoice_appointments/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Invoice Appointments

DELETE /invoice_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Estimate Appointments

## GET GET All Estimate Appointments

GET /estimate_appointments{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "EstimateAppointment": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» EstimateAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Estimate Appointment

POST /estimate_appointments{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Estimate Appointment

GET /estimate_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "EstimateAppointment": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» EstimateAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Estimate Appointments

PUT /estimate_appointments/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Estimate Appointments

DELETE /estimate_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Work Order Appointments

## GET GET All Work Order Appointments

GET /work_order_appointments{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "WorkOrderAppointment": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» WorkOrderAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Work Order Appointment

POST /work_order_appointments{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Work Order Appointment

GET /work_order_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "WorkOrderAppointment": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» WorkOrderAppointment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Work Order Appointments

PUT /work_order_appointments/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Work Order Appointments

DELETE /work_order_appointments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Notes

## GET GET All Notes

GET /notes{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Note": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Note|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Note

GET /notes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Note": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Note|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Notes

PUT /notes/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Notes

DELETE /notes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Note

POST /notes/{type}/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|type|path|string| yes |none|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Time Tracking

## GET GET All Time Tracking

GET /time_tracking{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "TimeTracking": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» TimeTracking|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Time Tracking

POST /time_tracking{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Time Tracking

GET /time_tracking/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "TimeTracking": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» TimeTracking|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Time Tracking

PUT /time_tracking/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Time Tracking

DELETE /time_tracking/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Invoice Payments

## GET GET All Invoice Payments

GET /invoice_payments{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "InvoicePayment": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» InvoicePayment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Invoice Payment

POST /invoice_payments{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Invoice Payment

GET /invoice_payments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "InvoicePayment": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» InvoicePayment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Invoice Payments

PUT /invoice_payments/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Invoice Payments

DELETE /invoice_payments/{id}{format}

Delete an invoice payment by its id.

Removing the payment re-adjusts the related invoice's paid total and the client's balance, and removes any attachments linked to the payment.

**Access:** requires permission to edit/remove invoice payments — either across all payments, or limited to the caller's own payments. Payments tied to an advance-payment invoice, and (when automatic invoice payment is enabled) client-credit payments, cannot be deleted via the API.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |Numeric reference of the invoice payment to delete.|
|format|path|string| yes |Response format suffix appended to the path, e.g. `.json`.|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "result": "successful",
  "code": 200,
  "message": "Payment has been deleted"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The payment was deleted.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The payment cannot be deleted — for example its date falls within a closed accounting period.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication is missing or invalid.|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The authenticated user lacks permission to delete this payment.|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No invoice payment matches the supplied id.|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The payment could not be deleted due to a server error.|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||Human-readable confirmation.|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Client Payments

## GET GET All Client Payments

GET /client_payments{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "ClientPayment": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» ClientPayment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Client Payment

POST /client_payments{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Client Payment

GET /client_payments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "ClientPayment": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» ClientPayment|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Client Payments

PUT /client_payments/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Client Payments

DELETE /client_payments/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Products

## GET GET All Products

GET /products{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |Show p|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|load_custom_data|query|integer| no |Show products custom data|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Product": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Product|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Product

POST /products{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Product

GET /products/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Product": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Product|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Products

PUT /products/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Products

DELETE /products/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Journals

## GET GET All Journals

GET /journals{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Journal": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Journal|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Journal

POST /journals{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Journal

GET /journals/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Journal": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Journal|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Journals

PUT /journals/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Journals

DELETE /journals/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Journal Accounts

## GET GET All Journal Accounts

GET /journal_accounts{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "JournalAccount": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» JournalAccount|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Journal Account

POST /journal_accounts{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Journal Account

GET /journal_accounts/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "JournalAccount": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» JournalAccount|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Journal Accounts

PUT /journal_accounts/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Journal Accounts

DELETE /journal_accounts/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Journal Cats

## GET GET All Journal Cats

GET /journal_cats{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "JournalCat": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» JournalCat|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Journal Cat

POST /journal_cats{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Journal Cat

GET /journal_cats/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "JournalCat": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» JournalCat|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Journal Cats

PUT /journal_cats/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Journal Cats

DELETE /journal_cats/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Expenses

## GET GET All Expenses

GET /expenses{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Expense": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Expense|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Expens

POST /expenses{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Expens

GET /expenses/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Expense": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Expense|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Expenses

PUT /expenses/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Expenses

DELETE /expenses/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Incomes

## GET GET All Incomes

GET /incomes{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Income": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Income|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Income

POST /incomes{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Income

GET /incomes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Income": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Income|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Incomes

PUT /incomes/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Incomes

DELETE /incomes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Taxes

## GET GET All Taxes

GET /taxes{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Tax": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Tax|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Taxe

POST /taxes{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Taxe

GET /taxes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Tax": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Tax|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Taxes

PUT /taxes/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Taxes

DELETE /taxes/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Purchase Invoices

## GET GET All Purchase Invoices

GET /purchase_invoices{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "PurchaseOrder": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» PurchaseOrder|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Purchase Invoice

POST /purchase_invoices{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Purchase Invoice

GET /purchase_invoices/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "PurchaseOrder": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» PurchaseOrder|any|false|none||none|

*allOf*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*and*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|»»» *anonymous*|any|false|none||none|

*continued*

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Purchase Invoices

PUT /purchase_invoices/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Purchase Invoices

DELETE /purchase_invoices/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Purchase Refunds

## GET GET All Purchase Refunds

GET /purchase_refunds{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "PurchaseRefund": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» PurchaseRefund|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Purchase Refund

POST /purchase_refunds{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Purchase Refund

GET /purchase_refunds/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "PurchaseRefund": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» PurchaseRefund|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Purchase Refunds

PUT /purchase_refunds/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Purchase Refunds

DELETE /purchase_refunds/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Stock Transactions

## GET GET All Stock Transactions

GET /stock_transactions{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "StockTransaction": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» StockTransaction|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Stock Transaction

POST /stock_transactions{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Stock Transaction

GET /stock_transactions/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "StockTransaction": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» StockTransaction|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Stock Transactions

PUT /stock_transactions/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Stock Transactions

DELETE /stock_transactions/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Stores

## GET GET All Stores

GET /stores{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Store": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Store|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Store

POST /stores{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Store

GET /stores/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Store": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Store|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Stores

PUT /stores/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Stores

DELETE /stores/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Treasuries

## GET GET All Treasuries

GET /treasuries{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Treasury": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Treasury|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Treasury

POST /treasuries{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Treasury

GET /treasuries/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Treasury": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Treasury|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## PUT Edit Treasuries

PUT /treasuries/{id}{format}

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Treasuries

DELETE /treasuries/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Product Categories

## GET GET All Product Categories

GET /product_categories{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "ProductCategory": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invalid Category You must send type from the types above|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» ProductCategory|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Product Category

GET /product_categories/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "ProductCategory": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» ProductCategory|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Staff

## GET GET All Staff

GET /staff{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|format|path|string| yes |none|
|limit|query|integer| no |The collection items limit|
|page|query|integer| no |The collection items page|
|load_custom_data|query|integer| no |Show staff custom data|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    {
      "Staff": null
    }
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[object]|false|none||none|
|»» Staff|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET GET Single Staff

GET /staff/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Staff": null
  },
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Staff|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Client-attendance-log

## POST Add New Client-attendance-log

POST /client-attendance-log/store

> Body Parameters

```json
null
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|any| no |none|

> Response Examples

> 202 Response

```json
{
  "code": 202,
  "result": "successful",
  "id": "2415"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **202**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» id|integer|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» validation_errors|object|false|none||none|
|»» Attribute that caused the error|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/General Listing

## GET GET General Listing

GET /listing/{model}{format}

Get list data as key,value pairs the key is the item_id and value is its title

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|model|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": {
    "Listing": {
      "1": "title1",
      "2": "title2"
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Invalid Model You must send Model from the models mentioned above|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|object|false|none||none|
|»» Listing|object|false|none||none|
|»»» **additionalProperties**|object|false|none||Item key,value pair|
|»»»» item_id|integer(int32)|false|none||none|
|»»»» title|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v1/Requsitions

## GET GET All Requisitions 

GET /requisitions

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Add New Requisition

POST /requisitions

> Body Parameters

```json
{
    "Requisition": {
        "type": 1,
        "currency_code":"",
        "Status":"",
        "Order_type":"",
        "work_order_id":"",
        "date": "09/11/2025 14:32",
        "store_id": "1",
        "To_store_id":"", 
        "journal_account_id": "",
        "number": "",
        "notes": ""
    },
    "RequisitionItem":[
            {
                "item":"item",
                "product_id":12,
                "org_name": "",
                "unit_price": 1,
                "quantity":1,
                 "lot": [586865858],
                 "expiry_date": ["2024-09-29"],
                 "serials":[]   
            }
        ]
}

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» Requisition|body|object| yes |none|
|»» type|body|integer| yes |none|
|»» currency_code|body|string| yes |none|
|»» Status|body|string| yes |none|
|»» Order_type|body|string| yes |none|
|»» work_order_id|body|string| yes |none|
|»» date|body|string| yes |none|
|»» store_id|body|string| yes |none|
|»» To_store_id|body|string| yes |none|
|»» journal_account_id|body|string| yes |none|
|»» number|body|string| yes |none|
|»» notes|body|string| yes |none|
|» RequisitionItem|body|[object]| yes |none|
|»» item|body|string| no |none|
|»» product_id|body|integer| no |none|
|»» org_name|body|string| no |none|
|»» unit_price|body|integer| no |none|
|»» quantity|body|integer| no |none|
|»» lot|body|[integer]| no |none|
|»» expiry_date|body|[string]| no |none|
|»» serials|body|[string]| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET GET single Requisition

GET /requisitions/{id}

Returns a single requisition as JSON, identified by its id.

The requisition's line items are nested inside the `data.Requisition` object as `RequisitionItem`. Other related records are not included.

Access is denied (403) when the requisition's warehouse is inactive or the authenticated user is not allowed to view it.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer| yes |The requisition id (digits only).|
|format|path|string| no |Response format suffix, e.g. `.json`.|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "result": "successful",
  "code": 200,
  "data": {
    "Requisition": {
      "id": "string",
      "number": "string",
      "date": "string",
      "type": "string",
      "order_type": "string",
      "status": "string",
      "store_id": "string",
      "to_store_id": "string",
      "currency_code": "string",
      "staff_id": "string",
      "journal_account_id": "string",
      "order_id": "string",
      "branch_id": "string",
      "notes": "string",
      "created": "string",
      "modified": "string",
      "RequisitionItem": [
        {}
      ]
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The requisition.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or invalid access token.|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The authenticated user lacks permission, or the requisition's warehouse is inactive / not viewable.|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No requisition with this id exists.|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» data|object|false|none||none|
|»» Requisition|object|false|none||The requisition record, with its line items nested as `RequisitionItem`.|
|»»» id|string|false|none||none|
|»»» number|string|false|none||Requisition number.|
|»»» date|string|false|none||none|
|»»» type|string|false|none||Stock effect. `1` Inbound, `2` Outbound, `3` Manual Transfer (no effect).|
|»»» order_type|string|false|none||Origin of the requisition (e.g. `1` Inbound, `2` Outbound, `8` Manual Transfer, `25` Sales Order). See the create endpoint for the full list.|
|»»» status|string|false|none||`1` Under Delivery, `3` Accepted, `4` Rejected.|
|»»» store_id|string|false|none||Source warehouse id.|
|»»» to_store_id|string|false|none||Destination warehouse id (transfer requisitions only); otherwise null.|
|»»» currency_code|string|false|none||none|
|»»» staff_id|string|false|none||Id of the staff member who created the requisition.|
|»»» journal_account_id|string|false|none||none|
|»»» order_id|string|false|none||Id of the source document (invoice, purchase order, …); `0` for manual requisitions.|
|»»» branch_id|string|false|none||none|
|»»» notes|string|false|none||none|
|»»» created|string|false|none||none|
|»»» modified|string|false|none||none|
|»»» RequisitionItem|[object]|false|none||Line items.|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» error_type|string|false|none||none|
|» extra_data|[any]|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» error_type|string|false|none||none|
|» extra_data|[any]|false|none||none|

## PUT Edit Requisitions

PUT /requisitions/{id}

> Body Parameters

```json
{
    "Requisition": {
        "type": 1,
        "currency_code": "",
        "Status": "",
        "Order_type": "",
        "work_order_id": "",
        "date": "08/08/2022 14:32",
        "store_id": "1",
        "To_store_id": "",
        "journal_account_id": "",
        "number": "",
        "notes": ""
    },
    "RequisitionItem": [
        {
            "item": "",
            "product_id": "",
            "org_name": "",
            "unit_price": "",
            "quantity": "",
            "lot": [586865858],
            "expiry_date": ["2024-09-29"],
            "serials":[]  
        }
    ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## DELETE Delete Requisitions

DELETE /requisitions/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v1/Booking

## GET Get All Bookings

GET /booking/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Single Booking

GET /booking/{bookingId}/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Add new Booking

POST /bookings/add

> Body Parameters

```json
{
    "InvoiceItem": [
        {
            "product_id": "96"
        }
    ],
    "Invoice": {
        "staff_id": "1",
        "date": "28/09/2025",
        "client_id": "18",
        "description": "",
        "end_time": "23:59",
        "start_time": "00:00",
        "branch_id": 1,
        "converted": 1
    }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» InvoiceItem|body|[object]| yes |none|
|»» product_id|body|string| no |none|
|» Invoice|body|object| yes |none|
|»» staff_id|body|string| yes |none|
|»» date|body|string| yes |none|
|»» client_id|body|string| yes |none|
|»» description|body|string| yes |none|
|»» end_time|body|string| yes |none|
|»» start_time|body|string| yes |none|
|»» branch_id|body|integer| yes |none|
|»» converted|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Change Booking Status

GET /api2/bookings/change_status/{bookingId}/{bookingStatus}

> Body Parameters

```
string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string| yes |none|
|bookingStatus|path|string| yes |1: confirmed; 3: canceled; 4: done.|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|string| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Convert booking to Invoice

GET /api2/bookings/convert_to_invoice/{bookingId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## DELETE Delete booking

DELETE /bookings/{bookingId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v1/Advance Payment Invoices

## GET GET All Advance payment

GET /invoice/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|filter[type]=19|query|string| no |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET GET Single Advance payment

GET /invoice/{ID}/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "no": "string",
  "date": "string",
  "staff_id": 0,
  "subscription_id": null,
  "store_id": 0,
  "type": 0,
  "po_number": "string",
  "client_id": 0,
  "is_offline": 0,
  "currency_code": "string",
  "client_business_name": "string",
  "client_first_name": null,
  "client_last_name": null,
  "client_email": "string",
  "client_address1": "string",
  "client_address2": null,
  "client_postal_code": null,
  "client_city": null,
  "client_state": null,
  "client_country_code": "string",
  "payment_status": 0,
  "draft": 0,
  "discount": 0,
  "due_after": 0,
  "issue_date": "string",
  "summary_subtotal": 0,
  "summary_discount": 0,
  "summary_total": 0,
  "summary_paid": 0,
  "summary_unpaid": 0,
  "terms_id": null,
  "html_notes": "string",
  "created": "string",
  "modified": "string",
  "required_terms_file": 0,
  "last_sent": null,
  "invoice_layout_id": 0,
  "estimate_id": 0,
  "shipping_option_id": null,
  "summary_refund": 0,
  "client_active_secondary_address": 0,
  "client_secondary_name": null,
  "client_secondary_address1": "string",
  "client_secondary_address2": null,
  "client_secondary_city": null,
  "client_secondary_state": null,
  "client_secondary_postal_code": null,
  "client_secondary_country_code": null,
  "follow_up_status": null,
  "source_type": null,
  "source_id": null,
  "sales_person_id": 0,
  "extra_details": "string",
  "discount_amount": 0,
  "shipping_amount": null,
  "work_order_id": null,
  "item_columns": "string",
  "branch_id": 0,
  "requisition_delivery_status": null,
  "item_discount_amount": 0,
  "pos_shift_id": null,
  "requisitions": [
    "string"
  ],
  "adjustment_label": null,
  "adjustment_value": null,
  "order_source_id": null,
  "store": {
    "id": 0,
    "name": "string",
    "active": 0
  },
  "clients": {
    "id": 0,
    "group_price_id": null,
    "is_offline": 0,
    "client_number": "string",
    "staff_id": 0,
    "business_name": "string",
    "first_name": null,
    "last_name": null,
    "email": null,
    "password": null,
    "address1": "string",
    "address2": null,
    "city": null,
    "state": null,
    "postal_code": null,
    "phone1": "string",
    "phone2": null,
    "country_code": null,
    "notes": null,
    "active_secondary_address": 0,
    "secondary_name": null,
    "secondary_address1": "string",
    "secondary_address2": null,
    "secondary_city": null,
    "secondary_state": null,
    "secondary_postal_code": null,
    "secondary_country_code": null,
    "language_code": null,
    "default_currency_code": null,
    "last_login": null,
    "suspend": 0,
    "last_ip": null,
    "created": "string",
    "modified": "string",
    "follow_up_status": null,
    "category": "string",
    "bn1": null,
    "bn1_label": null,
    "bn2_label": null,
    "bn2": null,
    "starting_balance": null,
    "photo": null,
    "birth_date": null,
    "gender": null,
    "map_location": null,
    "type": 0,
    "credit_limit": 0,
    "credit_period": 0,
    "branch_id": 0,
    "national_id": null,
    "attachment": null,
    "category_id": null,
    "secondary_follow_up_status": null,
    "timezone": 0,
    "tags": null,
    "assigned_users": null
  },
  "branch": {
    "id": 0,
    "name": "string",
    "status": 0,
    "created": "string",
    "modified": "string"
  },
  "payment": [
    {
      "invoice_id": 0,
      "client_id": null,
      "payment_method": "string",
      "amount": 0,
      "transaction_id": "string",
      "date": "string",
      "email": null,
      "status": 0,
      "notes": null,
      "response_code": null,
      "response_message": null,
      "created": "string",
      "currency_code": "string",
      "first_name": null,
      "last_name": null,
      "address1": "string",
      "address2": null,
      "city": null,
      "state": null,
      "postal_code": null,
      "country_code": "string",
      "phone1": "string",
      "phone2": null,
      "attachment": null,
      "staff_id": 0,
      "payment_work_order_id": null,
      "treasury_id": 0,
      "pos_shift_id": null,
      "receipt_notes": null,
      "extra_details": null,
      "branch_id": 0,
      "id": 0,
      "added_by": 0
    }
  ],
  "invoice_item": [
    {
      "invoice_id": 0,
      "item": "string",
      "description": "string",
      "unit_price": 0,
      "quantity": 0,
      "tax1": 0,
      "tax2": 0,
      "product_id": 0,
      "col_3": "string",
      "col_4": "string",
      "col_5": null,
      "discount": null,
      "discount_type": null,
      "store_id": 0,
      "unit_factor": null,
      "unit_small_name": null,
      "unit_name": null,
      "display_order": 0,
      "summary_tax1": 0,
      "summary_tax2": 0,
      "col_6": null,
      "col_7": null,
      "col_8": null,
      "created": "string",
      "modified": "string",
      "unit_factor_id": null,
      "offer_id": null,
      "tracking_data": "string",
      "serials": null,
      "extra_details": null,
      "calculated_discount": 0,
      "subtotal": 0,
      "id": 0,
      "sales_account_id": null,
      "cost_center_id": null,
      "sales_person_id": null
    }
  ],
  "invoice_documents": [
    "string"
  ],
  "invoice_custom_fields": [
    "string"
  ],
  "invoice_client": {
    "id": 0,
    "group_price_id": null,
    "is_offline": 0,
    "client_number": "string",
    "staff_id": 0,
    "business_name": "string",
    "first_name": null,
    "last_name": null,
    "email": null,
    "password": null,
    "address1": "string",
    "address2": null,
    "city": null,
    "state": null,
    "postal_code": null,
    "phone1": "string",
    "phone2": null,
    "country_code": null,
    "notes": null,
    "active_secondary_address": 0,
    "secondary_name": null,
    "secondary_address1": "string",
    "secondary_address2": null,
    "secondary_city": null,
    "secondary_state": null,
    "secondary_postal_code": null,
    "secondary_country_code": null,
    "language_code": null,
    "default_currency_code": null,
    "last_login": null,
    "suspend": 0,
    "last_ip": null,
    "created": "string",
    "modified": "string",
    "follow_up_status": null,
    "category": "string",
    "bn1": null,
    "bn1_label": null,
    "bn2_label": null,
    "bn2": null,
    "starting_balance": null,
    "photo": null,
    "birth_date": null,
    "gender": null,
    "map_location": null,
    "type": 0,
    "credit_limit": 0,
    "credit_period": 0,
    "branch_id": 0,
    "national_id": null,
    "attachment": null,
    "category_id": null,
    "secondary_follow_up_status": null,
    "timezone": 0,
    "tags": null,
    "assigned_users": null
  },
  "invoice_layout": {
    "id": 0,
    "field1": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "image": null,
    "staff_id": 0,
    "html": "string",
    "invoice_title": "string",
    "estimate_title": "string",
    "creditnote_title": "string",
    "business_info": "string",
    "logo": "string",
    "client_info": "string",
    "label_invoice_no": "string",
    "label_date": "string",
    "label_po_no": "string",
    "label_total": "string",
    "label_status": "string",
    "label_due_days": "string",
    "label_due_date": "string",
    "label_deposit": "string",
    "label_paid_amount": "string",
    "label_unpaid_amount": "string",
    "label_subtotal": "string",
    "label_description": "string",
    "label_item": "string",
    "label_tax1": null,
    "label_tax2": null,
    "label_quantity": "string",
    "label_unit_price": "string",
    "label_item_total": "string",
    "label_from_date": "string",
    "label_to_date": "string",
    "label_discount": "string",
    "items_list": "string",
    "custom_fields": "string",
    "template_id": 0,
    "footer": "string",
    "created": "string",
    "default": 0,
    "default_estimate": 0,
    "default_creditnote": 0,
    "default_refundreceipt": 0,
    "simple_item_currency": 0,
    "show_balance_due": 0,
    "show_ship": 0,
    "label_ship": "string",
    "ship_info": "string",
    "language_id": 0,
    "label_shipping": "string",
    "item_columns": "string",
    "footer_html": null,
    "css_style": null,
    "view_style": "string",
    "label_creditnote_no": "string",
    "label_creditnote_to": null,
    "label_creditnote_date": "string",
    "label_estimate_no": "string",
    "label_estimate_date": "string",
    "refundreceipt_title": "string",
    "quantity_price": "string",
    "label_refundreceipt_no": "string",
    "label_refundreceipt_date": "string",
    "label_to": "string",
    "label_refunded": "string",
    "alt_template": 0,
    "layout_type": 0,
    "sticky_footer": "string",
    "sticky_header": "string",
    "default_purchase_refund": 0,
    "default_purchase_order": 0,
    "branch_id": 0,
    "purchase_order_title": null,
    "default_width": 0,
    "default_height": 0,
    "min_width": 0,
    "min_height": 0,
    "max_width": 0,
    "max_height": 0,
    "name": "string"
  },
  "invoice_installment_agreements": [
    "string"
  ],
  "invoice_requisitions": [
    "string"
  ],
  "journal_account_route": [
    "string"
  ],
  "invoice_appointments": [
    "string"
  ],
  "staff": null,
  "work_orders": null,
  "pos_shifts": null,
  "invoice_source_order": null,
  "custom_data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» no|string|true|none||none|
|» date|string|true|none||none|
|» staff_id|integer|true|none||none|
|» subscription_id|null|true|none||none|
|» store_id|integer|true|none||none|
|» type|integer|true|none||none|
|» po_number|string|true|none||none|
|» client_id|integer|true|none||none|
|» is_offline|integer|true|none||none|
|» currency_code|string|true|none||none|
|» client_business_name|string|true|none||none|
|» client_first_name|null|true|none||none|
|» client_last_name|null|true|none||none|
|» client_email|string|true|none||none|
|» client_address1|string|true|none||none|
|» client_address2|null|true|none||none|
|» client_postal_code|null|true|none||none|
|» client_city|null|true|none||none|
|» client_state|null|true|none||none|
|» client_country_code|string|true|none||none|
|» payment_status|integer|true|none||none|
|» draft|integer|true|none||none|
|» discount|integer|true|none||none|
|» due_after|integer|true|none||none|
|» issue_date|string|true|none||none|
|» summary_subtotal|integer|true|none||none|
|» summary_discount|integer|true|none||none|
|» summary_total|integer|true|none||none|
|» summary_paid|integer|true|none||none|
|» summary_unpaid|integer|true|none||none|
|» terms_id|null|true|none||none|
|» html_notes|string|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» required_terms_file|integer|true|none||none|
|» last_sent|null|true|none||none|
|» invoice_layout_id|integer|true|none||none|
|» estimate_id|integer|true|none||none|
|» shipping_option_id|null|true|none||none|
|» summary_refund|integer|true|none||none|
|» client_active_secondary_address|integer|true|none||none|
|» client_secondary_name|null|true|none||none|
|» client_secondary_address1|string|true|none||none|
|» client_secondary_address2|null|true|none||none|
|» client_secondary_city|null|true|none||none|
|» client_secondary_state|null|true|none||none|
|» client_secondary_postal_code|null|true|none||none|
|» client_secondary_country_code|null|true|none||none|
|» follow_up_status|null|true|none||none|
|» source_type|null|true|none||none|
|» source_id|null|true|none||none|
|» sales_person_id|integer|true|none||none|
|» extra_details|string|true|none||none|
|» discount_amount|integer|true|none||none|
|» shipping_amount|null|true|none||none|
|» work_order_id|null|true|none||none|
|» item_columns|string|true|none||none|
|» branch_id|integer|true|none||none|
|» requisition_delivery_status|null|true|none||none|
|» item_discount_amount|integer|true|none||none|
|» pos_shift_id|null|true|none||none|
|» requisitions|[string]|true|none||none|
|» adjustment_label|null|true|none||none|
|» adjustment_value|null|true|none||none|
|» order_source_id|null|true|none||none|
|» store|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» active|integer|true|none||none|
|» clients|object|true|none||none|
|»» id|integer|true|none||none|
|»» group_price_id|null|true|none||none|
|»» is_offline|integer|true|none||none|
|»» client_number|string|true|none||none|
|»» staff_id|integer|true|none||none|
|»» business_name|string|true|none||none|
|»» first_name|null|true|none||none|
|»» last_name|null|true|none||none|
|»» email|null|true|none||none|
|»» password|null|true|none||none|
|»» address1|string|true|none||none|
|»» address2|null|true|none||none|
|»» city|null|true|none||none|
|»» state|null|true|none||none|
|»» postal_code|null|true|none||none|
|»» phone1|string|true|none||none|
|»» phone2|null|true|none||none|
|»» country_code|null|true|none||none|
|»» notes|null|true|none||none|
|»» active_secondary_address|integer|true|none||none|
|»» secondary_name|null|true|none||none|
|»» secondary_address1|string|true|none||none|
|»» secondary_address2|null|true|none||none|
|»» secondary_city|null|true|none||none|
|»» secondary_state|null|true|none||none|
|»» secondary_postal_code|null|true|none||none|
|»» secondary_country_code|null|true|none||none|
|»» language_code|null|true|none||none|
|»» default_currency_code|null|true|none||none|
|»» last_login|null|true|none||none|
|»» suspend|integer|true|none||none|
|»» last_ip|null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» follow_up_status|null|true|none||none|
|»» category|string|true|none||none|
|»» bn1|null|true|none||none|
|»» bn1_label|null|true|none||none|
|»» bn2_label|null|true|none||none|
|»» bn2|null|true|none||none|
|»» starting_balance|null|true|none||none|
|»» photo|null|true|none||none|
|»» birth_date|null|true|none||none|
|»» gender|null|true|none||none|
|»» map_location|null|true|none||none|
|»» type|integer|true|none||none|
|»» credit_limit|integer|true|none||none|
|»» credit_period|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» national_id|null|true|none||none|
|»» attachment|null|true|none||none|
|»» category_id|null|true|none||none|
|»» secondary_follow_up_status|null|true|none||none|
|»» timezone|integer|true|none||none|
|»» tags|null|true|none||none|
|»» assigned_users|null|true|none||none|
|» branch|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» payment|[object]|true|none||none|
|»» invoice_id|integer|false|none||none|
|»» client_id|null|false|none||none|
|»» payment_method|string|false|none||none|
|»» amount|integer|false|none||none|
|»» transaction_id|string|false|none||none|
|»» date|string|false|none||none|
|»» email|null|false|none||none|
|»» status|integer|false|none||none|
|»» notes|null|false|none||none|
|»» response_code|null|false|none||none|
|»» response_message|null|false|none||none|
|»» created|string|false|none||none|
|»» currency_code|string|false|none||none|
|»» first_name|null|false|none||none|
|»» last_name|null|false|none||none|
|»» address1|string|false|none||none|
|»» address2|null|false|none||none|
|»» city|null|false|none||none|
|»» state|null|false|none||none|
|»» postal_code|null|false|none||none|
|»» country_code|string|false|none||none|
|»» phone1|string|false|none||none|
|»» phone2|null|false|none||none|
|»» attachment|null|false|none||none|
|»» staff_id|integer|false|none||none|
|»» payment_work_order_id|null|false|none||none|
|»» treasury_id|integer|false|none||none|
|»» pos_shift_id|null|false|none||none|
|»» receipt_notes|null|false|none||none|
|»» extra_details|null|false|none||none|
|»» branch_id|integer|false|none||none|
|»» id|integer|false|none||none|
|»» added_by|integer|false|none||none|
|» invoice_item|[object]|true|none||none|
|»» invoice_id|integer|false|none||none|
|»» item|string|false|none||none|
|»» description|string|false|none||none|
|»» unit_price|integer|false|none||none|
|»» quantity|integer|false|none||none|
|»» tax1|integer|false|none||none|
|»» tax2|integer|false|none||none|
|»» product_id|integer|false|none||none|
|»» col_3|string|false|none||none|
|»» col_4|string|false|none||none|
|»» col_5|null|false|none||none|
|»» discount|null|false|none||none|
|»» discount_type|null|false|none||none|
|»» store_id|integer|false|none||none|
|»» unit_factor|null|false|none||none|
|»» unit_small_name|null|false|none||none|
|»» unit_name|null|false|none||none|
|»» display_order|integer|false|none||none|
|»» summary_tax1|integer|false|none||none|
|»» summary_tax2|integer|false|none||none|
|»» col_6|null|false|none||none|
|»» col_7|null|false|none||none|
|»» col_8|null|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|»» unit_factor_id|null|false|none||none|
|»» offer_id|null|false|none||none|
|»» tracking_data|string|false|none||none|
|»» serials|null|false|none||none|
|»» extra_details|null|false|none||none|
|»» calculated_discount|integer|false|none||none|
|»» subtotal|integer|false|none||none|
|»» id|integer|false|none||none|
|»» sales_account_id|null|false|none||none|
|»» cost_center_id|null|false|none||none|
|»» sales_person_id|null|false|none||none|
|» invoice_documents|[string]|true|none||none|
|» invoice_custom_fields|[string]|true|none||none|
|» invoice_client|object|true|none||none|
|»» id|integer|true|none||none|
|»» group_price_id|null|true|none||none|
|»» is_offline|integer|true|none||none|
|»» client_number|string|true|none||none|
|»» staff_id|integer|true|none||none|
|»» business_name|string|true|none||none|
|»» first_name|null|true|none||none|
|»» last_name|null|true|none||none|
|»» email|null|true|none||none|
|»» password|null|true|none||none|
|»» address1|string|true|none||none|
|»» address2|null|true|none||none|
|»» city|null|true|none||none|
|»» state|null|true|none||none|
|»» postal_code|null|true|none||none|
|»» phone1|string|true|none||none|
|»» phone2|null|true|none||none|
|»» country_code|null|true|none||none|
|»» notes|null|true|none||none|
|»» active_secondary_address|integer|true|none||none|
|»» secondary_name|null|true|none||none|
|»» secondary_address1|string|true|none||none|
|»» secondary_address2|null|true|none||none|
|»» secondary_city|null|true|none||none|
|»» secondary_state|null|true|none||none|
|»» secondary_postal_code|null|true|none||none|
|»» secondary_country_code|null|true|none||none|
|»» language_code|null|true|none||none|
|»» default_currency_code|null|true|none||none|
|»» last_login|null|true|none||none|
|»» suspend|integer|true|none||none|
|»» last_ip|null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» follow_up_status|null|true|none||none|
|»» category|string|true|none||none|
|»» bn1|null|true|none||none|
|»» bn1_label|null|true|none||none|
|»» bn2_label|null|true|none||none|
|»» bn2|null|true|none||none|
|»» starting_balance|null|true|none||none|
|»» photo|null|true|none||none|
|»» birth_date|null|true|none||none|
|»» gender|null|true|none||none|
|»» map_location|null|true|none||none|
|»» type|integer|true|none||none|
|»» credit_limit|integer|true|none||none|
|»» credit_period|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» national_id|null|true|none||none|
|»» attachment|null|true|none||none|
|»» category_id|null|true|none||none|
|»» secondary_follow_up_status|null|true|none||none|
|»» timezone|integer|true|none||none|
|»» tags|null|true|none||none|
|»» assigned_users|null|true|none||none|
|» invoice_layout|object|true|none||none|
|»» id|integer|true|none||none|
|»» field1|string|true|none||none|
|»» field2|string|true|none||none|
|»» field3|string|true|none||none|
|»» field4|string|true|none||none|
|»» field5|string|true|none||none|
|»» image|null|true|none||none|
|»» staff_id|integer|true|none||none|
|»» html|string|true|none||none|
|»» invoice_title|string|true|none||none|
|»» estimate_title|string|true|none||none|
|»» creditnote_title|string|true|none||none|
|»» business_info|string|true|none||none|
|»» logo|string|true|none||none|
|»» client_info|string|true|none||none|
|»» label_invoice_no|string|true|none||none|
|»» label_date|string|true|none||none|
|»» label_po_no|string|true|none||none|
|»» label_total|string|true|none||none|
|»» label_status|string|true|none||none|
|»» label_due_days|string|true|none||none|
|»» label_due_date|string|true|none||none|
|»» label_deposit|string|true|none||none|
|»» label_paid_amount|string|true|none||none|
|»» label_unpaid_amount|string|true|none||none|
|»» label_subtotal|string|true|none||none|
|»» label_description|string|true|none||none|
|»» label_item|string|true|none||none|
|»» label_tax1|null|true|none||none|
|»» label_tax2|null|true|none||none|
|»» label_quantity|string|true|none||none|
|»» label_unit_price|string|true|none||none|
|»» label_item_total|string|true|none||none|
|»» label_from_date|string|true|none||none|
|»» label_to_date|string|true|none||none|
|»» label_discount|string|true|none||none|
|»» items_list|string|true|none||none|
|»» custom_fields|string|true|none||none|
|»» template_id|integer|true|none||none|
|»» footer|string|true|none||none|
|»» created|string|true|none||none|
|»» default|integer|true|none||none|
|»» default_estimate|integer|true|none||none|
|»» default_creditnote|integer|true|none||none|
|»» default_refundreceipt|integer|true|none||none|
|»» simple_item_currency|integer|true|none||none|
|»» show_balance_due|integer|true|none||none|
|»» show_ship|integer|true|none||none|
|»» label_ship|string|true|none||none|
|»» ship_info|string|true|none||none|
|»» language_id|integer|true|none||none|
|»» label_shipping|string|true|none||none|
|»» item_columns|string|true|none||none|
|»» footer_html|null|true|none||none|
|»» css_style|null|true|none||none|
|»» view_style|string|true|none||none|
|»» label_creditnote_no|string|true|none||none|
|»» label_creditnote_to|null|true|none||none|
|»» label_creditnote_date|string|true|none||none|
|»» label_estimate_no|string|true|none||none|
|»» label_estimate_date|string|true|none||none|
|»» refundreceipt_title|string|true|none||none|
|»» quantity_price|string|true|none||none|
|»» label_refundreceipt_no|string|true|none||none|
|»» label_refundreceipt_date|string|true|none||none|
|»» label_to|string|true|none||none|
|»» label_refunded|string|true|none||none|
|»» alt_template|integer|true|none||none|
|»» layout_type|integer|true|none||none|
|»» sticky_footer|string|true|none||none|
|»» sticky_header|string|true|none||none|
|»» default_purchase_refund|integer|true|none||none|
|»» default_purchase_order|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» purchase_order_title|null|true|none||none|
|»» default_width|integer|true|none||none|
|»» default_height|integer|true|none||none|
|»» min_width|integer|true|none||none|
|»» min_height|integer|true|none||none|
|»» max_width|integer|true|none||none|
|»» max_height|integer|true|none||none|
|»» name|string|true|none||none|
|» invoice_installment_agreements|[string]|true|none||none|
|» invoice_requisitions|[string]|true|none||none|
|» journal_account_route|[string]|true|none||none|
|» invoice_appointments|[string]|true|none||none|
|» staff|null|true|none||none|
|» work_orders|null|true|none||none|
|» pos_shifts|null|true|none||none|
|» invoice_source_order|null|true|none||none|
|» custom_data|null|true|none||none|

## POST Add Advance Payment

POST /invoices

> Body Parameters

```json
{
    "Invoice": {
        "subscription_id": "",
        "store_id": 1,
        "type": 19,
        "po_number": 26,
        "client_id": 46,
        "client_email": "",
        "client_country_code": "SAR",
        "draft": "0",
        "follow_up_status": null,
        "staff_id": 0,
        "name": "",
        "is_offline": 1,
        "currency_code": "SAR",
        "payment_status": 2,
        "date": "2026-04-07",
        "discount": 0,
        "discount_amount": 0,
        "deposit": 0,
        "deposit_type": 0,
        "notes": "",
        "html_notes": "",
        "invoice_layout_id": 9,
        "estimate_id": 0,
        "shipping_options": "",
        "shipping_amount": null,
        "requisition_delivery_status": null,
        "pos_shift_id": null,
        "branch_id": 1
    },
    "Payment": {
        "client_id": null,
        "payment_method": "cash",
        "amount": 100,
        "transaction_id": "",
        "date": "2026-04-07 00:00:00",
        "email": null,
        "status": 1,
        "notes": null,
        "response_code": null,
        "response_message": null,
        "created": "2026-04-07 18:59:02",
        "currency_code": "SAR",
        "first_name": "",
        "last_name": "",
        "address1": null,
        "address2": "",
        "city": "",
        "state": "",
        "postal_code": "",
        "country_code": "",
        "phone1": "+966547895120",
        "phone2": null,
        "attachment": null,
        "staff_id": 4,
        "payment_work_order_id": null,
        "treasury_id": 1,
        "pos_shift_id": null,
        "receipt_notes": null,
        "extra_details": null,
        "branch_id": 1,
        "added_by": 1,
        "is_paid": 1
    },
    "InvoiceItem": [
        {
            "item": "خدمة",
            "description": "",
            "unit_price": 100,
            "quantity": 1,
            "col_3": "",
            "col_4": "",
            "tax1": 0,
            "tax2": 0,
            "product_id": 112
        }
    ],
    "InvoiceCustomField": []
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|
|» Invoice|body|object| yes |none|
|»» subscription_id|body|string| yes |none|
|»» store_id|body|integer| yes |none|
|»» type|body|integer| yes |none|
|»» po_number|body|integer| yes |none|
|»» client_id|body|integer| yes |none|
|»» client_email|body|string| yes |none|
|»» client_country_code|body|string| yes |none|
|»» draft|body|string| yes |none|
|»» follow_up_status|body|null| yes |none|
|»» staff_id|body|integer| yes |none|
|»» name|body|string| yes |none|
|»» is_offline|body|integer| yes |none|
|»» currency_code|body|string| yes |none|
|»» payment_status|body|integer| yes |none|
|»» date|body|string| yes |none|
|»» discount|body|integer| yes |none|
|»» discount_amount|body|integer| yes |none|
|»» deposit|body|integer| yes |none|
|»» deposit_type|body|integer| yes |none|
|»» notes|body|string| yes |none|
|»» html_notes|body|string| yes |none|
|»» invoice_layout_id|body|integer| yes |none|
|»» estimate_id|body|integer| yes |none|
|»» shipping_options|body|string| yes |none|
|»» shipping_amount|body|null| yes |none|
|»» requisition_delivery_status|body|null| yes |none|
|»» pos_shift_id|body|null| yes |none|
|»» branch_id|body|integer| yes |none|
|» Payment|body|object| yes |none|
|»» client_id|body|null| yes |none|
|»» payment_method|body|string| yes |none|
|»» amount|body|integer| yes |none|
|»» transaction_id|body|string| yes |none|
|»» date|body|string| yes |none|
|»» email|body|null| yes |none|
|»» status|body|integer| yes |none|
|»» notes|body|null| yes |none|
|»» response_code|body|null| yes |none|
|»» response_message|body|null| yes |none|
|»» created|body|string| yes |none|
|»» currency_code|body|string| yes |none|
|»» first_name|body|string| yes |none|
|»» last_name|body|string| yes |none|
|»» address1|body|null| yes |none|
|»» address2|body|string| yes |none|
|»» city|body|string| yes |none|
|»» state|body|string| yes |none|
|»» postal_code|body|string| yes |none|
|»» country_code|body|string| yes |none|
|»» phone1|body|string| yes |none|
|»» phone2|body|null| yes |none|
|»» attachment|body|null| yes |none|
|»» staff_id|body|integer| yes |none|
|»» payment_work_order_id|body|null| yes |none|
|»» treasury_id|body|integer| yes |none|
|»» pos_shift_id|body|null| yes |none|
|»» receipt_notes|body|null| yes |none|
|»» extra_details|body|null| yes |none|
|»» branch_id|body|integer| yes |none|
|»» added_by|body|integer| yes |none|
|»» is_paid|body|integer| yes |none|
|» InvoiceItem|body|[object]| yes |none|
|»» item|body|string| no |none|
|»» description|body|string| no |none|
|»» unit_price|body|integer| no |none|
|»» quantity|body|integer| no |none|
|»» col_3|body|string| no |none|
|»» col_4|body|string| no |none|
|»» tax1|body|integer| no |none|
|»» tax2|body|integer| no |none|
|»» product_id|body|integer| no |none|
|» InvoiceCustomField|body|[string]| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/What's New/Using API v2

## GET Data Fetching — Filtered

GET /{entity}/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|entity|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

#### Enum

|Name|Value|
|---|---|
|entity|invoice|
|entity|estimate|
|entity|credit_note|
|entity|refund_receipt|
|entity|client|
|entity|supplier|
|entity|work_order|
|entity|follow_up_reminder|
|entity|invoice_payment|
|entity|product|
|entity|journal|
|entity|journal_account|
|entity|journal_cat|
|entity|expense|
|entity|tax|
|entity|purchase_refund|
|entity|store|
|entity|treasury|
|entity|product_category|
|entity|staff|
|entity|client_attendance_log|
|entity|follow_up_action|
|entity|follow_up_status|
|entity|purchase_order|
|entity|shift_day|
|entity|contract|
|entity|invoice_installment_agreement|
|entity|installment|
|entity|agreement_installment|
|entity|payslip|
|entity|invoice_item|
|entity|post|
|entity|product_bundle|
|entity|tracking_number|

> Response Examples

> 200 Response

```json
{
  "Responses": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» Responses|string|true|none||none|

# Endpoints v2/HR/Leave Application 

## GET Get All Leave Applications

GET /leave_application/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Single Leave Applications 

GET /leave_application/{ID}/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Add Leave Application

POST /leave_application

> Body Parameters

```json
{
    "id": "",
    "staff_id": "1",
    "days": "43",
    "date_from": "2025-11-17",
    "date_to": "2025-12-29",
    "type": "leave",
    "leave_type_id": "1",
    "late_time": "",
    "early_time": "",
    "description": "",
    "attachments": ""
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|
|» id|body|string| yes |none|
|» staff_id|body|string| yes |none|
|» days|body|string| yes |none|
|» date_from|body|string| yes |none|
|» date_to|body|string| yes |none|
|» type|body|string| yes |none|
|» leave_type_id|body|string| yes |none|
|» late_time|body|string| yes |none|
|» early_time|body|string| yes |none|
|» description|body|string| yes |none|
|» attachments|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Edit Leave Application

PUT /leave_application/{ID}

> Body Parameters

```json
{
    "id": 10,
    "staff_id": "1",
    "days": "42",
    "date_from": "2025-11-18",
    "date_to": "2025-12-29",
    "type": "leave",
    "leave_type_id": "1",
    "late_time": "",
    "early_time": "",
    "description": "",
    "attachments": ""
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/HR/Attendance Logs

## GET Get All Attendance Logs

GET /attendance_log/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Single Attendance Log

GET /attendance_log/{id}/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Add Attendance Log

POST /attendance_log

> Body Parameters

```json
{
  "session_id": 2,
  "source_id": 4,
  "source_method": null,
  "source_name": "Staff Name",
  "source_type": "supervisor",
  "staff_id": 2,
  "status": "draft",
  "time": "2025-10-01 07:51:00"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|
|» session_id|body|integer| yes |none|
|» source_id|body|integer| yes |none|
|» source_method|body|null| yes |none|
|» source_name|body|string| yes |none|
|» source_type|body|string| yes |none|
|» staff_id|body|integer| yes |none|
|» status|body|string| yes |Should be draft|
|» time|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/Purchase Debit Note

## GET Purchase Debit Note

GET /v2/api/entity/purchase_debit_note/list/-1

> Body Parameters

```json
{
  "invoice_layout_id": 0,
  "type": "string",
  "supplier_id": 0,
  "currency_code": "string",
  "language_id": 0,
  "supplier_supplier_number": "string",
  "supplier_business_name": "string",
  "supplier_first_name": "string",
  "supplier_last_name": "string",
  "supplier_address1": "string",
  "supplier_address2": "string",
  "supplier_city": "string",
  "supplier_state": "string",
  "supplier_postal_code": "string",
  "supplier_phone1": "string",
  "supplier_phone2": "string",
  "supplier_country_code": "string",
  "supplier_bn1_label": "string",
  "supplier_bn2_label": "string",
  "supplier_default_currency_code": "string",
  "date": "string",
  "work_order_id": 0,
  "store_id": 0,
  "show_item_stores": "string",
  "shipping_tax_id": null,
  "shipping_amount": null,
  "discount": null,
  "discount_amount": null,
  "adjustment_label": "string",
  "adjustment_value": "string",
  "html_notes": null,
  "draft": "string",
  "purchase_order_item": [
    {
      "product_id": 0,
      "item": "string",
      "description": "string",
      "col_3": "string",
      "col_4": "string",
      "col_5": "string",
      "unit_price": 0,
      "quantity": 0,
      "discount": 0,
      "discount_type": 0,
      "tax1": null,
      "tax2": null
    }
  ],
  "summary_total": {
    "currency": "string"
  },
  "PurchaseOrderCustomField": {
    "0": {
      "label": "string",
      "value": "string"
    },
    "1": {
      "label": "string",
      "value": "string"
    },
    "2": {
      "label": "string",
      "value": "string"
    },
    "3": {
      "label": "string",
      "value": "string"
    },
    "4": {
      "label": "string",
      "value": "string"
    },
    "5": {
      "label": "string",
      "value": null
    }
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|debug|query|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» invoice_layout_id|body|integer| yes |none|
|» type|body|string| yes |none|
|» supplier_id|body|integer| yes |none|
|» currency_code|body|string| yes |none|
|» language_id|body|integer| yes |none|
|» supplier_supplier_number|body|string| yes |none|
|» supplier_business_name|body|string| yes |none|
|» supplier_first_name|body|string| yes |none|
|» supplier_last_name|body|string| yes |none|
|» supplier_address1|body|string| yes |none|
|» supplier_address2|body|string| yes |none|
|» supplier_city|body|string| yes |none|
|» supplier_state|body|string| yes |none|
|» supplier_postal_code|body|string| yes |none|
|» supplier_phone1|body|string| yes |none|
|» supplier_phone2|body|string| yes |none|
|» supplier_country_code|body|string| yes |none|
|» supplier_bn1_label|body|string| yes |none|
|» supplier_bn2_label|body|string| yes |none|
|» supplier_default_currency_code|body|string| yes |none|
|» date|body|string| yes |none|
|» work_order_id|body|integer| yes |none|
|» store_id|body|integer| yes |none|
|» show_item_stores|body|string| yes |none|
|» shipping_tax_id|body|null| yes |none|
|» shipping_amount|body|null| yes |none|
|» discount|body|null| yes |none|
|» discount_amount|body|null| yes |none|
|» adjustment_label|body|string| yes |none|
|» adjustment_value|body|string| yes |none|
|» html_notes|body|null| yes |none|
|» draft|body|string| yes |none|
|» purchase_order_item|body|[object]| yes |none|
|»» product_id|body|integer| no |none|
|»» item|body|string| no |none|
|»» description|body|string| no |none|
|»» col_3|body|string| no |none|
|»» col_4|body|string| no |none|
|»» col_5|body|string| no |none|
|»» unit_price|body|integer| no |none|
|»» quantity|body|integer| no |none|
|»» discount|body|integer| no |none|
|»» discount_type|body|integer| no |none|
|»» tax1|body|null| no |none|
|»» tax2|body|null| no |none|
|» summary_total|body|object| yes |none|
|»» currency|body|string| yes |none|
|» PurchaseOrderCustomField|body|object| yes |none|
|»» 0|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 1|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 2|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 3|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 4|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 5|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|null| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

## POST Purchase Debit Note

POST /purchase_debit_note

> Body Parameters

```json
{
    "invoice_layout_id": 8,
    "type": "14",
    "supplier_id": 1,
    "currency_code": "EGP",
    "language_id": 7,
    "supplier_supplier_number": "000001",
    "supplier_business_name": "مورد",
    "supplier_first_name": "مورد",
    "supplier_last_name": "جديد",
    "supplier_address1": "22بب2",
    "supplier_address2": "3ي2",
    "supplier_city": "القرية",
    "supplier_state": "الذكية",
    "supplier_postal_code": "9999999",
    "supplier_phone1": "64646464646",
    "supplier_phone2": "6595959595",
    "supplier_country_code": "EG",
    "supplier_bn1_label": "سجل تجاري",
    "supplier_bn2_label": "بطاقة ضريبية",
    "supplier_default_currency_code": "EGP",
    "date": "23/03/2025",
    "work_order_id": 34,
    "store_id": 2,
    "show_item_stores": "0",
    "shipping_tax_id": null,
    "shipping_amount": null,
    "discount": null,
    "discount_amount": null,
    "adjustment_label": "",
    "adjustment_value": "",
    "html_notes": null,
    "draft": "1",
       "purchase_debit_notes_items": [
        {
 
            "product_id": 2,
            "item": "منتج 1",
            "description": "",
            "col_3": "",
            "col_4": "",
            "col_5": "",
            "unit_price": 100,
            "quantity": 1,
            "discount": 0,
            "discount_type": 1,
            "tax1": null,
            "tax2": null
    }
    ],
    "summary_total": {
        "currency": "EGP"
    },
    "PurchaseOrderCustomField": {
        "0": {
            "label": "الإجمالي",
            "value": "%total%"
        },
        "1": {
            "label": "القيمة المضافة",
            "value": "10"
        },
        "2": {
            "label": "الأجمالى",
            "value": "5"
        },
        "3": {
            "label": "المدفوع",
            "value": "8"
        },
        "4": {
            "label": "الرصيد المستحق",
            "value": "9"
        },
        "5": {
            "label": "PO NO",
            "value": null
        }
    }

}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|apikey|header|string| no |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|body|body|object| no |none|
|» invoice_layout_id|body|integer| yes |none|
|» type|body|string| yes |none|
|» supplier_id|body|integer| yes |none|
|» currency_code|body|string| yes |none|
|» language_id|body|integer| yes |none|
|» supplier_supplier_number|body|string| yes |none|
|» supplier_business_name|body|string| yes |none|
|» supplier_first_name|body|string| yes |none|
|» supplier_last_name|body|string| yes |none|
|» supplier_address1|body|string| yes |none|
|» supplier_address2|body|string| yes |none|
|» supplier_city|body|string| yes |none|
|» supplier_state|body|string| yes |none|
|» supplier_postal_code|body|string| yes |none|
|» supplier_phone1|body|string| yes |none|
|» supplier_phone2|body|string| yes |none|
|» supplier_country_code|body|string| yes |none|
|» supplier_bn1_label|body|string| yes |none|
|» supplier_bn2_label|body|string| yes |none|
|» supplier_default_currency_code|body|string| yes |none|
|» date|body|string| yes |none|
|» work_order_id|body|integer| yes |none|
|» store_id|body|integer| yes |none|
|» show_item_stores|body|string| yes |none|
|» shipping_tax_id|body|null| yes |none|
|» shipping_amount|body|null| yes |none|
|» discount|body|null| yes |none|
|» discount_amount|body|null| yes |none|
|» adjustment_label|body|string| yes |none|
|» adjustment_value|body|string| yes |none|
|» html_notes|body|null| yes |none|
|» draft|body|string| yes |none|
|» purchase_order_item|body|[object]| yes |none|
|»» product_id|body|integer| no |none|
|»» item|body|string| no |none|
|»» description|body|string| no |none|
|»» col_3|body|string| no |none|
|»» col_4|body|string| no |none|
|»» col_5|body|string| no |none|
|»» unit_price|body|integer| no |none|
|»» quantity|body|integer| no |none|
|»» discount|body|integer| no |none|
|»» discount_type|body|integer| no |none|
|»» tax1|body|null| no |none|
|»» tax2|body|null| no |none|
|» summary_total|body|object| yes |none|
|»» currency|body|string| yes |none|
|» PurchaseOrderCustomField|body|object| yes |none|
|»» 0|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 1|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 2|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 3|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 4|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|string| yes |none|
|»» 5|body|object| yes |none|
|»»» label|body|string| yes |none|
|»»» value|body|null| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

# Endpoints v2/Branches 

## GET Get All Branches 

GET /branches

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "result": "string",
  "code": 0,
  "data": [
    {
      "Branch": {
        "id": "string",
        "code": "string",
        "name": "string",
        "phone1": "string",
        "phone2": "string",
        "working_hours": "string",
        "description": "string",
        "address1": "string",
        "address2": "string",
        "city": "string",
        "state": "string",
        "country_code": "string",
        "admin_staff_id": "string",
        "staff_id": "string",
        "smtp_account_id": "string",
        "status": "string",
        "map_location": null,
        "created": "string",
        "modified": "string"
      }
    }
  ],
  "pagination": {
    "prev": null,
    "next": null,
    "page": 0,
    "page_count": 0,
    "total_results": 0
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|true|none||none|
|» code|integer|true|none||none|
|» data|[object]|true|none||none|
|»» Branch|object|false|none||none|
|»»» id|string|true|none||none|
|»»» code|string|true|none||none|
|»»» name|string|true|none||none|
|»»» phone1|string|true|none||none|
|»»» phone2|string|true|none||none|
|»»» working_hours|string|true|none||none|
|»»» description|string|true|none||none|
|»»» address1|string|true|none||none|
|»»» address2|string|true|none||none|
|»»» city|string|true|none||none|
|»»» state|string|true|none||none|
|»»» country_code|string|true|none||none|
|»»» admin_staff_id|string|true|none||none|
|»»» staff_id|string|true|none||none|
|»»» smtp_account_id|string|true|none||none|
|»»» status|string|true|none||none|
|»»» map_location|null|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|» pagination|object|true|none||none|
|»» prev|null|true|none||none|
|»» next|null|true|none||none|
|»» page|integer|true|none||none|
|»» page_count|integer|true|none||none|
|»» total_results|integer|true|none||none|

# Endpoints v2/Product Bundles

## POST Add Product bundle

POST /product_bundle

> Body Parameters

```json
{
    "product_id": "id of the item you want to assign to the bundle ",
    "bundle_product_id": "id of the bundle product",
    "quantity": 2,
    "unit_name": null,
    "unit_factor": null,
    "unit_small_name": null,
    "unit_factor_id": null
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/Brands

## GET Get All Brands

GET /brand/list/format

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "name": "string",
      "created": "string",
      "modified": "string"
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## GET Get Single Brand

GET /brand/id/format

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "created": "string",
  "modified": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## POST Add New Brand

POST /brand

> Body Parameters

```json
{
    "name": "new brand"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

## PUT Edit brand

PUT /brand/id

> Body Parameters

```json
{
    "id": 3,
    "name": "edited brand 3"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

# Endpoints v2/Unit Templates

## GET Get All Unit Templates

GET /unit_template/list/format

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "template_name": "string",
      "active": 0,
      "main_unit_name": "string",
      "unit_small_name": "string",
      "created": "string",
      "modified": "string",
      "branch_id": 0,
      "staff_id": 0,
      "branch": {
        "id": 0,
        "name": "string",
        "status": 0,
        "created": "string",
        "modified": "string"
      },
      "staff": {
        "id": 0,
        "added_by": 0,
        "role_id": 0,
        "name": "string",
        "middle_name": "string",
        "last_name": "string",
        "photo": null,
        "can_access_system": 0,
        "home_phone": "string",
        "business_Phone": null,
        "mobile": "string",
        "fax": null,
        "country_code": "string",
        "address1": "string",
        "address2": "string",
        "city": "string",
        "state": "string",
        "postal_code": "string",
        "note": null,
        "email_address": "string",
        "last_login": "string",
        "active": 0,
        "created": "string",
        "hourly_rate": null,
        "hourly_rate_currency_code": null,
        "default_store_id": 0,
        "default_treasury_id": 0,
        "maximum_general_discount": 0,
        "language_code": 0,
        "branch_id": 0,
        "full_name": "string",
        "attendance_restriction_id": null,
        "type": "string",
        "default_account_id": null,
        "citizenship_status": "string",
        "residence_expiry_date": null,
        "nationality": null,
        "code": "string",
        "official_id": null,
        "staff_info": {
          "staff_id": 0,
          "department_id": null,
          "employment_level_id": null,
          "employment_type_id": null,
          "designation_id": null,
          "birth_date": null,
          "gender": null,
          "personal_email": null,
          "permanent_address1": null,
          "permanent_address2": null,
          "permanent_city": null,
          "permanent_state": null,
          "permanent_postal_code": null,
          "created": "string",
          "modified": "string",
          "attendance_shift_id": null,
          "leave_policy_id": null,
          "has_secondary_shift": 0,
          "secondary_shift_id": null,
          "direct_manager_id": null
        },
        "staff_job": {
          "staff_id": 0,
          "join_date": null,
          "probation_end_date": null,
          "contract_duration": 0,
          "contract_duration_period": null,
          "exit_date": null,
          "exit_reason": null,
          "fiscal_type": null,
          "fiscal_day": "string",
          "fiscal_month": "string",
          "created": "string",
          "modified": "string"
        },
        "staff_custom_data": {
          "id": null,
          "allow_printing": null,
          "reference_id": null,
          "time": null
        }
      }
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» template_name|string|true|none||none|
|»» active|integer|true|none||none|
|»» main_unit_name|string|true|none||none|
|»» unit_small_name|string|true|none||none|
|»» created|string¦null|true|none||none|
|»» modified|string¦null|true|none||none|
|»» branch_id|integer|true|none||none|
|»» staff_id|integer|true|none||none|
|»» branch|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»» staff|object|true|none||none|
|»»» id|integer¦null|true|none||none|
|»»» added_by|integer¦null|true|none||none|
|»»» role_id|integer¦null|true|none||none|
|»»» name|string¦null|true|none||none|
|»»» middle_name|string¦null|true|none||none|
|»»» last_name|string¦null|true|none||none|
|»»» photo|null|true|none||none|
|»»» can_access_system|integer¦null|true|none||none|
|»»» home_phone|string¦null|true|none||none|
|»»» business_Phone|null|true|none||none|
|»»» mobile|string¦null|true|none||none|
|»»» fax|null|true|none||none|
|»»» country_code|string¦null|true|none||none|
|»»» address1|string¦null|true|none||none|
|»»» address2|string¦null|true|none||none|
|»»» city|string¦null|true|none||none|
|»»» state|string¦null|true|none||none|
|»»» postal_code|string¦null|true|none||none|
|»»» note|null|true|none||none|
|»»» email_address|string¦null|true|none||none|
|»»» last_login|string¦null|true|none||none|
|»»» active|integer¦null|true|none||none|
|»»» created|string¦null|true|none||none|
|»»» hourly_rate|null|true|none||none|
|»»» hourly_rate_currency_code|null|true|none||none|
|»»» default_store_id|integer¦null|true|none||none|
|»»» default_treasury_id|integer¦null|true|none||none|
|»»» maximum_general_discount|integer¦null|true|none||none|
|»»» language_code|integer¦null|true|none||none|
|»»» branch_id|integer¦null|true|none||none|
|»»» full_name|string¦null|true|none||none|
|»»» attendance_restriction_id|null|true|none||none|
|»»» type|string¦null|true|none||none|
|»»» default_account_id|null|true|none||none|
|»»» citizenship_status|string¦null|true|none||none|
|»»» residence_expiry_date|null|true|none||none|
|»»» nationality|null|true|none||none|
|»»» code|string¦null|true|none||none|
|»»» official_id|null|true|none||none|
|»»» staff_info|object|true|none||none|
|»»»» staff_id|integer¦null|true|none||none|
|»»»» department_id|null|true|none||none|
|»»»» employment_level_id|null|true|none||none|
|»»»» employment_type_id|null|true|none||none|
|»»»» designation_id|null|true|none||none|
|»»»» birth_date|null|true|none||none|
|»»»» gender|null|true|none||none|
|»»»» personal_email|null|true|none||none|
|»»»» permanent_address1|null|true|none||none|
|»»»» permanent_address2|null|true|none||none|
|»»»» permanent_city|null|true|none||none|
|»»»» permanent_state|null|true|none||none|
|»»»» permanent_postal_code|null|true|none||none|
|»»»» created|string¦null|true|none||none|
|»»»» modified|string¦null|true|none||none|
|»»»» attendance_shift_id|null|true|none||none|
|»»»» leave_policy_id|null|true|none||none|
|»»»» has_secondary_shift|integer¦null|true|none||none|
|»»»» secondary_shift_id|null|true|none||none|
|»»»» direct_manager_id|null|true|none||none|
|»»» staff_job|object|true|none||none|
|»»»» staff_id|integer¦null|true|none||none|
|»»»» join_date|null|true|none||none|
|»»»» probation_end_date|null|true|none||none|
|»»»» contract_duration|integer¦null|true|none||none|
|»»»» contract_duration_period|null|true|none||none|
|»»»» exit_date|null|true|none||none|
|»»»» exit_reason|null|true|none||none|
|»»»» fiscal_type|null|true|none||none|
|»»»» fiscal_day|string¦null|true|none||none|
|»»»» fiscal_month|string¦null|true|none||none|
|»»»» created|string¦null|true|none||none|
|»»»» modified|string¦null|true|none||none|
|»»» staff_custom_data|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» allow_printing|null|true|none||none|
|»»»» reference_id|null|true|none||none|
|»»»» time|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## GET Get Single Unit Template

GET /unit_template/id/format

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "template_name": "string",
  "active": 0,
  "main_unit_name": "string",
  "unit_small_name": "string",
  "created": null,
  "modified": null,
  "branch_id": 0,
  "staff_id": 0,
  "branch": {
    "id": 0,
    "name": "string",
    "status": 0,
    "created": "string",
    "modified": "string"
  },
  "staff": {
    "id": 0,
    "added_by": 0,
    "role_id": 0,
    "name": "string",
    "middle_name": "string",
    "last_name": "string",
    "photo": null,
    "can_access_system": 0,
    "home_phone": "string",
    "business_Phone": null,
    "mobile": "string",
    "fax": null,
    "country_code": "string",
    "address1": "string",
    "address2": "string",
    "city": "string",
    "state": "string",
    "postal_code": "string",
    "note": null,
    "email_address": "string",
    "password": null,
    "last_login": "string",
    "active": 0,
    "created": "string",
    "hourly_rate": null,
    "hourly_rate_currency_code": null,
    "default_store_id": 0,
    "default_treasury_id": 0,
    "maximum_general_discount": 0,
    "language_code": 0,
    "branch_id": 0,
    "full_name": "string",
    "attendance_restriction_id": null,
    "type": "string",
    "default_account_id": null,
    "citizenship_status": "string",
    "residence_expiry_date": null,
    "nationality": null,
    "code": "string",
    "official_id": null
  },
  "unit_templates_unit_factors": [
    {
      "id": 0,
      "factor_name": "string",
      "factor": 0,
      "small_name": "string",
      "created": null,
      "modified": null,
      "branch_id": null,
      "unit_template_id": 0,
      "staff_id": null
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» template_name|string|true|none||none|
|» active|integer|true|none||none|
|» main_unit_name|string|true|none||none|
|» unit_small_name|string|true|none||none|
|» created|null|true|none||none|
|» modified|null|true|none||none|
|» branch_id|integer|true|none||none|
|» staff_id|integer|true|none||none|
|» branch|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» staff|object|true|none||none|
|»» id|integer|true|none||none|
|»» added_by|integer|true|none||none|
|»» role_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» middle_name|string|true|none||none|
|»» last_name|string|true|none||none|
|»» photo|null|true|none||none|
|»» can_access_system|integer|true|none||none|
|»» home_phone|string|true|none||none|
|»» business_Phone|null|true|none||none|
|»» mobile|string|true|none||none|
|»» fax|null|true|none||none|
|»» country_code|string|true|none||none|
|»» address1|string|true|none||none|
|»» address2|string|true|none||none|
|»» city|string|true|none||none|
|»» state|string|true|none||none|
|»» postal_code|string|true|none||none|
|»» note|null|true|none||none|
|»» email_address|string|true|none||none|
|»» password|null|true|none||none|
|»» last_login|string|true|none||none|
|»» active|integer|true|none||none|
|»» created|string|true|none||none|
|»» hourly_rate|null|true|none||none|
|»» hourly_rate_currency_code|null|true|none||none|
|»» default_store_id|integer|true|none||none|
|»» default_treasury_id|integer|true|none||none|
|»» maximum_general_discount|integer|true|none||none|
|»» language_code|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» full_name|string|true|none||none|
|»» attendance_restriction_id|null|true|none||none|
|»» type|string|true|none||none|
|»» default_account_id|null|true|none||none|
|»» citizenship_status|string|true|none||none|
|»» residence_expiry_date|null|true|none||none|
|»» nationality|null|true|none||none|
|»» code|string|true|none||none|
|»» official_id|null|true|none||none|
|» unit_templates_unit_factors|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» factor_name|string|true|none||none|
|»» factor|integer|true|none||none|
|»» small_name|string|true|none||none|
|»» created|null|true|none||none|
|»» modified|null|true|none||none|
|»» branch_id|null|true|none||none|
|»» unit_template_id|integer|true|none||none|
|»» staff_id|null|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## POST Add Unit Template

POST /unit_template

> Body Parameters

```json
{
    "template_name": "api template",
    "active": 1,
    "main_unit_name": "جرام",
    "unit_small_name": "جم",
    "branch_id": 1,
    "staff_id": 1,
    "unit_templates_unit_factors": [
        {
            "factor_name": "Kilo",
            "factor": 1000,
            "small_name": "كجم"
        },
        {
            "factor_name": "Mega",
            "factor": 1000000,
            "small_name": "ميجا"
        }
    ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» template_name|body|string| yes |none|
|» active|body|integer| yes |none|
|» main_unit_name|body|string| yes |none|
|» unit_small_name|body|string| yes |none|
|» branch_id|body|integer| yes |none|
|» staff_id|body|integer| yes |none|
|» unit_templates_unit_factors|body|[object]| yes |none|
|»» factor_name|body|string| yes |none|
|»» factor|body|integer| yes |none|
|»» small_name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## PUT Edit Unit Template

PUT /unit_template/id

> Body Parameters

```json
{
    "id": 3,
    "template_name": "api template edited",
    "active": 1,
    "main_unit_name": "جرام",
    "unit_small_name": "جم",
    "branch_id": 1,
    "staff_id": 1,
    "unit_templates_unit_factors": [
        {
            "id": 4,
            "factor_name": "Kilo 2",
            "factor": 1000,
            "small_name": "كجم"
        },
        {
            "id": 5,
            "factor_name": "Mega",
            "factor": 1000000,
            "small_name": "ميجا"
        }
    ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» template_name|body|string| yes |none|
|» active|body|integer| yes |none|
|» main_unit_name|body|string| yes |none|
|» unit_small_name|body|string| yes |none|
|» branch_id|body|integer| yes |none|
|» staff_id|body|integer| yes |none|
|» unit_templates_unit_factors|body|[object]| yes |none|
|»» id|body|integer| yes |none|
|»» factor_name|body|string| yes |none|
|»» factor|body|integer| yes |none|
|»» small_name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» messsage|string|true|none||none|

# Endpoints v2/Follow-Up Status

## GET Get All Follow-Up Statuses

GET /follow_up_status/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    null
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[any]|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET Get Single Follow-Up Status

GET /follow_up_statuses/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": null,
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Follow-Up Status

DELETE /follow_up_statuses/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## POST Add New Follow-Up Status

POST /follow_up_status

> Body Parameters

```json
{
    "item_type": 0,
    "name": "fraaaa",
    "color": "fuchsia",
    "status": 1,
    "staff_id": 5,
    "entity_key": "le_workflow-type-entity-48",
    "display_order": 14
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|
|» item_type|body|integer| no |none|
|» name|body|string| yes |none|
|» color|body|string¦null| no |none|
|» status|body|integer| yes |none|
|» staff_id|body|integer| yes |none|
|» entity_key|body|string¦null| no |none|
|» display_order|body|integer¦null| no |none|

#### Enum

|Name|Value|
|---|---|
|» item_type|0|
|» item_type|1|
|» item_type|2|
|» item_type|3|
|» item_type|8|
|» item_type|14|
|» item_type|23|
|» item_type|24|
|» item_type|27|
|» status|1|
|» status|2|
|» entity_key|rental_reservation_order|
|» entity_key|le_workflow-type-entity-{{workflow_id}}|
|» entity_key|manufacturing_order|
|» entity_key|production_plan|
|» entity_key|lease_contract|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة حالة المتابعة بنجاح",
    "id": 23
}
```

> 422 Response

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

# Endpoints v2/Follow-Up Action

## GET Get All Follow-Up Actions

GET /follow_up_actions/{type}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|type|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": [
    null
  ],
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|[any]|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## GET Get Single Follow-Up Action

GET /follow_up_actions/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful",
  "data": null,
  "pagination": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|
|» data|any|false|none||none|
|» pagination|any|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

## DELETE Delete Follow-Up Action

DELETE /follow_up_actions/{id}{format}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|format|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "code": 200,
  "result": "successful"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Item can't be deleted, check the the transactions of the item|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|NotFound|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» code|integer|false|none||none|
|» result|string|false|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **403**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **404**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» result|string|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|

# Endpoints v2/Cost Centers

## GET Get All Cost Centers

GET /cost_center/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Single Cost Center

GET /cost_center/{ID}/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Add New Cost Center

POST /v2/api/entity/cost_center

> Body Parameters

```json
{
    "name": "Project D",
    "code": "0001",
    "is_primary": "0",
    "cost_center_id": 5,
    "cost_center_ids": "5",
    "branch_id": 1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|
|» name|body|string| yes |none|
|» code|body|string| yes |code is unique|
|» is_primary|body|string| yes |1 for primary cost center|
|» cost_center_id|body|integer| yes |parent id and "0" for primary|
|» cost_center_ids|body|string| yes |none|
|» branch_id|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Edit Cost Center

PUT /v2/api/entity/cost_center/{ID}

> Body Parameters

```json
{
    "id": 37,
    "name":  "Cost center name",
    "code": 36,
    "is_primary": 1,
    "cost_center_id": 0,
    "cost_center_ids": "0",
    "branch_id": 1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/Payment Gateways

## GET Get All Payment Methods

GET /site_payment_gateway/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Single Payment Method

GET /site_payment_gateway/{ID}/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Add Payment Method

POST /site_payment_gateway

> Body Parameters

```json
{
"id": 27,
"payment_gateway": "newpaymentmethod",
"label": "نقدى جديد ",
"username": null,
"option1": "",
"option2": null,
"option3": null,
"default": 0,
"active": 1,
"manually_added": 1,
"disable_for_client": 0,
"settings": null,
"treasury_id": null,
"branch_id": 1

}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| yes |none|
|» id|body|integer| yes |none|
|» payment_gateway|body|string| yes |none|
|» label|body|string| yes |none|
|» username|body|null| yes |none|
|» option1|body|string| yes |none|
|» option2|body|null| yes |none|
|» option3|body|null| yes |none|
|» default|body|integer| yes |none|
|» active|body|integer| yes |none|
|» manually_added|body|integer| yes |none|
|» disable_for_client|body|integer| yes |none|
|» settings|body|null| yes |none|
|» treasury_id|body|null| yes |none|
|» branch_id|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/Points & Credits/Credit Usage

## GET Get All Credit Usage

GET /credit_usage/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "client_id": 0,
      "credit_type_id": 0,
      "usage_date": "string",
      "description": "string",
      "created": "string",
      "modified": "string",
      "deleted_at": null
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": "string",
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0,
  "code": 0,
  "result": "string",
  "pagination": {
    "prev": "string",
    "next": "string",
    "page": 0,
    "page_count": 0,
    "total_results": 0
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» client_id|integer|true|none||none|
|»» credit_type_id|integer|true|none||none|
|»» usage_date|string|true|none||none|
|»» description|string¦null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» deleted_at|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|string|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|
|» code|integer|true|none||none|
|» result|string|true|none||none|
|» pagination|object|true|none||none|
|»» prev|string|true|none||none|
|»» next|string|true|none||none|
|»» page|integer|true|none||none|
|»» page_count|integer|true|none||none|
|»» total_results|integer|true|none||none|

HTTP Status Code **401**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|any|true|none||none|

## GET Get Single Credit Usage 

GET /credit_usage/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "client_id": 0,
  "credit_type_id": 0,
  "usage_date": "string",
  "description": "string",
  "created": "string",
  "modified": "string",
  "deleted_at": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» client_id|integer|true|none||none|
|» credit_type_id|integer|true|none||none|
|» usage_date|string|true|none||none|
|» description|string|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» deleted_at|null|true|none||none|

## POST Edit Credit Usage

POST /credit_usage

> Body Parameters

```json
{
    "id": 5,
    "client_id": 13,
    "credit_type_id": "1",
    "description": "Test Description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» client_id|body|integer| yes |none|
|» credit_type_id|body|string| yes |none|
|» description|body|string| yes |none|
|» amount|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

## POST Edit Credit Usage Amount

POST /charge_usage

> Body Parameters

```json
{
    "id": 5,
    "credit_charge_id": "216",
    "credit_usage_id": "11",
    "amount": 300
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» credit_charge_id|body|string| yes |none|
|» credit_usage_id|body|string| yes |none|
|» amount|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

## GET Get All Credit Usage Amount

GET /charge_usage/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "credit_charge_id": 0,
      "credit_usage_id": 0,
      "amount": 0
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» credit_charge_id|integer|true|none||none|
|»» credit_usage_id|integer|true|none||none|
|»» amount|integer|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Credit Usage Amount

GET /charge_usage/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "credit_charge_id": 0,
  "credit_usage_id": 0,
  "amount": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» credit_charge_id|integer|true|none||none|
|» credit_usage_id|integer|true|none||none|
|» amount|integer|true|none||none|

# Endpoints v2/Points & Credits/Credit Types

## GET Get All Credit types

GET /credit_type/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "name": "string",
      "allow_decimal": 0,
      "status": 0,
      "unit": "string",
      "description": "string",
      "created": "string",
      "modified": "string",
      "deleted_at": null
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» allow_decimal|integer|true|none||none|
|»» status|integer|true|none||none|
|»» unit|string¦null|true|none||none|
|»» description|string¦null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» deleted_at|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Credit type 

GET /credit_type/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "allow_decimal": 0,
  "status": 0,
  "unit": "string",
  "description": "string",
  "created": "string",
  "modified": "string",
  "deleted_at": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» allow_decimal|integer|true|none||none|
|» status|integer|true|none||none|
|» unit|string|true|none||none|
|» description|string|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» deleted_at|null|true|none||none|

## POST Edit Credit type

POST /credit_type

> Body Parameters

```json
{
    "id": 7,
    "name": "Test credit 4 edited",
    "allow_decimal": 0,
    "status": 1,
    "unit": "نقطة",
    "description": "Test Description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» allow_decimal|body|integer| yes |none|
|» status|body|integer| yes |1 --> Active|
|» unit|body|string| yes |none|
|» description|body|string| yes |none|

#### Description

**» status**: 1 --> Active
 0 --> Inactive

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

# Endpoints v2/Points & Credits/Credit Charges

## GET Get All Credit Charges

GET /credit_charge/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "staff_id": 0,
      "client_id": 0,
      "credit_type_id": 0,
      "status": "string",
      "start_date": "string",
      "expiry_date": null,
      "amount": 0,
      "description": "string",
      "created": "string",
      "modified": "string",
      "deleted_at": null,
      "renewal_id": null
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": "string",
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» staff_id|integer|false|none||none|
|»» client_id|integer|false|none||none|
|»» credit_type_id|integer|false|none||none|
|»» status|string|false|none||none|
|»» start_date|string|false|none||none|
|»» expiry_date|null|false|none||none|
|»» amount|number|false|none||none|
|»» description|string|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|»» deleted_at|null|false|none||none|
|»» renewal_id|null|false|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|string|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Credit Charge

GET /credit_charge/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "staff_id": 0,
  "client_id": 0,
  "credit_type_id": 0,
  "status": "string",
  "start_date": "string",
  "expiry_date": null,
  "amount": 0,
  "description": "string",
  "created": "string",
  "modified": "string",
  "deleted_at": null,
  "renewal_id": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» staff_id|integer|true|none||none|
|» client_id|integer|true|none||none|
|» credit_type_id|integer|true|none||none|
|» status|string|true|none||none|
|» start_date|string|true|none||none|
|» expiry_date|null|true|none||none|
|» amount|number|true|none||none|
|» description|string|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» deleted_at|null|true|none||none|
|» renewal_id|null|true|none||none|

## POST Edit Credit Charge

POST /credit_charge

> Body Parameters

```json
{
    "id": 221,
    "staff_id": 1,
    "client_id": 1,
    "credit_type_id": "2",
    "start_date": "31/12/2025",
    "expiry_date": "31/12/2025",
    "amount": 200,
    "description": "Test Description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» staff_id|body|integer| yes |none|
|» client_id|body|integer| yes |none|
|» credit_type_id|body|string| yes |none|
|» start_date|body|string| yes |none|
|» expiry_date|body|string| yes |none|
|» amount|body|integer| yes |none|
|» description|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

# Endpoints v2/Points & Credits/Packages

## GET Get All Packages

GET /package/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|per_page|query|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "name": "string",
      "price": 0,
      "period_value": 0,
      "period_unit": "string",
      "status": 0,
      "product_id": null,
      "description": "string",
      "created": "string",
      "modified": "string",
      "deleted_at": null,
      "type": "string",
      "branch_id": 0
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» price|integer|true|none||none|
|»» period_value|integer|true|none||none|
|»» period_unit|string|true|none||none|
|»» status|integer|true|none||none|
|»» product_id|null|true|none||none|
|»» description|string¦null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» deleted_at|null|true|none||none|
|»» type|string|true|none||none|
|»» branch_id|integer|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Package

GET /package/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|per_page|query|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "price": 0,
  "period_value": 0,
  "period_unit": "string",
  "status": 0,
  "product_id": null,
  "description": "string",
  "created": "string",
  "modified": "string",
  "deleted_at": null,
  "type": "string",
  "branch_id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» price|integer|true|none||none|
|» period_value|integer|true|none||none|
|» period_unit|string|true|none||none|
|» status|integer|true|none||none|
|» product_id|null|true|none||none|
|» description|string|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» deleted_at|null|true|none||none|
|» type|string|true|none||none|
|» branch_id|integer|true|none||none|

## POST Edit Package

POST /package

> Body Parameters

```json
{
    "id": 30,
    "name": "Test Package 2.0 edited",
    "status": 1,
    "type": "membership", 
    "price": 100,
    "period_value": 1,
    "period_unit": "monthly", 
    "description": "Test Description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» status|body|integer| yes |none|
|» type|body|string| yes |"credit_charge" | "membership"|
|» price|body|integer| yes |none|
|» period_value|body|integer| yes |none|
|» period_unit|body|string| yes |"daily" | "weekly" | "monthly" | "yearly"|
|» description|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

# Endpoints v2/Points & Credits/Packages Credit Types

## GET Get All Package Credit Types

GET /credit_type_package/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "credit_type_id": 0,
      "package_id": 0,
      "amount": 0
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» credit_type_id|integer|true|none||none|
|»» package_id|integer|true|none||none|
|»» amount|integer|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Package Credit Type

GET /credit_type_package/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "id": 0,
  "credit_type_id": 0,
  "package_id": 0,
  "amount": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» credit_type_id|integer|true|none||none|
|» package_id|integer|true|none||none|
|» amount|integer|true|none||none|

## POST Edit Package Credit Type

POST /credit_type_package

> Body Parameters

```json
{
    "id": 1,
    "credit_type_id": 1,
    "package_id": 24,
    "amount": 1000
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» credit_type_id|body|integer| yes |none|
|» package_id|body|integer| yes |none|
|» amount|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "string",
  "id": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

# Endpoints v2/Workflow

## GET Get All Records

GET /le_workflow-type-entity-workflow_id/list/format

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "id": 0,
      "client_id": 0,
      "number": "string",
      "title": "string",
      "start_date": "string",
      "description": "string",
      "delivery_date": "string",
      "delivery_appointment_id": null,
      "follow_up_status_id": null,
      "budget_currency": "string",
      "budget": 0,
      "status": 0,
      "created": "string",
      "modified": "string",
      "staff_id": 0,
      "client_data": null,
      "extra_details": null,
      "branch_id": 0,
      "workflow_type_id": 0,
      "le_workflow-type-entity-{{workflow_id}}_custom_data": {
        "id": null,
        "reference_id": null
      },
      "workflow_type": {
        "id": 0,
        "name": "string",
        "status": 0,
        "icon": null,
        "created": "string",
        "modified": "string",
        "singular_title": "string",
        "entity_key": "string",
        "app_related_data": {
          "id": null,
          "record_id": null
        }
      },
      "staff": {
        "id": 0,
        "added_by": 0,
        "role_id": 0,
        "name": "string",
        "middle_name": "string",
        "last_name": "string",
        "photo": null,
        "can_access_system": 0,
        "home_phone": "string",
        "business_Phone": null,
        "mobile": "string",
        "fax": null,
        "country_code": "string",
        "address1": "string",
        "address2": "string",
        "city": "string",
        "state": "string",
        "postal_code": "string",
        "note": null,
        "email_address": "string",
        "last_login": "string",
        "active": 0,
        "created": "string",
        "hourly_rate": null,
        "hourly_rate_currency_code": null,
        "default_store_id": 0,
        "default_treasury_id": 0,
        "maximum_general_discount": 0,
        "language_code": 0,
        "branch_id": 0,
        "full_name": "string",
        "attendance_restriction_id": null,
        "type": "string",
        "default_account_id": null,
        "citizenship_status": "string",
        "residence_expiry_date": null,
        "nationality": null,
        "code": "string",
        "official_id": null,
        "staff_info": {
          "staff_id": 0,
          "department_id": null,
          "employment_level_id": null,
          "employment_type_id": null,
          "designation_id": null,
          "birth_date": null,
          "gender": null,
          "personal_email": null,
          "permanent_address1": null,
          "permanent_address2": null,
          "permanent_city": null,
          "permanent_state": null,
          "permanent_postal_code": null,
          "created": "string",
          "modified": "string",
          "attendance_shift_id": null,
          "leave_policy_id": null,
          "has_secondary_shift": 0,
          "secondary_shift_id": null,
          "direct_manager_id": null
        },
        "staff_job": {
          "staff_id": 0,
          "join_date": null,
          "probation_end_date": null,
          "contract_duration": 0,
          "contract_duration_period": null,
          "exit_date": null,
          "exit_reason": null,
          "fiscal_type": null,
          "fiscal_day": "string",
          "fiscal_month": "string",
          "created": "string",
          "modified": "string"
        },
        "staff_custom_data": {
          "id": null,
          "allow_printing": null,
          "reference_id": null,
          "time": null
        }
      },
      "work_order_client": {
        "id": 0,
        "group_price_id": null,
        "is_offline": 0,
        "client_number": "string",
        "staff_id": 0,
        "business_name": "string",
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "address1": "string",
        "address2": "string",
        "city": "string",
        "state": "string",
        "postal_code": "string",
        "phone1": "string",
        "phone2": "string",
        "country_code": "string",
        "notes": "string",
        "active_secondary_address": 0,
        "secondary_name": "string",
        "secondary_address1": "string",
        "secondary_address2": "string",
        "secondary_city": "string",
        "secondary_state": "string",
        "secondary_postal_code": "string",
        "secondary_country_code": "string",
        "language_code": null,
        "default_currency_code": "string",
        "last_login": null,
        "suspend": 0,
        "last_ip": null,
        "created": "string",
        "modified": "string",
        "follow_up_status": null,
        "category": "string",
        "bn1": "string",
        "bn1_label": "string",
        "bn2_label": "string",
        "bn2": "string",
        "starting_balance": null,
        "photo": null,
        "birth_date": null,
        "gender": null,
        "map_location": null,
        "type": 0,
        "credit_limit": 0,
        "credit_period": 0,
        "branch_id": 0,
        "national_id": null,
        "category_id": 0,
        "secondary_follow_up_status": null,
        "timezone": null,
        "client_photo_s3": {
          "id": null,
          "entity_key": null,
          "entity_id": null,
          "file_id": null,
          "deleted_at": null
        },
        "client_custom_data": {
          "id": 0,
          "building_no": "string",
          "reference_id": "string",
          "client_name_en": "string",
          "vat_category": "string",
          "customer_service_contact": "string",
          "customer_reference": "string",
          "custom_price_list": null
        }
      },
      "branch": {
        "id": 0,
        "name": "string",
        "status": 0,
        "created": "string",
        "modified": "string"
      },
      "work_order_follow_up_status": {
        "id": null,
        "item_type": null,
        "name": null,
        "color": null,
        "status": null,
        "staff_id": null,
        "created": null,
        "modified": null,
        "deleted": null,
        "entity_key": null,
        "display_order": null
      },
      "assigned_users": {
        "id": 0,
        "item_id": 0,
        "item_type": 0,
        "entity_key": "string",
        "entity_field_key": "string",
        "staff_id": 0,
        "group_id": 0,
        "assigned_by": 0,
        "created": "string",
        "modified": "string"
      },
      "tags": {
        "id": 0,
        "item_id": 0,
        "item_type": 0,
        "tag_id": 0,
        "branch_id": 0,
        "created": "string",
        "modified": "string",
        "entity_key": "string",
        "entity_field_key": "string"
      }
    }
  ],
  "first_page_url": "string",
  "from": 0,
  "last_page": 0,
  "last_page_url": "string",
  "links": [
    {
      "url": "string",
      "label": "string",
      "page": 0,
      "active": true
    }
  ],
  "next_page_url": null,
  "path": "string",
  "per_page": 0,
  "prev_page_url": null,
  "to": 0,
  "total": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» client_id|integer|false|none||none|
|»» number|string|false|none||none|
|»» title|string|false|none||none|
|»» start_date|string|false|none||none|
|»» description|string|false|none||none|
|»» delivery_date|string|false|none||none|
|»» delivery_appointment_id|null|false|none||none|
|»» follow_up_status_id|null|false|none||none|
|»» budget_currency|string|false|none||none|
|»» budget|integer|false|none||none|
|»» status|integer|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|»» staff_id|integer|false|none||none|
|»» client_data|null|false|none||none|
|»» extra_details|null|false|none||none|
|»» branch_id|integer|false|none||none|
|»» workflow_type_id|integer|false|none||none|
|»» le_workflow-type-entity-{{workflow_id}}_custom_data|object|false|none||none|
|»»» id|null|true|none||none|
|»»» reference_id|null|true|none||none|
|»» workflow_type|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» icon|null|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»»» singular_title|string|true|none||none|
|»»» entity_key|string|true|none||none|
|»»» app_related_data|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» record_id|null|true|none||none|
|»» staff|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» added_by|integer|true|none||none|
|»»» role_id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» middle_name|string|true|none||none|
|»»» last_name|string|true|none||none|
|»»» photo|null|true|none||none|
|»»» can_access_system|integer|true|none||none|
|»»» home_phone|string|true|none||none|
|»»» business_Phone|null|true|none||none|
|»»» mobile|string|true|none||none|
|»»» fax|null|true|none||none|
|»»» country_code|string|true|none||none|
|»»» address1|string|true|none||none|
|»»» address2|string|true|none||none|
|»»» city|string|true|none||none|
|»»» state|string|true|none||none|
|»»» postal_code|string|true|none||none|
|»»» note|null|true|none||none|
|»»» email_address|string|true|none||none|
|»»» last_login|string|true|none||none|
|»»» active|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» hourly_rate|null|true|none||none|
|»»» hourly_rate_currency_code|null|true|none||none|
|»»» default_store_id|integer|true|none||none|
|»»» default_treasury_id|integer|true|none||none|
|»»» maximum_general_discount|integer|true|none||none|
|»»» language_code|integer|true|none||none|
|»»» branch_id|integer|true|none||none|
|»»» full_name|string|true|none||none|
|»»» attendance_restriction_id|null|true|none||none|
|»»» type|string|true|none||none|
|»»» default_account_id|null|true|none||none|
|»»» citizenship_status|string|true|none||none|
|»»» residence_expiry_date|null|true|none||none|
|»»» nationality|null|true|none||none|
|»»» code|string|true|none||none|
|»»» official_id|null|true|none||none|
|»»» staff_info|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» department_id|null|true|none||none|
|»»»» employment_level_id|null|true|none||none|
|»»»» employment_type_id|null|true|none||none|
|»»»» designation_id|null|true|none||none|
|»»»» birth_date|null|true|none||none|
|»»»» gender|null|true|none||none|
|»»»» personal_email|null|true|none||none|
|»»»» permanent_address1|null|true|none||none|
|»»»» permanent_address2|null|true|none||none|
|»»»» permanent_city|null|true|none||none|
|»»»» permanent_state|null|true|none||none|
|»»»» permanent_postal_code|null|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»»» attendance_shift_id|null|true|none||none|
|»»»» leave_policy_id|null|true|none||none|
|»»»» has_secondary_shift|integer|true|none||none|
|»»»» secondary_shift_id|null|true|none||none|
|»»»» direct_manager_id|null|true|none||none|
|»»» staff_job|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» join_date|null|true|none||none|
|»»»» probation_end_date|null|true|none||none|
|»»»» contract_duration|integer|true|none||none|
|»»»» contract_duration_period|null|true|none||none|
|»»»» exit_date|null|true|none||none|
|»»»» exit_reason|null|true|none||none|
|»»»» fiscal_type|null|true|none||none|
|»»»» fiscal_day|string|true|none||none|
|»»»» fiscal_month|string|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»» staff_custom_data|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» allow_printing|null|true|none||none|
|»»»» reference_id|null|true|none||none|
|»»»» time|null|true|none||none|
|»» work_order_client|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» group_price_id|null|true|none||none|
|»»» is_offline|integer|true|none||none|
|»»» client_number|string|true|none||none|
|»»» staff_id|integer|true|none||none|
|»»» business_name|string|true|none||none|
|»»» first_name|string|true|none||none|
|»»» last_name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» address1|string|true|none||none|
|»»» address2|string|true|none||none|
|»»» city|string|true|none||none|
|»»» state|string|true|none||none|
|»»» postal_code|string|true|none||none|
|»»» phone1|string|true|none||none|
|»»» phone2|string|true|none||none|
|»»» country_code|string|true|none||none|
|»»» notes|string|true|none||none|
|»»» active_secondary_address|integer|true|none||none|
|»»» secondary_name|string|true|none||none|
|»»» secondary_address1|string|true|none||none|
|»»» secondary_address2|string|true|none||none|
|»»» secondary_city|string|true|none||none|
|»»» secondary_state|string|true|none||none|
|»»» secondary_postal_code|string|true|none||none|
|»»» secondary_country_code|string|true|none||none|
|»»» language_code|null|true|none||none|
|»»» default_currency_code|string|true|none||none|
|»»» last_login|null|true|none||none|
|»»» suspend|integer|true|none||none|
|»»» last_ip|null|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»»» follow_up_status|null|true|none||none|
|»»» category|string|true|none||none|
|»»» bn1|string|true|none||none|
|»»» bn1_label|string|true|none||none|
|»»» bn2_label|string|true|none||none|
|»»» bn2|string|true|none||none|
|»»» starting_balance|null|true|none||none|
|»»» photo|null|true|none||none|
|»»» birth_date|null|true|none||none|
|»»» gender|null|true|none||none|
|»»» map_location|null|true|none||none|
|»»» type|integer|true|none||none|
|»»» credit_limit|integer|true|none||none|
|»»» credit_period|integer|true|none||none|
|»»» branch_id|integer|true|none||none|
|»»» national_id|null|true|none||none|
|»»» category_id|integer|true|none||none|
|»»» secondary_follow_up_status|null|true|none||none|
|»»» timezone|null|true|none||none|
|»»» client_photo_s3|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» entity_key|null|true|none||none|
|»»»» entity_id|null|true|none||none|
|»»»» file_id|null|true|none||none|
|»»»» deleted_at|null|true|none||none|
|»»» client_custom_data|object|true|none||none|
|»»»» id|integer|true|none||none|
|»»»» building_no|string|true|none||none|
|»»»» reference_id|string|true|none||none|
|»»»» client_name_en|string|true|none||none|
|»»»» vat_category|string|true|none||none|
|»»»» customer_service_contact|string|true|none||none|
|»»»» customer_reference|string|true|none||none|
|»»»» custom_price_list|null|true|none||none|
|»» branch|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»» work_order_follow_up_status|object|false|none||none|
|»»» id|null|true|none||none|
|»»» item_type|null|true|none||none|
|»»» name|null|true|none||none|
|»»» color|null|true|none||none|
|»»» status|null|true|none||none|
|»»» staff_id|null|true|none||none|
|»»» created|null|true|none||none|
|»»» modified|null|true|none||none|
|»»» deleted|null|true|none||none|
|»»» entity_key|null|true|none||none|
|»»» display_order|null|true|none||none|
|»» assigned_users|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» item_id|integer|true|none||none|
|»»» item_type|integer|true|none||none|
|»»» entity_key|string|true|none||none|
|»»» entity_field_key|string|true|none||none|
|»»» staff_id|integer|true|none||none|
|»»» group_id|integer|true|none||none|
|»»» assigned_by|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»» tags|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» item_id|integer|true|none||none|
|»»» item_type|integer|true|none||none|
|»»» tag_id|integer|true|none||none|
|»»» branch_id|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»»» entity_key|string|true|none||none|
|»»» entity_field_key|string|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Record

GET /le_workflow-type-entity-workflow_id/record_id/format

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 65,
    "client_id": 1,
    "number": "000007",
    "title": "Instance 22 edited",
    "start_date": "2026-06-01",
    "description": "description",
    "delivery_date": "2026-06-04",
    "delivery_appointment_id": null,
    "follow_up_status_id": null,
    "budget": 1000,
    "budget_currency": "USD",
    "status": 1,
    "created": "2026-06-01 08:57:07",
    "modified": "2026-06-01 09:00:43",
    "staff_id": 1,
    "client_data": null,
    "extra_details": null,
    "branch_id": 1,
    "workflow_type_id": 36,
    "attachments": [],
    "assigned_users": [
        {
            "item_id": 65,
            "id": 725,
            "item_type": 0,
            "entity_key": "work_order",
            "entity_field_key": "assigned_staff",
            "staff_id": 1,
            "group_id": 0,
            "assigned_by": -1,
            "created": "2026-06-01 11:57:07",
            "modified": "2026-06-01 11:57:07"
        },
        {
            "item_id": 65,
            "id": 726,
            "item_type": 0,
            "entity_key": "work_order",
            "entity_field_key": "assigned_staff",
            "staff_id": 2,
            "group_id": 0,
            "assigned_by": -1,
            "created": "2026-06-01 11:57:07",
            "modified": "2026-06-01 11:57:07"
        }
    ],
    "tags": [
        {
            "id": 31,
            "item_id": 65,
            "item_type": 0,
            "tag_id": 6,
            "branch_id": 1,
            "created": "2026-06-01 17:36:47",
            "modified": "2026-06-01 17:36:47",
            "entity_key": "work_order",
            "entity_field_key": "tags"
        }
    ],
    "workflow_type": {
        "id": 36,
        "name": "أكواد الخصم",
        "status": 1,
        "icon": null,
        "created": "2026-04-15 09:06:05",
        "modified": "2026-04-15 11:06:06",
        "singular_title": "كود خصم",
        "entity_key": "le_workflow-type-entity-36"
    },
    "staff": {
        "id": 1,
        "added_by": 1,
        "role_id": -1,
        "name": "",
        "middle_name": "",
        "last_name": "",
        "photo": null,
        "can_access_system": 1,
        "home_phone": "",
        "business_Phone": null,
        "mobile": "",
        "fax": null,
        "country_code": "EG",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "postal_code": "4345678",
        "note": null,
        "email_address": "",
        "password": null,
        "last_login": "2026-06-01 11:15:27",
        "active": 1,
        "created": "2025-05-19 12:58:18",
        "hourly_rate": null,
        "hourly_rate_currency_code": null,
        "default_store_id": 1,
        "default_treasury_id": 1,
        "maximum_general_discount": 10,
        "language_code": 7,
        "branch_id": 1,
        "full_name": "",
        "attendance_restriction_id": null,
        "type": "user",
        "default_account_id": null,
        "citizenship_status": "citizen",
        "residence_expiry_date": null,
        "nationality": null,
        "code": "000001",
        "official_id": null
    },
    "work_order_client": {
        "id": 1,
        "group_price_id": null,
        "is_offline": 0,
        "client_number": "000001",
        "staff_id": 1,
        "business_name": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": null,
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "postal_code": "12345",
        "phone1": "",
        "phone2": "",
        "country_code": "EG",
        "notes": "",
        "active_secondary_address": 0,
        "secondary_name": "",
        "secondary_address1": "",
        "secondary_address2": "",
        "secondary_city": "",
        "secondary_state": "",
        "secondary_postal_code": "",
        "secondary_country_code": "EG",
        "language_code": null,
        "default_currency_code": "EGP",
        "last_login": null,
        "suspend": 0,
        "last_ip": null,
        "created": "2025-05-19 13:36:18",
        "modified": "2025-10-01 10:24:08",
        "follow_up_status": null,
        "category": "VAT",
        "bn1": "",
        "bn1_label": "سجل تجاري",
        "bn2_label": "بطاقة ضريبية",
        "bn2": "",
        "starting_balance": null,
        "photo": null,
        "birth_date": null,
        "gender": null,
        "map_location": null,
        "type": 2,
        "credit_limit": 0,
        "credit_period": 0,
        "branch_id": 1,
        "national_id": null,
        "attachment": null,
        "category_id": 8,
        "secondary_follow_up_status": null,
        "timezone": null,
        "tags": null,
        "assigned_users": null
    },
    "branch": {
        "id": 1,
        "name": "Main Branch",
        "status": 1,
        "created": "2025-05-20 06:42:26",
        "modified": "2025-05-20 06:42:26"
    },
    "le_workflow-type-entity-36_custom_data": {
        "code": "Renee315",
        "discount_type": "نسبة مئوية",
        "discount_value": 10,
        "start_date": "",
        "end_date": "",
        "id": 1,
        "reference_id": "65"
    },
    "work_order_follow_up_status": null,
    "custom_data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» client_id|integer|true|none||none|
|» number|string|true|none||none|
|» title|string|true|none||none|
|» start_date|string|true|none||none|
|» description|string|true|none||none|
|» delivery_date|string|true|none||none|
|» delivery_appointment_id|null|true|none||none|
|» follow_up_status_id|null|true|none||none|
|» budget|integer|true|none||none|
|» budget_currency|string|true|none||none|
|» status|integer|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» staff_id|integer|true|none||none|
|» client_data|null|true|none||none|
|» extra_details|null|true|none||none|
|» branch_id|integer|true|none||none|
|» workflow_type_id|integer|true|none||none|
|» attachments|[string]|true|none||none|
|» assigned_users|[object]|true|none||none|
|»» item_id|integer|true|none||none|
|»» id|integer|true|none||none|
|»» item_type|integer|true|none||none|
|»» entity_key|string|true|none||none|
|»» entity_field_key|string|true|none||none|
|»» staff_id|integer|true|none||none|
|»» group_id|integer|true|none||none|
|»» assigned_by|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» tags|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» item_id|integer|false|none||none|
|»» item_type|integer|false|none||none|
|»» tag_id|integer|false|none||none|
|»» branch_id|integer|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|»» entity_key|string|false|none||none|
|»» entity_field_key|string|false|none||none|
|» workflow_type|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» icon|null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» singular_title|string|true|none||none|
|»» entity_key|string|true|none||none|
|» staff|object|true|none||none|
|»» id|integer|true|none||none|
|»» added_by|integer|true|none||none|
|»» role_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» middle_name|string|true|none||none|
|»» last_name|string|true|none||none|
|»» photo|null|true|none||none|
|»» can_access_system|integer|true|none||none|
|»» home_phone|string|true|none||none|
|»» business_Phone|null|true|none||none|
|»» mobile|string|true|none||none|
|»» fax|null|true|none||none|
|»» country_code|string|true|none||none|
|»» address1|string|true|none||none|
|»» address2|string|true|none||none|
|»» city|string|true|none||none|
|»» state|string|true|none||none|
|»» postal_code|string|true|none||none|
|»» note|null|true|none||none|
|»» email_address|string|true|none||none|
|»» password|null|true|none||none|
|»» last_login|string|true|none||none|
|»» active|integer|true|none||none|
|»» created|string|true|none||none|
|»» hourly_rate|null|true|none||none|
|»» hourly_rate_currency_code|null|true|none||none|
|»» default_store_id|integer|true|none||none|
|»» default_treasury_id|integer|true|none||none|
|»» maximum_general_discount|integer|true|none||none|
|»» language_code|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» full_name|string|true|none||none|
|»» attendance_restriction_id|null|true|none||none|
|»» type|string|true|none||none|
|»» default_account_id|null|true|none||none|
|»» citizenship_status|string|true|none||none|
|»» residence_expiry_date|null|true|none||none|
|»» nationality|null|true|none||none|
|»» code|string|true|none||none|
|»» official_id|null|true|none||none|
|» work_order_client|object|true|none||none|
|»» id|integer|true|none||none|
|»» group_price_id|null|true|none||none|
|»» is_offline|integer|true|none||none|
|»» client_number|string|true|none||none|
|»» staff_id|integer|true|none||none|
|»» business_name|string|true|none||none|
|»» first_name|string|true|none||none|
|»» last_name|string|true|none||none|
|»» email|string|true|none||none|
|»» password|null|true|none||none|
|»» address1|string|true|none||none|
|»» address2|string|true|none||none|
|»» city|string|true|none||none|
|»» state|string|true|none||none|
|»» postal_code|string|true|none||none|
|»» phone1|string|true|none||none|
|»» phone2|string|true|none||none|
|»» country_code|string|true|none||none|
|»» notes|string|true|none||none|
|»» active_secondary_address|integer|true|none||none|
|»» secondary_name|string|true|none||none|
|»» secondary_address1|string|true|none||none|
|»» secondary_address2|string|true|none||none|
|»» secondary_city|string|true|none||none|
|»» secondary_state|string|true|none||none|
|»» secondary_postal_code|string|true|none||none|
|»» secondary_country_code|string|true|none||none|
|»» language_code|null|true|none||none|
|»» default_currency_code|string|true|none||none|
|»» last_login|null|true|none||none|
|»» suspend|integer|true|none||none|
|»» last_ip|null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» follow_up_status|null|true|none||none|
|»» category|string|true|none||none|
|»» bn1|string|true|none||none|
|»» bn1_label|string|true|none||none|
|»» bn2_label|string|true|none||none|
|»» bn2|string|true|none||none|
|»» starting_balance|null|true|none||none|
|»» photo|null|true|none||none|
|»» birth_date|null|true|none||none|
|»» gender|null|true|none||none|
|»» map_location|null|true|none||none|
|»» type|integer|true|none||none|
|»» credit_limit|integer|true|none||none|
|»» credit_period|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» national_id|null|true|none||none|
|»» attachment|null|true|none||none|
|»» category_id|integer|true|none||none|
|»» secondary_follow_up_status|null|true|none||none|
|»» timezone|null|true|none||none|
|»» tags|null|true|none||none|
|»» assigned_users|null|true|none||none|
|» branch|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» le_workflow-type-entity-{{workflow_id}}_custom_data|object|true|none||none|
|»» id|integer|true|none||none|
|»» reference_id|string|true|none||none|
|» work_order_follow_up_status|null|true|none||none|
|» custom_data|null|true|none||none|

## POST Add New Record

POST /le_workflow-type-entity-workflow_id

> Body Parameters

```json
{
    "title": "Instance 22",
    "number": {
        "code": "000007",
        "generated": null
    },
    "start_date": "01/06/2026",
    "delivery_date": "04/06/2026",
    "client_id": "1",
    "assigned_users": [
        "1",
        "2"
    ],
    "budget": {
        "number": 1000,
        "currency": "USD"
    },
    "tags": [
        "tag1, tag2"
    ],
    "description": "description",
    "attachments": [],
    "branch_id": 1,
    "staff_id": 1, 
    "follow_up_status_id": null,
    "le_workflow-type-entity-36_custom_data": {
        "code": "Renee316",
        "discount_type": "نسبة مئوية",
        "discount_value": 10
    }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» number|body|object| yes |none|
|»» code|body|string| yes |none|
|»» generated|body|null| yes |leave empty, the system will assign its value|
|» start_date|body|string| no |none|
|» delivery_date|body|string| no |none|
|» client_id|body|string| no |none|
|» assigned_users|body|[string]| no |none|
|» budget|body|object| no |none|
|»» number|body|integer| no |none|
|»» currency|body|string| no |none|
|» tags|body|[string]| no |none|
|» description|body|string| no |none|
|» attachments|body|[string]| no |none|
|» branch_id|body|integer| no |none|
|» staff_id|body|integer| no |the staff member who added this instance|
|» follow_up_status_id|body|null| no |none|
|» le_workflow-type-entity-{{workflow_id}}_custom_data|body|object| no |none|

> Response Examples

> 200 Response

```json
{
    "message": "أكواد الخصم Added Successfully",
    "id": 65
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

## PUT Edit Record

PUT /le_workflow-type-entity-workflow_id/record_id

> Body Parameters

```json
{
    "id": 65,
    "title": "Instance 22 edited",
    "number": {
        "code": "000007"
    },
    "start_date": "01/06/2026",
    "delivery_date": "04/06/2026",
    "client_id": "1",
    "assigned_users": [
        "1",
        "2"
    ],
    "budget": {
        "number": 1000,
        "currency": "USD"
    },
    "tags": [
        "tag1, tag2"
    ],
    "description": "description",
    "attachments": [],
    "branch_id": 1,
    "staff_id": 1,
    "follow_up_status_id": null,
    "le_workflow-type-entity-36_custom_data": {
        "id": 1,
        "code": "Renee315",
        "discount_type": "نسبة مئوية",
        "discount_value": 15
    }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |{{record_id}}|
|» title|body|string| yes |none|
|» number|body|object| yes |none|
|»» code|body|string| yes |none|
|» start_date|body|string| no |none|
|» delivery_date|body|string| no |none|
|» client_id|body|string| no |none|
|» assigned_users|body|[string]| no |none|
|» budget|body|object| no |none|
|»» number|body|integer| no |none|
|»» currency|body|string| no |none|
|» tags|body|[string]| no |none|
|» description|body|string| no |none|
|» attachments|body|[string]| no |none|
|» branch_id|body|integer| no |none|
|» staff_id|body|integer| no |none|
|» follow_up_status_id|body|null| no |none|
|» le_workflow-type-entity-{{workflow_id}}_custom_data|body|object| no |none|
|»» id|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث أكواد الخصم بنجاح",
    "id": 65
}
```

> 400 Response

```json
{
    "message": "Record not found"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

# Endpoints v2/Multity entity request

## POST Multy Entity Request

POST /v2/api/multi-entity

> Body Parameters

```json
[
  {
    "key": "invoice",
    "action": "show",
    "options": "172185",
    "data_level": 1
  },
  {
    "key": "requisition",
    "action": "list",
    "options": { "order_id": "172185", "order_type": 3 },
    "alias": "requisition"
  }
]
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|array[object]| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Endpoints v2/Employee Asset/Asset Type

## GET Get All Types

GET /asset_type/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 2,
            "name": "type 2",
            "description": "description",
            "is_active": 1,
            "staff_id": 1,
            "branch_id": 1,
            "created": "2026-06-23 00:00:00",
            "modified": "2026-06-23 14:31:06",
            "branch": {
                "id": 1,
                "name": "Main Branch",
                "status": 1,
                "created": "2025-05-20 06:42:26",
                "modified": "2025-05-20 06:42:26"
            },
            "staff": {
                "id": 1,
                "added_by": 1,
                "role_id": -1,
                "name": "",
                "middle_name": "",
                "last_name": "",
                "photo": null,
                "can_access_system": 1,
                "home_phone": "",
                "business_Phone": null,
                "mobile": "",
                "fax": null,
                "country_code": "EG",
                "address1": "",
                "address2": "",
                "city": "",
                "state": "",
                "postal_code": "",
                "note": null,
                "email_address": "",
                "last_login": "2026-06-28 10:49:50",
                "active": 1,
                "created": "2025-05-19 12:58:18",
                "hourly_rate": null,
                "hourly_rate_currency_code": null,
                "default_store_id": 1,
                "default_treasury_id": 1,
                "maximum_general_discount": 10,
                "language_code": 7,
                "branch_id": 1,
                "full_name": " ",
                "attendance_restriction_id": null,
                "type": "user",
                "default_account_id": null,
                "citizenship_status": "citizen",
                "residence_expiry_date": null,
                "nationality": null,
                "code": "000001",
                "official_id": null,
                "staff_info": {
                    "staff_id": 1,
                    "department_id": null,
                    "employment_level_id": null,
                    "employment_type_id": null,
                    "designation_id": null,
                    "birth_date": null,
                    "gender": null,
                    "personal_email": null,
                    "permanent_address1": null,
                    "permanent_address2": null,
                    "permanent_city": null,
                    "permanent_state": null,
                    "permanent_postal_code": null,
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19",
                    "attendance_shift_id": null,
                    "leave_policy_id": null,
                    "has_secondary_shift": 0,
                    "secondary_shift_id": null,
                    "direct_manager_id": null
                },
                "staff_job": {
                    "staff_id": 1,
                    "join_date": null,
                    "probation_end_date": null,
                    "contract_duration": 0,
                    "contract_duration_period": null,
                    "exit_date": null,
                    "exit_reason": null,
                    "fiscal_type": null,
                    "fiscal_day": "1",
                    "fiscal_month": "1",
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19"
                },
                "staff_custom_data": {
                    "id": null,
                    "allow_printing": null,
                    "reference_id": null,
                    "time": null
                }
            }
        },
        {
            "id": 1,
            "name": "type 1",
            "description": "description",
            "is_active": 1,
            "staff_id": 1,
            "branch_id": 1,
            "created": "2026-06-23 14:27:12",
            "modified": "2026-06-23 14:27:12",
            "branch": {
                "id": 1,
                "name": "Main Branch",
                "status": 1,
                "created": "2025-05-20 06:42:26",
                "modified": "2025-05-20 06:42:26"
            },
            "staff": {
                "id": 1,
                "added_by": 1,
                "role_id": -1,
                "name": "",
                "middle_name": "",
                "last_name": "",
                "photo": null,
                "can_access_system": 1,
                "home_phone": "",
                "business_Phone": null,
                "mobile": "",
                "fax": null,
                "country_code": "EG",
                "address1": "",
                "address2": "",
                "city": "",
                "state": "",
                "postal_code": "",
                "note": null,
                "email_address": "",
                "last_login": "2026-06-28 10:49:50",
                "active": 1,
                "created": "2025-05-19 12:58:18",
                "hourly_rate": null,
                "hourly_rate_currency_code": null,
                "default_store_id": 1,
                "default_treasury_id": 1,
                "maximum_general_discount": 10,
                "language_code": 7,
                "branch_id": 1,
                "full_name": " ",
                "attendance_restriction_id": null,
                "type": "user",
                "default_account_id": null,
                "citizenship_status": "citizen",
                "residence_expiry_date": null,
                "nationality": null,
                "code": "000001",
                "official_id": null,
                "staff_info": {
                    "staff_id": 1,
                    "department_id": null,
                    "employment_level_id": null,
                    "employment_type_id": null,
                    "designation_id": null,
                    "birth_date": null,
                    "gender": null,
                    "personal_email": null,
                    "permanent_address1": null,
                    "permanent_address2": null,
                    "permanent_city": null,
                    "permanent_state": null,
                    "permanent_postal_code": null,
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19",
                    "attendance_shift_id": null,
                    "leave_policy_id": null,
                    "has_secondary_shift": 0,
                    "secondary_shift_id": null,
                    "direct_manager_id": null
                },
                "staff_job": {
                    "staff_id": 1,
                    "join_date": null,
                    "probation_end_date": null,
                    "contract_duration": 0,
                    "contract_duration_period": null,
                    "exit_date": null,
                    "exit_reason": null,
                    "fiscal_type": null,
                    "fiscal_day": "1",
                    "fiscal_month": "1",
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19"
                },
                "staff_custom_data": {
                    "id": null,
                    "allow_printing": null,
                    "reference_id": null,
                    "time": null
                }
            }
        }
    ],
    "first_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_type/list/1?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_type/list/1?page=1",
    "links": [
        {
            "url": null,
            "label": "pagination.previous",
            "page": null,
            "active": false
        },
        {
            "url": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_type/list/1?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": null,
            "label": "pagination.next",
            "page": null,
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_type/list/1",
    "per_page": 20,
    "prev_page_url": null,
    "to": 2,
    "total": 2
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» is_active|integer|true|none||none|
|»» staff_id|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» branch|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»» staff|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» added_by|integer|true|none||none|
|»»» role_id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» middle_name|string|true|none||none|
|»»» last_name|string|true|none||none|
|»»» photo|null|true|none||none|
|»»» can_access_system|integer|true|none||none|
|»»» home_phone|string|true|none||none|
|»»» business_Phone|null|true|none||none|
|»»» mobile|string|true|none||none|
|»»» fax|null|true|none||none|
|»»» country_code|string|true|none||none|
|»»» address1|string|true|none||none|
|»»» address2|string|true|none||none|
|»»» city|string|true|none||none|
|»»» state|string|true|none||none|
|»»» postal_code|string|true|none||none|
|»»» note|null|true|none||none|
|»»» email_address|string|true|none||none|
|»»» last_login|string|true|none||none|
|»»» active|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» hourly_rate|null|true|none||none|
|»»» hourly_rate_currency_code|null|true|none||none|
|»»» default_store_id|integer|true|none||none|
|»»» default_treasury_id|integer|true|none||none|
|»»» maximum_general_discount|integer|true|none||none|
|»»» language_code|integer|true|none||none|
|»»» branch_id|integer|true|none||none|
|»»» full_name|string|true|none||none|
|»»» attendance_restriction_id|null|true|none||none|
|»»» type|string|true|none||none|
|»»» default_account_id|null|true|none||none|
|»»» citizenship_status|string|true|none||none|
|»»» residence_expiry_date|null|true|none||none|
|»»» nationality|null|true|none||none|
|»»» code|string|true|none||none|
|»»» official_id|null|true|none||none|
|»»» staff_info|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» department_id|null|true|none||none|
|»»»» employment_level_id|null|true|none||none|
|»»»» employment_type_id|null|true|none||none|
|»»»» designation_id|null|true|none||none|
|»»»» birth_date|null|true|none||none|
|»»»» gender|null|true|none||none|
|»»»» personal_email|null|true|none||none|
|»»»» permanent_address1|null|true|none||none|
|»»»» permanent_address2|null|true|none||none|
|»»»» permanent_city|null|true|none||none|
|»»»» permanent_state|null|true|none||none|
|»»»» permanent_postal_code|null|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»»» attendance_shift_id|null|true|none||none|
|»»»» leave_policy_id|null|true|none||none|
|»»»» has_secondary_shift|integer|true|none||none|
|»»»» secondary_shift_id|null|true|none||none|
|»»»» direct_manager_id|null|true|none||none|
|»»» staff_job|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» join_date|null|true|none||none|
|»»»» probation_end_date|null|true|none||none|
|»»»» contract_duration|integer|true|none||none|
|»»»» contract_duration_period|null|true|none||none|
|»»»» exit_date|null|true|none||none|
|»»»» exit_reason|null|true|none||none|
|»»»» fiscal_type|null|true|none||none|
|»»»» fiscal_day|string|true|none||none|
|»»»» fiscal_month|string|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»» staff_custom_data|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» allow_printing|null|true|none||none|
|»»»» reference_id|null|true|none||none|
|»»»» time|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Type

GET /asset_type/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 1,
    "name": "type 1",
    "description": "description",
    "is_active": 1,
    "staff_id": 1,
    "branch_id": 1,
    "created": "2026-06-23 14:27:12",
    "modified": "2026-06-23 14:27:12",
    "branch": {
        "id": 1,
        "name": "Main Branch",
        "status": 1,
        "created": "2025-05-20 06:42:26",
        "modified": "2025-05-20 06:42:26"
    },
    "staff": {
        "id": 1,
        "added_by": 1,
        "role_id": -1,
        "name": "",
        "middle_name": "",
        "last_name": "",
        "photo": null,
        "can_access_system": 1,
        "home_phone": "",
        "business_Phone": null,
        "mobile": "",
        "fax": null,
        "country_code": "EG",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "postal_code": "",
        "note": null,
        "email_address": "",
        "password": null,
        "last_login": "2026-06-28 10:49:50",
        "active": 1,
        "created": "2025-05-19 12:58:18",
        "hourly_rate": null,
        "hourly_rate_currency_code": null,
        "default_store_id": 1,
        "default_treasury_id": 1,
        "maximum_general_discount": 10,
        "language_code": 7,
        "branch_id": 1,
        "full_name": " ",
        "attendance_restriction_id": null,
        "type": "user",
        "default_account_id": null,
        "citizenship_status": "citizen",
        "residence_expiry_date": null,
        "nationality": null,
        "code": "000001",
        "official_id": null
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» description|string|true|none||none|
|» is_active|integer|true|none||none|
|» staff_id|integer|true|none||none|
|» branch_id|integer|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» branch|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» staff|object|true|none||none|
|»» id|integer|true|none||none|
|»» added_by|integer|true|none||none|
|»» role_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» middle_name|string|true|none||none|
|»» last_name|string|true|none||none|
|»» photo|null|true|none||none|
|»» can_access_system|integer|true|none||none|
|»» home_phone|string|true|none||none|
|»» business_Phone|null|true|none||none|
|»» mobile|string|true|none||none|
|»» fax|null|true|none||none|
|»» country_code|string|true|none||none|
|»» address1|string|true|none||none|
|»» address2|string|true|none||none|
|»» city|string|true|none||none|
|»» state|string|true|none||none|
|»» postal_code|string|true|none||none|
|»» note|null|true|none||none|
|»» email_address|string|true|none||none|
|»» password|null|true|none||none|
|»» last_login|string|true|none||none|
|»» active|integer|true|none||none|
|»» created|string|true|none||none|
|»» hourly_rate|null|true|none||none|
|»» hourly_rate_currency_code|null|true|none||none|
|»» default_store_id|integer|true|none||none|
|»» default_treasury_id|integer|true|none||none|
|»» maximum_general_discount|integer|true|none||none|
|»» language_code|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» full_name|string|true|none||none|
|»» attendance_restriction_id|null|true|none||none|
|»» type|string|true|none||none|
|»» default_account_id|null|true|none||none|
|»» citizenship_status|string|true|none||none|
|»» residence_expiry_date|null|true|none||none|
|»» nationality|null|true|none||none|
|»» code|string|true|none||none|
|»» official_id|null|true|none||none|

## POST Add New Type

POST /asset_type

> Body Parameters

```json
{
    "name": "type 1",
    "branch_id": 1,
    "is_active": 1,
    "staff_id": 1,
    "description": "description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» is_active|body|integer| no |none|
|» staff_id|body|integer| no |[`GET /staff`](https://docs.daftara.dev/15115375e0)|
|» description|body|string| no |none|

#### Enum

|Name|Value|
|---|---|
|» is_active|0|
|» is_active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة نوع الأصل بنجاح",
    "id": 1
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

## PUT Edit Type

PUT /asset_type/id

> Body Parameters

```json
{
    "id": 2,
    "name": "type 2 edited",
    "branch_id": 1,
    "is_active": 1,
    "staff_id": 1,
    "description": "description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» is_active|body|integer| no |none|
|» staff_id|body|integer| no |[`GET /staff`](https://docs.daftara.dev/15115375e0)|
|» description|body|string| no |none|

#### Enum

|Name|Value|
|---|---|
|» is_active|0|
|» is_active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث نوع الأصل بنجاح",
    "id": 2
}
```

> 400 Response

```json
{
    "message": "Record not found"
}
```

> 422 Response

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

# Endpoints v2/Employee Asset/Asset Location

## GET Get All Locations

GET /asset_location/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "location 1",
            "is_active": 1,
            "description": null,
            "staff_id": 1,
            "created": "0000-00-00 00:00:00",
            "modified": "0000-00-00 00:00:00",
            "branch_id": 1,
            "asset_location_branch": {
                "id": 1,
                "name": "Main Branch",
                "status": 1,
                "created": "2025-05-20 06:42:26",
                "modified": "2025-05-20 06:42:26"
            },
            "asset_location_staff": {
                "id": 1,
                "added_by": 1,
                "role_id": -1,
                "name": "name",
                "middle_name": "",
                "last_name": "name",
                "photo": null,
                "can_access_system": 1,
                "home_phone": "",
                "business_Phone": null,
                "mobile": "",
                "fax": null,
                "country_code": "EG",
                "address1": "",
                "address2": "",
                "city": "",
                "state": "",
                "postal_code": "",
                "note": null,
                "email_address": "",
                "last_login": "2026-06-28 10:49:50",
                "active": 1,
                "created": "2025-05-19 12:58:18",
                "hourly_rate": null,
                "hourly_rate_currency_code": null,
                "default_store_id": 1,
                "default_treasury_id": 1,
                "maximum_general_discount": 10,
                "language_code": 7,
                "branch_id": 1,
                "full_name": "name name",
                "attendance_restriction_id": null,
                "type": "user",
                "default_account_id": null,
                "citizenship_status": "citizen",
                "residence_expiry_date": null,
                "nationality": null,
                "code": "000001",
                "official_id": null,
                "staff_info": {
                    "staff_id": 1,
                    "department_id": null,
                    "employment_level_id": null,
                    "employment_type_id": null,
                    "designation_id": null,
                    "birth_date": null,
                    "gender": null,
                    "personal_email": null,
                    "permanent_address1": null,
                    "permanent_address2": null,
                    "permanent_city": null,
                    "permanent_state": null,
                    "permanent_postal_code": null,
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19",
                    "attendance_shift_id": null,
                    "leave_policy_id": null,
                    "has_secondary_shift": 0,
                    "secondary_shift_id": null,
                    "direct_manager_id": null
                },
                "staff_job": {
                    "staff_id": 1,
                    "join_date": null,
                    "probation_end_date": null,
                    "contract_duration": 0,
                    "contract_duration_period": null,
                    "exit_date": null,
                    "exit_reason": null,
                    "fiscal_type": null,
                    "fiscal_day": "1",
                    "fiscal_month": "1",
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19"
                },
                "staff_custom_data": {
                    "id": null,
                    "allow_printing": null,
                    "reference_id": null,
                    "time": null
                }
            }
        }
    ],
    "first_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_location/list/1?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_location/list/1?page=1",
    "links": [
        {
            "url": null,
            "label": "pagination.previous",
            "page": null,
            "active": false
        },
        {
            "url": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_location/list/1?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": null,
            "label": "pagination.next",
            "page": null,
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://<<subdomain>>.daftra.com/v2/api/entity/asset_location/list/1",
    "per_page": 20,
    "prev_page_url": null,
    "to": 2,
    "total": 2
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» name|string|false|none||none|
|»» is_active|integer|false|none||none|
|»» description|null|false|none||none|
|»» staff_id|integer|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|»» branch_id|integer|false|none||none|
|»» asset_location_branch|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»» asset_location_staff|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» added_by|integer|true|none||none|
|»»» role_id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» middle_name|string|true|none||none|
|»»» last_name|string|true|none||none|
|»»» photo|null|true|none||none|
|»»» can_access_system|integer|true|none||none|
|»»» home_phone|string|true|none||none|
|»»» business_Phone|null|true|none||none|
|»»» mobile|string|true|none||none|
|»»» fax|null|true|none||none|
|»»» country_code|string|true|none||none|
|»»» address1|string|true|none||none|
|»»» address2|string|true|none||none|
|»»» city|string|true|none||none|
|»»» state|string|true|none||none|
|»»» postal_code|string|true|none||none|
|»»» note|null|true|none||none|
|»»» email_address|string|true|none||none|
|»»» last_login|string|true|none||none|
|»»» active|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» hourly_rate|null|true|none||none|
|»»» hourly_rate_currency_code|null|true|none||none|
|»»» default_store_id|integer|true|none||none|
|»»» default_treasury_id|integer|true|none||none|
|»»» maximum_general_discount|integer|true|none||none|
|»»» language_code|integer|true|none||none|
|»»» branch_id|integer|true|none||none|
|»»» full_name|string|true|none||none|
|»»» attendance_restriction_id|null|true|none||none|
|»»» type|string|true|none||none|
|»»» default_account_id|null|true|none||none|
|»»» citizenship_status|string|true|none||none|
|»»» residence_expiry_date|null|true|none||none|
|»»» nationality|null|true|none||none|
|»»» code|string|true|none||none|
|»»» official_id|null|true|none||none|
|»»» staff_info|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» department_id|null|true|none||none|
|»»»» employment_level_id|null|true|none||none|
|»»»» employment_type_id|null|true|none||none|
|»»»» designation_id|null|true|none||none|
|»»»» birth_date|null|true|none||none|
|»»»» gender|null|true|none||none|
|»»»» personal_email|null|true|none||none|
|»»»» permanent_address1|null|true|none||none|
|»»»» permanent_address2|null|true|none||none|
|»»»» permanent_city|null|true|none||none|
|»»»» permanent_state|null|true|none||none|
|»»»» permanent_postal_code|null|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»»» attendance_shift_id|null|true|none||none|
|»»»» leave_policy_id|null|true|none||none|
|»»»» has_secondary_shift|integer|true|none||none|
|»»»» secondary_shift_id|null|true|none||none|
|»»»» direct_manager_id|null|true|none||none|
|»»» staff_job|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» join_date|null|true|none||none|
|»»»» probation_end_date|null|true|none||none|
|»»»» contract_duration|integer|true|none||none|
|»»»» contract_duration_period|null|true|none||none|
|»»»» exit_date|null|true|none||none|
|»»»» exit_reason|null|true|none||none|
|»»»» fiscal_type|null|true|none||none|
|»»»» fiscal_day|string|true|none||none|
|»»»» fiscal_month|string|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»» staff_custom_data|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» allow_printing|null|true|none||none|
|»»»» reference_id|null|true|none||none|
|»»»» time|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Location

GET /asset_location/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 1,
    "name": "location 1",
    "is_active": 1,
    "description": null,
    "staff_id": 1,
    "created": "0000-00-00 00:00:00",
    "modified": "0000-00-00 00:00:00",
    "branch_id": 1,
    "asset_location_branch": {
        "id": 1,
        "name": "Main Branch",
        "status": 1,
        "created": "2025-05-20 06:42:26",
        "modified": "2025-05-20 06:42:26"
    },
    "asset_location_staff": {
        "id": 1,
        "added_by": 1,
        "role_id": -1,
        "name": "name",
        "middle_name": "",
        "last_name": "name",
        "photo": null,
        "can_access_system": 1,
        "home_phone": "",
        "business_Phone": null,
        "mobile": "",
        "fax": null,
        "country_code": "EG",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "postal_code": "",
        "note": null,
        "email_address": "",
        "password": null,
        "last_login": "2026-06-28 10:49:50",
        "active": 1,
        "created": "2025-05-19 12:58:18",
        "hourly_rate": null,
        "hourly_rate_currency_code": null,
        "default_store_id": 1,
        "default_treasury_id": 1,
        "maximum_general_discount": 10,
        "language_code": 7,
        "branch_id": 1,
        "full_name": "name name",
        "attendance_restriction_id": null,
        "type": "user",
        "default_account_id": null,
        "citizenship_status": "citizen",
        "residence_expiry_date": null,
        "nationality": null,
        "code": "000001",
        "official_id": null
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» is_active|integer|true|none||none|
|» description|null|true|none||none|
|» staff_id|integer|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» branch_id|integer|true|none||none|
|» asset_location_branch|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» asset_location_staff|object|true|none||none|
|»» id|integer|true|none||none|
|»» added_by|integer|true|none||none|
|»» role_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» middle_name|string|true|none||none|
|»» last_name|string|true|none||none|
|»» photo|null|true|none||none|
|»» can_access_system|integer|true|none||none|
|»» home_phone|string|true|none||none|
|»» business_Phone|null|true|none||none|
|»» mobile|string|true|none||none|
|»» fax|null|true|none||none|
|»» country_code|string|true|none||none|
|»» address1|string|true|none||none|
|»» address2|string|true|none||none|
|»» city|string|true|none||none|
|»» state|string|true|none||none|
|»» postal_code|string|true|none||none|
|»» note|null|true|none||none|
|»» email_address|string|true|none||none|
|»» password|null|true|none||none|
|»» last_login|string|true|none||none|
|»» active|integer|true|none||none|
|»» created|string|true|none||none|
|»» hourly_rate|null|true|none||none|
|»» hourly_rate_currency_code|null|true|none||none|
|»» default_store_id|integer|true|none||none|
|»» default_treasury_id|integer|true|none||none|
|»» maximum_general_discount|integer|true|none||none|
|»» language_code|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» full_name|string|true|none||none|
|»» attendance_restriction_id|null|true|none||none|
|»» type|string|true|none||none|
|»» default_account_id|null|true|none||none|
|»» citizenship_status|string|true|none||none|
|»» residence_expiry_date|null|true|none||none|
|»» nationality|null|true|none||none|
|»» code|string|true|none||none|
|»» official_id|null|true|none||none|

## POST Add New Location

POST /asset_location

> Body Parameters

```json
{
    "name": "location 3",
    "branch_id": 1,
    "is_active": 1,
    "staff_id": 1,
    "description": "description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» is_active|body|integer| no |none|
|» staff_id|body|integer| no |[`GET /staff`](https://docs.daftara.dev/15115375e0)|
|» description|body|string| no |none|

#### Enum

|Name|Value|
|---|---|
|» is_active|0|
|» is_active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة المواقع الفعلية بنجاح",
    "id": 3
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

## PUT Edit Location

PUT /asset_location/id

> Body Parameters

```json
{
    "id": 3,
    "name": "location 3 edited",
    "branch_id": 1,
    "is_active": 1,
    "staff_id": 1,
    "description": "description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» is_active|body|integer| no |none|
|» staff_id|body|integer| no |[`GET /staff`](https://docs.daftara.dev/15115375e0)|
|» description|body|string| no |none|

#### Enum

|Name|Value|
|---|---|
|» is_active|0|
|» is_active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث المواقع الفعلية بنجاح",
    "id": 3
}
```

> 400 Response

```json
{
    "message": "Record not found"
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

# Endpoints v2/Employee Asset/Asset Storage

## GET Get All Storages

GET /storage/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "مخزن رئيسي",
            "is_active": 1,
            "description": null,
            "staff_id": 1,
            "created": "2026-06-23 14:40:49",
            "modified": "2026-06-23 14:40:49",
            "branch_id": 1,
            "storage_branch": {
                "id": 1,
                "name": "Main Branch",
                "status": 1,
                "created": "2025-05-20 06:42:26",
                "modified": "2025-05-20 06:42:26"
            },
            "storage_staff": {
                "id": 1,
                "added_by": 1,
                "role_id": -1,
                "name": "name",
                "middle_name": "",
                "last_name": "",
                "photo": null,
                "can_access_system": 1,
                "home_phone": "",
                "business_Phone": null,
                "mobile": "",
                "fax": null,
                "country_code": "EG",
                "address1": "",
                "address2": "",
                "city": "",
                "state": "",
                "postal_code": "",
                "note": null,
                "email_address": "",
                "last_login": "2026-06-28 10:49:50",
                "active": 1,
                "created": "2025-05-19 12:58:18",
                "hourly_rate": null,
                "hourly_rate_currency_code": null,
                "default_store_id": 1,
                "default_treasury_id": 1,
                "maximum_general_discount": 10,
                "language_code": 7,
                "branch_id": 1,
                "full_name": "name ",
                "attendance_restriction_id": null,
                "type": "user",
                "default_account_id": null,
                "citizenship_status": "citizen",
                "residence_expiry_date": null,
                "nationality": null,
                "code": "000001",
                "official_id": null,
                "staff_info": {
                    "staff_id": 1,
                    "department_id": null,
                    "employment_level_id": null,
                    "employment_type_id": null,
                    "designation_id": null,
                    "birth_date": null,
                    "gender": null,
                    "personal_email": null,
                    "permanent_address1": null,
                    "permanent_address2": null,
                    "permanent_city": null,
                    "permanent_state": null,
                    "permanent_postal_code": null,
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19",
                    "attendance_shift_id": null,
                    "leave_policy_id": null,
                    "has_secondary_shift": 0,
                    "secondary_shift_id": null,
                    "direct_manager_id": null
                },
                "staff_job": {
                    "staff_id": 1,
                    "join_date": null,
                    "probation_end_date": null,
                    "contract_duration": 0,
                    "contract_duration_period": null,
                    "exit_date": null,
                    "exit_reason": null,
                    "fiscal_type": null,
                    "fiscal_day": "1",
                    "fiscal_month": "1",
                    "created": "2025-05-26 09:05:20",
                    "modified": "2025-05-28 15:44:19"
                },
                "staff_custom_data": {
                    "id": null,
                    "allow_printing": null,
                    "reference_id": null,
                    "time": null
                }
            }
        }
    ],
    "first_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/storage/list/1?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/storage/list/1?page=1",
    "links": [
        {
            "url": null,
            "label": "pagination.previous",
            "page": null,
            "active": false
        },
        {
            "url": "https://<<subdomain>>.daftra.com/v2/api/entity/storage/list/1?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": null,
            "label": "pagination.next",
            "page": null,
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://<<subdomain>>.daftra.com/v2/api/entity/storage/list/1",
    "per_page": 20,
    "prev_page_url": null,
    "to": 2,
    "total": 2
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» name|string|false|none||none|
|»» is_active|integer|false|none||none|
|»» description|null|false|none||none|
|»» staff_id|integer|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|»» branch_id|integer|false|none||none|
|»» storage_branch|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» status|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» modified|string|true|none||none|
|»» storage_staff|object|false|none||none|
|»»» id|integer|true|none||none|
|»»» added_by|integer|true|none||none|
|»»» role_id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» middle_name|string|true|none||none|
|»»» last_name|string|true|none||none|
|»»» photo|null|true|none||none|
|»»» can_access_system|integer|true|none||none|
|»»» home_phone|string|true|none||none|
|»»» business_Phone|null|true|none||none|
|»»» mobile|string|true|none||none|
|»»» fax|null|true|none||none|
|»»» country_code|string|true|none||none|
|»»» address1|string|true|none||none|
|»»» address2|string|true|none||none|
|»»» city|string|true|none||none|
|»»» state|string|true|none||none|
|»»» postal_code|string|true|none||none|
|»»» note|null|true|none||none|
|»»» email_address|string|true|none||none|
|»»» last_login|string|true|none||none|
|»»» active|integer|true|none||none|
|»»» created|string|true|none||none|
|»»» hourly_rate|null|true|none||none|
|»»» hourly_rate_currency_code|null|true|none||none|
|»»» default_store_id|integer|true|none||none|
|»»» default_treasury_id|integer|true|none||none|
|»»» maximum_general_discount|integer|true|none||none|
|»»» language_code|integer|true|none||none|
|»»» branch_id|integer|true|none||none|
|»»» full_name|string|true|none||none|
|»»» attendance_restriction_id|null|true|none||none|
|»»» type|string|true|none||none|
|»»» default_account_id|null|true|none||none|
|»»» citizenship_status|string|true|none||none|
|»»» residence_expiry_date|null|true|none||none|
|»»» nationality|null|true|none||none|
|»»» code|string|true|none||none|
|»»» official_id|null|true|none||none|
|»»» staff_info|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» department_id|null|true|none||none|
|»»»» employment_level_id|null|true|none||none|
|»»»» employment_type_id|null|true|none||none|
|»»»» designation_id|null|true|none||none|
|»»»» birth_date|null|true|none||none|
|»»»» gender|null|true|none||none|
|»»»» personal_email|null|true|none||none|
|»»»» permanent_address1|null|true|none||none|
|»»»» permanent_address2|null|true|none||none|
|»»»» permanent_city|null|true|none||none|
|»»»» permanent_state|null|true|none||none|
|»»»» permanent_postal_code|null|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»»» attendance_shift_id|null|true|none||none|
|»»»» leave_policy_id|null|true|none||none|
|»»»» has_secondary_shift|integer|true|none||none|
|»»»» secondary_shift_id|null|true|none||none|
|»»»» direct_manager_id|null|true|none||none|
|»»» staff_job|object|true|none||none|
|»»»» staff_id|integer|true|none||none|
|»»»» join_date|null|true|none||none|
|»»»» probation_end_date|null|true|none||none|
|»»»» contract_duration|integer|true|none||none|
|»»»» contract_duration_period|null|true|none||none|
|»»»» exit_date|null|true|none||none|
|»»»» exit_reason|null|true|none||none|
|»»»» fiscal_type|null|true|none||none|
|»»»» fiscal_day|string|true|none||none|
|»»»» fiscal_month|string|true|none||none|
|»»»» created|string|true|none||none|
|»»»» modified|string|true|none||none|
|»»» staff_custom_data|object|true|none||none|
|»»»» id|null|true|none||none|
|»»»» allow_printing|null|true|none||none|
|»»»» reference_id|null|true|none||none|
|»»»» time|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Storage

GET /storage/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 1,
    "name": "مخزن رئيسي",
    "is_active": 1,
    "description": null,
    "staff_id": 1,
    "created": "2026-06-23 14:40:49",
    "modified": "2026-06-23 14:40:49",
    "branch_id": 1,
    "storage_branch": {
        "id": 1,
        "name": "Main Branch",
        "status": 1,
        "created": "2025-05-20 06:42:26",
        "modified": "2025-05-20 06:42:26"
    },
    "storage_staff": {
        "id": 1,
        "added_by": 1,
        "role_id": -1,
        "name": "name",
        "middle_name": "",
        "last_name": "",
        "photo": null,
        "can_access_system": 1,
        "home_phone": "",
        "business_Phone": null,
        "mobile": "",
        "fax": null,
        "country_code": "EG",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "postal_code": "",
        "note": null,
        "email_address": "",
        "password": null,
        "last_login": "2026-06-28 10:49:50",
        "active": 1,
        "created": "2025-05-19 12:58:18",
        "hourly_rate": null,
        "hourly_rate_currency_code": null,
        "default_store_id": 1,
        "default_treasury_id": 1,
        "maximum_general_discount": 10,
        "language_code": 7,
        "branch_id": 1,
        "full_name": "name ",
        "attendance_restriction_id": null,
        "type": "user",
        "default_account_id": null,
        "citizenship_status": "citizen",
        "residence_expiry_date": null,
        "nationality": null,
        "code": "000001",
        "official_id": null
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» is_active|integer|true|none||none|
|» description|null|true|none||none|
|» staff_id|integer|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» branch_id|integer|true|none||none|
|» storage_branch|object|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» status|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» storage_staff|object|true|none||none|
|»» id|integer|true|none||none|
|»» added_by|integer|true|none||none|
|»» role_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» middle_name|string|true|none||none|
|»» last_name|string|true|none||none|
|»» photo|null|true|none||none|
|»» can_access_system|integer|true|none||none|
|»» home_phone|string|true|none||none|
|»» business_Phone|null|true|none||none|
|»» mobile|string|true|none||none|
|»» fax|null|true|none||none|
|»» country_code|string|true|none||none|
|»» address1|string|true|none||none|
|»» address2|string|true|none||none|
|»» city|string|true|none||none|
|»» state|string|true|none||none|
|»» postal_code|string|true|none||none|
|»» note|null|true|none||none|
|»» email_address|string|true|none||none|
|»» password|null|true|none||none|
|»» last_login|string|true|none||none|
|»» active|integer|true|none||none|
|»» created|string|true|none||none|
|»» hourly_rate|null|true|none||none|
|»» hourly_rate_currency_code|null|true|none||none|
|»» default_store_id|integer|true|none||none|
|»» default_treasury_id|integer|true|none||none|
|»» maximum_general_discount|integer|true|none||none|
|»» language_code|integer|true|none||none|
|»» branch_id|integer|true|none||none|
|»» full_name|string|true|none||none|
|»» attendance_restriction_id|null|true|none||none|
|»» type|string|true|none||none|
|»» default_account_id|null|true|none||none|
|»» citizenship_status|string|true|none||none|
|»» residence_expiry_date|null|true|none||none|
|»» nationality|null|true|none||none|
|»» code|string|true|none||none|
|»» official_id|null|true|none||none|

## POST Add New Storage

POST /storage

> Body Parameters

```json
{
    "name": "Storage 3",
    "branch_id": 1,
    "is_active": 1,
    "staff_id": 1,
    "description": "description"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» is_active|body|integer| no |none|
|» staff_id|body|integer| no |[`GET /staff`](https://docs.daftara.dev/15115375e0)|
|» description|body|string| no |none|

#### Enum

|Name|Value|
|---|---|
|» is_active|0|
|» is_active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة المخازن بنجاح",
    "id": 3
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

## PUT Edit Storage

PUT /storage/id

> Body Parameters

```json
{
    "id": 2,
    "name": "Storage API edited 2",
    "branch_id": 1,
    "is_active": 1,
    "staff_id": 1,
    "description": "loc2oo"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» is_active|body|integer| no |none|
|» staff_id|body|integer| no |[`GET /staff`](https://docs.daftara.dev/15115375e0)|
|» description|body|string| no |none|

#### Enum

|Name|Value|
|---|---|
|» is_active|0|
|» is_active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث المخازن بنجاح",
    "id": 3
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

# Endpoints v2/Employee Asset/Asset

## GET Get All Assets

GET /employee_asset/list/2

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "payload": {
        "data": [
            {
                "id": 12,
                "code": "16",
                "name": "Dell Printer 29",
                "barcode": null,
                "serial_number": null,
                "used_by": "not_assigned",
                "employee": null,
                "storage": null,
                "photo": {
                    "id": null,
                    "name": null,
                    "size": null,
                    "mime_type": null,
                    "path": null
                },
                "status": "not_assigned",
                "can_update": true,
                "can_delete": true,
                "asset_type": {
                    "id": 1,
                    "name": "type 1"
                },
                "has_linked_asset": false,
                "location": {
                    "id": 1,
                    "name": "loc 1"
                },
                "assigned_date": null
            }
        ],
        "pagination": {
            "total": 12,
            "current_page": 1,
            "per_page": 20,
            "has_more_pages": false
        },
        "permissions": {
            "can_add": true,
            "can_link": true,
            "can_delete_all": true
        }
    },
    "version": "v2",
    "message": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» payload|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|false|none||none|
|»»» code|string|false|none||none|
|»»» name|string|false|none||none|
|»»» barcode|null|false|none||none|
|»»» serial_number|null|false|none||none|
|»»» used_by|string|false|none||none|
|»»» employee|null|false|none||none|
|»»» storage|null|false|none||none|
|»»» photo|object|false|none||none|
|»»»» id|null|true|none||none|
|»»»» name|null|true|none||none|
|»»»» size|null|true|none||none|
|»»»» mime_type|null|true|none||none|
|»»»» path|null|true|none||none|
|»»» status|string|false|none||none|
|»»» can_update|boolean|false|none||none|
|»»» can_delete|boolean|false|none||none|
|»»» asset_type|object|false|none||none|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»»» has_linked_asset|boolean|false|none||none|
|»»» location|object|false|none||none|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»»» assigned_date|null|false|none||none|
|»» pagination|object|true|none||none|
|»»» total|integer|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» has_more_pages|boolean|true|none||none|
|»» permissions|object|true|none||none|
|»»» can_add|boolean|true|none||none|
|»»» can_link|boolean|true|none||none|
|»»» can_delete_all|boolean|true|none||none|
|» version|string|true|none||none|
|» message|null|true|none||none|

## GET Get Single Asset

GET /employee_asset/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "payload": {
        "data": {
            "id": 1,
            "code": "5",
            "name": "API Asset",
            "barcode": "87333333339999",
            "serial_number": "mj98766",
            "used_by": "not_assigned",
            "employee": null,
            "storage": null,
            "photo": null,
            "status": "not_assigned",
            "can_update": true,
            "can_delete": true,
            "asset_type": null,
            "has_linked_asset": false,
            "location": {
                "id": 1,
                "name": "loc 1"
            },
            "assigned_date": null,
            "warranty_expiry_date": "2036-06-04",
            "expected_return_date": "2030-06-24",
            "description": "description",
            "technical_specifications": "technical",
            "attachments": [],
            "asset_unit": null,
            "can_add_notes": true,
            "has_notes": false,
            "can_add_document": true,
            "can_view_documents": true,
            "has_chain_of_custody": false
        }
    },
    "version": "v2",
    "message": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» payload|object|true|none||none|
|»» data|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» code|string|true|none||none|
|»»» name|string|true|none||none|
|»»» barcode|string|true|none||none|
|»»» serial_number|string|true|none||none|
|»»» used_by|string|true|none||none|
|»»» employee|null|true|none||none|
|»»» storage|null|true|none||none|
|»»» photo|null|true|none||none|
|»»» status|string|true|none||none|
|»»» can_update|boolean|true|none||none|
|»»» can_delete|boolean|true|none||none|
|»»» asset_type|null|true|none||none|
|»»» has_linked_asset|boolean|true|none||none|
|»»» location|object|true|none||none|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»»» assigned_date|null|true|none||none|
|»»» warranty_expiry_date|string|true|none||none|
|»»» expected_return_date|string|true|none||none|
|»»» description|string|true|none||none|
|»»» technical_specifications|string|true|none||none|
|»»» attachments|[string]|true|none||none|
|»»» asset_unit|null|true|none||none|
|»»» can_add_notes|boolean|true|none||none|
|»»» has_notes|boolean|true|none||none|
|»»» can_add_document|boolean|true|none||none|
|»»» can_view_documents|boolean|true|none||none|
|»»» has_chain_of_custody|boolean|true|none||none|
|» version|string|true|none||none|
|» message|null|true|none||none|

## POST Add New Asset

POST /employee_asset

> Body Parameters

```json
{
    "id": "",
    "name": "Dell Printer 2",
    "code": "i987ysklnjjg",
    "asset_type_id": 1,
    "warranty_expiry_date": "2026-12-31",
    "serial_number": "PR189ikj2uu886",
    "barcode": "BA56l;lkljnkjbh78",
    "used_by": "storage",
    "storage_id": 1,
    "location_id": 1,
    "assigned_date": "2026-06-23",
    "expected_return_date": "",
    "photo": "",
    "description": "Printer for dev team",
    "technical_specifications": "",
    "attachments": ""
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|string¦null| yes |none|
|» name|body|string| yes |none|
|» code|body|string¦null| no |none|
|» asset_type_id|body|integer| no |[`GET /asset_type`](https://docs.daftara.dev/38573106e0)|
|» warranty_expiry_date|body|string| no |none|
|» serial_number|body|string| no |none|
|» barcode|body|string| no |none|
|» used_by|body|string| yes |none|
|» storage_id|body|integer| yes |Required if 'used_by' value is 'storage'.|
|» employee_id|body|integer| yes |Required if 'used_by' value is 'employee'.|
|» location_id|body|integer| yes |[`GET /asset_location`](https://docs.daftara.dev/38573109e0)|
|» assigned_date|body|string| no |none|
|» expected_return_date|body|string| no |none|
|» photo|body|string| no |none|
|» description|body|string| no |none|
|» technical_specifications|body|string| no |none|
|» attachments|body|string| no |none|

#### Description

**» storage_id**: Required if 'used_by' value is 'storage'.
[`GET /asset_storage`](https://docs.daftara.dev/38573113e0)

**» employee_id**: Required if 'used_by' value is 'employee'.
[`GET /staff`](https://docs.daftara.dev/15115376e0)

#### Enum

|Name|Value|
|---|---|
|» used_by|not_assigned|
|» used_by|employee|
|» used_by|storage|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة أصل الموظف بنجاح",
    "id": 8
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "serial_number": [
            "هذا الرقم التسلسلي مستخدم مسبقًا. يرجى إدخال رقم تسلسلي مختلف."
        ],
        "barcode": [
            "هذا الباركود مستخدم مسبقًا. يرجى إدخال باركود مختلف."
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "location_id": [
            "الحقل المرتبط به غير موجود"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|
|»» used_by|[string]|true|none||none|
|»» location_id|[string]|true|none||none|

## PUT Edit Asset

PUT /employee_asset/id

> Body Parameters

```json
{
    "id": "7",
    "name": "Dell Printer 2 edited",
    "code": "i987ysklnjjg",
    "asset_type_id": 1,
    "warranty_expiry_date": "2026-12-31",
    "serial_number": "PR189ikj2uu886",
    "barcode": "BA56l;lkljnkjbh78",
    "used_by": "storage",
    "storage_id": 1,
    "location_id": 1,
    "assigned_date": "2026-06-23",
    "expected_return_date": "",
    "photo": "",
    "description": "Printer for dev team",
    "technical_specifications": "",
    "attachments": ""
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|string| yes |none|
|» name|body|string| yes |none|
|» code|body|string| no |none|
|» asset_type_id|body|integer| no |[`GET /asset_type`](https://docs.daftara.dev/38573106e0)|
|» warranty_expiry_date|body|string| no |none|
|» serial_number|body|string| no |none|
|» barcode|body|string| no |none|
|» used_by|body|string| yes |none|
|» storage_id|body|integer| yes |Required if 'used_by' value is 'storage'.|
|» employee_id|body|integer| yes |Required if 'used_by' value is 'employee'.|
|» location_id|body|integer| yes |[`GET /asset_location`](https://docs.daftara.dev/38573109e0)|
|» assigned_date|body|string| no |none|
|» expected_return_date|body|string| no |none|
|» photo|body|string| no |none|
|» description|body|string| no |none|
|» technical_specifications|body|string| no |none|
|» attachments|body|string| no |none|

#### Description

**» storage_id**: Required if 'used_by' value is 'storage'.
[`GET /asset_storage`](https://docs.daftara.dev/38573113e0)

**» employee_id**: Required if 'used_by' value is 'employee'.
[`GET /staff`](https://docs.daftara.dev/15115376e0)

#### Enum

|Name|Value|
|---|---|
|» used_by|not_assigned|
|» used_by|storage|
|» used_by|employee|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث أصل الموظف بنجاح",
    "id": 7
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "serial_number": [
            "هذا الرقم التسلسلي مستخدم مسبقًا. يرجى إدخال رقم تسلسلي مختلف."
        ],
        "barcode": [
            "هذا الباركود مستخدم مسبقًا. يرجى إدخال باركود مختلف."
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "location_id": [
            "الحقل المرتبط به غير موجود"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

# Endpoints v2/Organizational Structure/Designation

## GET Get All Designations

GET /designation/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 2,
            "name": "hr",
            "description": null,
            "active": 1,
            "role_id": 0,
            "department_id": null,
            "employment_type_id": null,
            "employment_level_id": null,
            "salary_structure_id": null,
            "payroll_frequency": null,
            "currency_code": null,
            "created": "2025-05-26 08:52:06",
            "modified": "2025-05-26 08:52:06"
        },
        {
            "id": 1,
            "name": "محاسب",
            "description": null,
            "active": 1,
            "role_id": 0,
            "department_id": 2,
            "employment_type_id": null,
            "employment_level_id": null,
            "salary_structure_id": null,
            "payroll_frequency": null,
            "currency_code": null,
            "created": "2025-05-26 08:51:30",
            "modified": "2025-05-26 08:51:30"
        }
    ],
    "first_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/designation/list/1?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/designation/list/1?page=1",
    "links": [
        {
            "url": null,
            "label": "pagination.previous",
            "page": null,
            "active": false
        },
        {
            "url": "https://<<subdomain>>.daftra.com/v2/api/entity/designation/list/1?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": null,
            "label": "pagination.next",
            "page": null,
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://<<subdomain>>.daftra.com/v2/api/entity/designation/list/1",
    "per_page": 20,
    "prev_page_url": null,
    "to": 3,
    "total": 3
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|null|true|none||none|
|»» active|integer|true|none||none|
|»» role_id|integer|true|none||none|
|»» department_id|integer¦null|true|none||none|
|»» employment_type_id|null|true|none||none|
|»» employment_level_id|null|true|none||none|
|»» salary_structure_id|null|true|none||none|
|»» payroll_frequency|null|true|none||none|
|»» currency_code|null|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Designation

GET /designation/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 1,
    "name": "محاسب",
    "description": null,
    "active": 1,
    "role_id": 0,
    "department_id": 2,
    "employment_type_id": null,
    "employment_level_id": null,
    "salary_structure_id": null,
    "payroll_frequency": null,
    "currency_code": null,
    "created": "2025-05-26 08:51:30",
    "modified": "2025-05-26 08:51:30"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» description|null|true|none||none|
|» active|integer|true|none||none|
|» role_id|integer|true|none||none|
|» department_id|integer|true|none||none|
|» employment_type_id|null|true|none||none|
|» employment_level_id|null|true|none||none|
|» salary_structure_id|null|true|none||none|
|» payroll_frequency|null|true|none||none|
|» currency_code|null|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|

## POST Add New Designation

POST /designation

> Body Parameters

```json
{
    "name": "Sales agent",
    "branch_id": 1,
    "active": 1,
    "description": "description",
    "department_id": 2
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» active|body|integer| no |none|
|» description|body|string| no |none|
|» department_id|body|integer| no |[`GET /department`](https://docs.daftara.dev/38770115e0)|

#### Enum

|Name|Value|
|---|---|
|» active|0|
|» active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة المسمي الوظيفي بنجاح",
    "id": 4
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

## PUT Edit Designation

PUT /designation/id

> Body Parameters

```json
{
    "id": 3,
    "name": "API desigantion edited",
    "branch_id": 1,
    "active": 1,
    "description": "description",
    "department_id": 2
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» active|body|integer| no |none|
|» description|body|string| no |none|
|» department_id|body|integer| no |[`GET /department`](https://docs.daftara.dev/38770115e0)|

#### Enum

|Name|Value|
|---|---|
|» active|0|
|» active|1|

> Response Examples

> 200 Response

```json
{
    "id": 4,
    "name": "Sales agent",
    "branch_id": 1,
    "active": 1,
    "description": "description",
    "department_id": 2
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» branch_id|integer|false|none||[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» active|integer|false|none||none|
|» description|string|false|none||none|
|» department_id|integer|false|none||none|

#### Enum

|Name|Value|
|---|---|
|active|0|
|active|1|

# Endpoints v2/Organizational Structure/Department

## GET Get All Departments

GET /department/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 3,
            "name": "المبيعات",
            "description": null,
            "active": 1,
            "created": "2025-05-26 08:52:25",
            "modified": "2026-06-19 01:55:28",
            "abbr": "sa",
            "department_managers": [
                {
                    "id": 1,
                    "manager_id": 4,
                    "department_id": 3,
                    "manager_department": {
                        "id": 4,
                        "added_by": 1,
                        "role_id": 2,
                        "code": "14",
                        "type": "user",
                        "name": "Jim",
                        "middle_name": null,
                        "last_name": "Ibrahim",
                        "full_name": "Jim Ibrahim",
                        "photo": null,
                        "can_access_system": 1,
                        "home_phone": null,
                        "business_Phone": null,
                        "mobile": null,
                        "fax": null,
                        "country_code": "EG",
                        "address1": null,
                        "address2": null,
                        "city": null,
                        "state": null,
                        "postal_code": null,
                        "note": null,
                        "email_address": "",
                        "password": null,
                        "last_login": "2026-06-24 12:10:48",
                        "active": 1,
                        "deleted": null,
                        "created": "2026-06-19 01:54:42",
                        "deleted_at": null,
                        "follow_up_status": null,
                        "hourly_rate": null,
                        "hourly_rate_currency_code": null,
                        "default_store_id": null,
                        "default_treasury_id": null,
                        "maximum_general_discount": null,
                        "language_code": 7,
                        "branch_id": 1,
                        "default_account_id": null,
                        "attendance_restriction_id": null,
                        "auth_id": 6,
                        "citizenship_status": null,
                        "nationality": null,
                        "official_id": null,
                        "residence_expiry_date": null,
                        "modified": "2026-06-24 12:10:48",
                        "smtp_email_address_id": null,
                        "official_id_unique_check": null
                    }
                },
                {
                    "id": 2,
                    "manager_id": 1,
                    "department_id": 3,
                    "manager_department": {
                        "id": 1,
                        "added_by": 1,
                        "role_id": -1,
                        "code": "000001",
                        "type": "user",
                        "name": "name",
                        "middle_name": "",
                        "last_name": "name",
                        "full_name": "name name",
                        "photo": null,
                        "can_access_system": 1,
                        "home_phone": "",
                        "business_Phone": null,
                        "mobile": "",
                        "fax": null,
                        "country_code": "EG",
                        "address1": "",
                        "address2": "",
                        "city": "",
                        "state": "",
                        "postal_code": "",
                        "note": null,
                        "email_address": "",
                        "last_login": "2026-06-28 10:49:50",
                        "active": 1,
                        "deleted": null,
                        "created": "2025-05-19 12:58:18",
                        "deleted_at": null,
                        "follow_up_status": null,
                        "hourly_rate": null,
                        "hourly_rate_currency_code": null,
                        "default_store_id": 1,
                        "default_treasury_id": 1,
                        "maximum_general_discount": 10,
                        "language_code": 7,
                        "branch_id": 1,
                        "default_account_id": null,
                        "attendance_restriction_id": null,
                        "auth_id": 1,
                        "citizenship_status": "citizen",
                        "nationality": null,
                        "official_id": null,
                        "residence_expiry_date": null,
                        "modified": "2026-06-28 18:54:57",
                        "smtp_email_address_id": null,
                        "official_id_unique_check": null
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "المحاسبة",
            "description": null,
            "active": 1,
            "created": "2025-05-26 08:50:47",
            "modified": "2025-05-26 08:50:47",
            "abbr": null,
            "department_managers": null
        }
    ],
    "first_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/department/list/1?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/department/list/1?page=1",
    "links": [
        {
            "url": null,
            "label": "pagination.previous",
            "page": null,
            "active": false
        },
        {
            "url": "https://<<subdomain>>.daftra.com/v2/api/entity/department/list/1?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": null,
            "label": "pagination.next",
            "page": null,
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://<<subdomain>>.daftra.com/v2/api/entity/department/list/1",
    "per_page": 20,
    "prev_page_url": null,
    "to": 2,
    "total": 2
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|null|true|none||none|
|»» active|integer|true|none||none|
|»» created|string|true|none||none|
|»» modified|string|true|none||none|
|»» abbr|string¦null|true|none||none|
|»» department_managers|[object]¦null|true|none||none|
|»»» id|integer|true|none||none|
|»»» manager_id|integer|true|none||none|
|»»» department_id|integer|true|none||none|
|»»» manager_department|object|true|none||none|
|»»»» id|integer|true|none||none|
|»»»» added_by|integer|true|none||none|
|»»»» role_id|integer|true|none||none|
|»»»» code|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» name|string|true|none||none|
|»»»» middle_name|string¦null|true|none||none|
|»»»» last_name|string|true|none||none|
|»»»» full_name|string|true|none||none|
|»»»» photo|null|true|none||none|
|»»»» can_access_system|integer|true|none||none|
|»»»» home_phone|string¦null|true|none||none|
|»»»» business_Phone|null|true|none||none|
|»»»» mobile|string¦null|true|none||none|
|»»»» fax|null|true|none||none|
|»»»» country_code|string|true|none||none|
|»»»» address1|string¦null|true|none||none|
|»»»» address2|string¦null|true|none||none|
|»»»» city|string¦null|true|none||none|
|»»»» state|string¦null|true|none||none|
|»»»» postal_code|string¦null|true|none||none|
|»»»» note|null|true|none||none|
|»»»» email_address|string|true|none||none|
|»»»» password|null|false|none||none|
|»»»» last_login|string|true|none||none|
|»»»» active|integer|true|none||none|
|»»»» deleted|null|true|none||none|
|»»»» created|string|true|none||none|
|»»»» deleted_at|null|true|none||none|
|»»»» follow_up_status|null|true|none||none|
|»»»» hourly_rate|null|true|none||none|
|»»»» hourly_rate_currency_code|null|true|none||none|
|»»»» default_store_id|integer¦null|true|none||none|
|»»»» default_treasury_id|integer¦null|true|none||none|
|»»»» maximum_general_discount|integer¦null|true|none||none|
|»»»» language_code|integer|true|none||none|
|»»»» branch_id|integer|true|none||none|
|»»»» default_account_id|null|true|none||none|
|»»»» attendance_restriction_id|null|true|none||none|
|»»»» auth_id|integer|true|none||none|
|»»»» citizenship_status|string¦null|true|none||none|
|»»»» nationality|null|true|none||none|
|»»»» official_id|null|true|none||none|
|»»»» residence_expiry_date|null|true|none||none|
|»»»» modified|string|true|none||none|
|»»»» smtp_email_address_id|null|true|none||none|
|»»»» official_id_unique_check|null|true|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Department

GET /department/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 1,
    "name": "المالية",
    "description": null,
    "active": 1,
    "created": "2025-05-26 08:50:23",
    "modified": "2025-05-26 08:51:17",
    "abbr": null,
    "managers": [],
    "department_managers": []
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» description|null|true|none||none|
|» active|integer|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|
|» abbr|null|true|none||none|
|» managers|[string]|true|none||none|
|» department_managers|[string]|true|none||none|

## POST Add New Department

POST /department

> Body Parameters

```json
{
    "name": "Sales",
    "branch_id": 1,
    "active": 1,
    "description": "description",
    "abbr": "sls",
    "managers": [
        "1"
    ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» active|body|integer| no |none|
|» description|body|string| no |none|
|» abbr|body|string| no |none|
|» managers|body|[string]| no |[`GET /staff`](https://docs.daftara.dev/15115376e0)|

#### Enum

|Name|Value|
|---|---|
|» active|0|
|» active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة قسم بنجاح",
    "id": 6
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ],
        "abbr": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|

## PUT Edit Department

PUT /department/id

> Body Parameters

```json
{
    "id": 6,
    "name": "Sales",
    "branch_id": 1,
    "active": 0,
    "description": "description",
    "abbr": "sls",
    "managers": [
        "4"
    ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» branch_id|body|integer| no |[`GET /branches`](https://docs.daftara.dev/24700082e0)|
|» active|body|integer| no |none|
|» description|body|string| no |none|
|» abbr|body|string| no |none|
|» managers|body|[string]| no |[`GET /staff`](https://docs.daftara.dev/15115376e0)|

#### Enum

|Name|Value|
|---|---|
|» active|0|
|» active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث قسم بنجاح",
    "id": 6
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل موجود من قبل"
        ],
        "abbr": [
            "هذا الحقل موجود من قبل"
        ]
    }
}
```

```json
{
    "message": "Entity not saved",
    "errors": {
        "name": [
            "هذا الحقل مطلوب ولا يمكن ان يكون فارغ"
        ]
    }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

HTTP Status Code **422**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» errors|object|true|none||none|
|»» name|[string]|true|none||none|
|»» abbr|[string]|true|none||none|

# Endpoints v2/Organizational Structure/Employment Type

## GET Get All Employment Types

GET /employment_type/list/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "دوام كامل",
            "description": null,
            "active": 1,
            "created": "2026-06-22 21:17:21",
            "modified": "2026-06-28 23:35:43"
        }
    ],
    "first_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/employment_type/list/1?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://<<subdomain>>.daftra.com/v2/api/entity/employment_type/list/1?page=1",
    "links": [
        {
            "url": null,
            "label": "pagination.previous",
            "page": null,
            "active": false
        },
        {
            "url": "https://<<subdomain>>.daftra.com/v2/api/entity/employment_type/list/1?page=1",
            "label": "1",
            "page": 1,
            "active": true
        },
        {
            "url": null,
            "label": "pagination.next",
            "page": null,
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://<<subdomain>>.daftra.com/v2/api/entity/employment_type/list/1",
    "per_page": 20,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» current_page|integer|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none||none|
|»» name|string|false|none||none|
|»» description|null|false|none||none|
|»» active|integer|false|none||none|
|»» created|string|false|none||none|
|»» modified|string|false|none||none|
|» first_page_url|string|true|none||none|
|» from|integer|true|none||none|
|» last_page|integer|true|none||none|
|» last_page_url|string|true|none||none|
|» links|[object]|true|none||none|
|»» url|string¦null|true|none||none|
|»» label|string|true|none||none|
|»» page|integer¦null|true|none||none|
|»» active|boolean|true|none||none|
|» next_page_url|null|true|none||none|
|» path|string|true|none||none|
|» per_page|integer|true|none||none|
|» prev_page_url|null|true|none||none|
|» to|integer|true|none||none|
|» total|integer|true|none||none|

## GET Get Single Employment Type

GET /employment_type/id/1

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{
    "id": 1,
    "name": "دوام كامل",
    "description": null,
    "active": 1,
    "created": "2026-06-22 21:17:21",
    "modified": "2026-06-28 23:35:43"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» name|string|true|none||none|
|» description|null|true|none||none|
|» active|integer|true|none||none|
|» created|string|true|none||none|
|» modified|string|true|none||none|

## POST Add New Employment Type

POST /employment_type

> Body Parameters

```json
{
    "name": "Contract",
    "description": "description",
    "active": 1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» description|body|string| no |none|
|» active|body|integer| no |none|

#### Enum

|Name|Value|
|---|---|
|» active|0|
|» active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم إضافة نوع وظيفة بنجاح",
    "id": 4
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

## PUT Edit Employment Type

PUT /employment_type/id

> Body Parameters

```json
{
    "id": 5,
    "name": "Freelance",
    "description": "description",
    "active": 1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|
|body|body|object| no |none|
|» id|body|integer| yes |none|
|» name|body|string| yes |none|
|» description|body|string| no |none|
|» active|body|integer| no |none|

#### Enum

|Name|Value|
|---|---|
|» active|0|
|» active|1|

> Response Examples

> 200 Response

```json
{
    "message": "تم تحديث نوع وظيفة بنجاح",
    "id": 5
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|
|» id|integer|true|none||none|

# Developers Portal

## GET Check App Status

GET /v2/api/app-manager/is_active/{id}

This endpoint returns to you tha activation status of an app

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Accept|header|string| no |none|
|Content-Type|header|string| no |none|
|Authorization|header|string| no |You can generate the bearer token using the the authorization endpoint then use it here to be able to operate over your account's data|
|apikey|header|string| no |You can find/generate your apikey(s) from inside your Daftra Account|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Data Schema

