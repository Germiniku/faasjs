# Class: Response<T\>

Response class

Example:
```ts
new Response({
  status: 200,
  data: {
    name: 'FaasJS'
  }
})
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

- [constructor](Response.md#constructor)

### Properties

- [body](Response.md#body)
- [data](Response.md#data)
- [headers](Response.md#headers)
- [status](Response.md#status)

## Constructors

### constructor

• **new Response**<`T`\>(`__namedParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.body?` | `any` |
| `__namedParameters.data?` | `T` |
| `__namedParameters.headers` | [`ResponseHeaders`](../#responseheaders) |
| `__namedParameters.status` | `number` |

## Properties

### body

• `Readonly` **body**: `any`

___

### data

• `Readonly` **data**: `T`

___

### headers

• `Readonly` **headers**: [`ResponseHeaders`](../#responseheaders)

___

### status

• `Readonly` **status**: `number`
