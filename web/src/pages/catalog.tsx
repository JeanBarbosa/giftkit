import { Input } from '@/components/Input'
import RadioGroupCategories from '@/components/RadioGroupCategories'
import {
  CatalogContainer,
  CategoriesContainer,
  ProductsContainer
} from '@/styles/pages/catalog'

export default function Catalog() {
  return (
    <CatalogContainer>
      <CategoriesContainer>
        <RadioGroupCategories />
      </CategoriesContainer>
      <ProductsContainer>
        <Input placeholder='pesquisar pelo nome' />
        <h1>
          Não envie brindes, <br />
          crie experiências! 🚀
        </h1>
        <p>
          Faça a gestão de todos os seus brindes <br />
          e produtos personalizados de maneira <br />
          mais simples na nossa plataforma! 🧡
        </p>
      </ProductsContainer>
    </CatalogContainer>
  )
}