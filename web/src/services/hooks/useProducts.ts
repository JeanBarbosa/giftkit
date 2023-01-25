import { useQuery } from "react-query"
import { api } from "../api"

type ProductImage = {
  id: string,
  width: number,
  height: number,
  url: string,
}

type Product = {
  id: number,
  name: string,
  categories: string[],
  slug: number,
  description: string,
  brand: string,
  image: ProductImage[],
  hasFreeShipping: boolean,
  rating: number,
  recordId: string,
  minimumQuantity: number,
  total_stock: number,
  kitManagerVariations: string,
  price: number,
}

type Category = {
  recordId: string,
  publicId: string,
}

type GetProductsResponse = {
  products: Product[]
}

type GetCategoriesResponse = {
  categories: Category[]
}

export async function getCategories(page: number): Promise<GetCategoriesResponse> {
  const { data } = await api.get('categories', {
    params: {
      page
    }
  })

  const categories = data.map((category: any) => {
    return {
      recordId: category.record_id,
      publicId: category.public_id,
    }
  })

  return {
    categories
  }
}

export async function getProducts(page: number): Promise<GetProductsResponse> {
  const { data } = await api.get('products', {
    params: {
      page
    }
  })

  return {
    products: data.products
  }
}

export function useProducts(page: number) {
  return useQuery(['products', page], () => getProducts(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}

export function useCategories(page: number) {
  return useQuery(['categories', page], () => getCategories(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}