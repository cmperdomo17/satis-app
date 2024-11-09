export interface ApiResponse {
    approved: number;
    assigned: number;
    closed: number;
    dispatched: number;
    escalated_tto: number;
    escalated_ttr: number;
    new: number;
    pending: number;
    redispatched: number;
    rejected: number;
    resolved: number;
    waiting_for_approval: number;
    total: number;
}