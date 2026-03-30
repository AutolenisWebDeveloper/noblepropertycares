export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
  quickReplies?: string[]
}

export type TaskFlowType = "service-request" | "contact" | "callback"

export interface TaskFlowState {
  type: TaskFlowType
  step: number
  data: Record<string, string>
}

export interface ConversationState {
  taskFlow: TaskFlowState | null
  userName: string | null
  discussed: string[]
}

export interface DetectedIntent {
  name: string
  confidence: number
}

export interface FormAction {
  type: "submit-service-request" | "submit-contact"
  data: Record<string, string>
}

export interface ProcessResult {
  replies: ChatMessage[]
  newState: ConversationState
  action?: FormAction
}
