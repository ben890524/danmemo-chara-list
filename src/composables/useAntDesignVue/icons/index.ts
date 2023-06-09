import type { App } from 'vue';
import * as antIcons from '@ant-design/icons-vue';

// 使用组件
// <component :is="menu.icon" />
// <component is="PieChartOutlined" />
export function setupAntdIcon(app: App<Element>): void {
  // 註冊元件
  Object.keys(antIcons).forEach((key) => {
    app.component(key, antIcons[key as keyof typeof antIcons]);
  });
}
