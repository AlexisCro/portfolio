export async function renderPartial(path, target) {
  try {
    const response = await fetch(path)
    if (!response.ok) throw new Error(`Failed to load template from ${url}`)

    const html     = await response.text()

    target.insertAdjacentHTML('afterbegin', html)
  } catch (error) {
    console.error(error)
    return null
  }
}