240px Sunset-gradient left rail (right corners 20px, orange edge spill). The only full-bleed gradient in the product.

```jsx
<div style={{ display: "flex" }}>
  <Sidebar active={page} onNav={setPage} />
  <main style={{ flex: 1 }}>…</main>
</div>
```

- Nav hover rgba(255,255,255,.12); active rgba(255,255,255,.25) + weight 600.
- Sticky, 100vh by default — override `style.height` for embedded previews.
