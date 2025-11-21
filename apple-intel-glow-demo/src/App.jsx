import React from 'react'
import { AppleIntelligenceGlow, AppleIntelligenceLockScreen } from 'apple-intelligence-lock-screen'
import './App.css'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '60px',
        padding: '40px 20px',
      }}
    >
      <h1 style={{ margin: 0, color: '#333', fontSize: '2rem' }}>
        Apple Intelligence Glow 测试
      </h1>

      {/* 测试 1: 只使用 Glow 效果 + 自定义内容 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h2 style={{ margin: 0, color: '#666', fontSize: '1.2rem' }}>自定义内容 + Glow</h2>
        <AppleIntelligenceGlow
          radius={50}
          style={{
            width: 360,
            height: 720,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            padding: '40px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '10px' }}>
              My Custom
            </div>
            <div style={{ fontSize: '1.2rem', opacity: 0.8 }}>
              Lock Screen or Card
            </div>
          </div>
        </AppleIntelligenceGlow>
      </div>

      {/* 测试 2: 完整的锁屏 Demo（可选） */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h2 style={{ margin: 0, color: '#666', fontSize: '1.2rem' }}>完整锁屏 Demo</h2>
        <AppleIntelligenceLockScreen
          width={360}
          height={720}
          showHelperText={true}
        />
      </div>
    </div>
  )
}

export default App
